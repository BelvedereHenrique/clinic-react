import React from "react";
import Logo from "../Logo";
import NavBarItem from "./NavBarItem";
import SignIn from "./SignIn";

type NavBarItemProps = {
  name: string;
  href?: string;
};
export default function NavBar() {
  const items: Array<NavBarItemProps> = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <nav className="flex flex-col flex-grow mt-6">
        {items.map((item, index) => {
          return <NavBarItem key={index} {...item} />;
        })}
      </nav>
      <div className="inset-x-0 bottom-0">
        <SignIn />
      </div>
    </>
  );
}
