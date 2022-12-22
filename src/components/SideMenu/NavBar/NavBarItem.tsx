import React from "react";
import { NavBarItemProps } from "../../../types/NavBarItemProps";

//props: {children: React.ReactNode}
export default function NavBarItem({ name, href }: NavBarItemProps) {
  return (
    <a
      href={href}
      className="text-yellow-900 bg-orange-100/50 hover:bg-yellow-900 hover:text-orange-100 rounded transition duration-200 ease-in-out p-6 mb-4 shadow-md"
    >
      {name}
    </a>
  );
}
