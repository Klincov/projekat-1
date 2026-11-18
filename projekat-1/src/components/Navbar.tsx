
import { NavLink } from "react-router-dom";

const links = [
  { name: "Početna", path: "/" },
  { name: "O česmama", path: "/o-cesmama" },
  { name: "Galerija", path: "/galerija"},
  { name: "O projektu", path: "/o-projektu" },
  { name: "Interkativne Radionice", path: "/radionice" },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          Česme SM
        </NavLink>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
