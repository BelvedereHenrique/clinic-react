import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

import { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="flex flex-col backdrop-blur bg-lightBrown/30 p-6 max-w-md h-screen shadow-2xl  relative top-0 left-0">
        <Logo />
        <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-yellow-900" />
        <NavBar />
      </div>
    );
  }
}
