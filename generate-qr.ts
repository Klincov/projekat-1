/**
 * Generiše QR kod za svaku česmu.
 * Svaki kod vodi na srpsku verziju sajta i otvara karticu te česme.
 *
 * Pokretanje (iz korena projekta):
 *   npm i -D qrcode tsx @types/qrcode
 *   npx tsx scripts/generate-qr.ts
 *
 * Drugi domen (npr. za testiranje):
 *   SITE_URL=https://moj-test.netlify.app npx tsx scripts/generate-qr.ts
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import QRCode from "qrcode";

import { fountains } from "../src/data/fountain";

const SITE_URL = (
  process.env.SITE_URL ?? "https://digitalnecesmesm.com"
).replace(/\/$/, "");

const OUT_DIR = path.resolve("qr-kodovi");

// lang=sr: QR kod uvek otvara srpsku verziju
const buildUrl = (id: number) => `${SITE_URL}/?cesma=${id}&lang=sr`;

// npr. "cesma-01-b-38"; česma bez oznake u zagradi dobija samo redni broj
function fileBase(id: number, name: string) {
  const code = name.match(/\(([A-Za-z]-\d+)\)\s*$/)?.[1]?.toLowerCase();
  return `cesma-${String(id).padStart(2, "0")}${code ? `-${code}` : ""}`;
}

// Isti parametri za SVG i PNG
const options = {
  errorCorrectionLevel: "Q" as const, // otporan na prljavštinu i oštećenja
  margin: 4, // obavezan beli okvir oko koda
};

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const rows = ["id;naziv;link;fajl"];

  for (const fountain of fountains) {
    const url = buildUrl(fountain.id);
    const name = fountain.name.sr;
    const base = fileBase(fountain.id, name);

    const svg = await QRCode.toString(url, { ...options, type: "svg" });
    const png = await QRCode.toBuffer(url, {
      ...options,
      type: "png",
      width: 1200,
    });

    await writeFile(path.join(OUT_DIR, `${base}.svg`), svg, "utf-8");
    await writeFile(path.join(OUT_DIR, `${base}.png`), png);

    rows.push(`${fountain.id};"${name}";${url};${base}`);
    console.log(`${base}  ->  ${url}`);
  }

  await writeFile(
    path.join(OUT_DIR, "spisak.csv"),
    "﻿" + rows.join("\n") + "\n",
    "utf-8"
  );

  console.log(`\nGotovo: ${fountains.length} QR kodova u ${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
