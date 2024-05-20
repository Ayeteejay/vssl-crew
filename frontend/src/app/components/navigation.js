"use client"
import { useState } from "react"
import Link from "next/link";
import { Logo } from "./Logo";

export default function Navigation({navigationItems}) {
  const [menuClass, setMenuClass] = useState({
    active: false,
    top_line: "transition-all duration-300 h-[1px] w-6 bg-smoke block",
    bottom_line:
      "transition-all duration-300 h-[1px] w-6 mt-[6px] bg-smoke block",
    menu: "-translate-y-35 invisible opacity-0",
  });
  const handleMenuClick = () => {
    setMenuClass((prevState) => {
      const isActive = !prevState.active;
      const topLineClass = isActive
        ? "transition-all duration-300 h-[1px] w-6 bg-smoke block rotate-45 translate-y-[2px]"
        : "transition-all duration-300 h-[1px] w-6 bg-smoke block";
      const bottomLineClass = isActive
        ? "transition-all duration-300 h-[1px] w-6 mt-[6px] bg-smoke block -rotate-45 -translate-y-[5px]"
        : "transition-all duration-300 h-[1px] w-6 mt-[6px] bg-smoke block";
      const menuClass = isActive
        ? "translate-y-10 visible opacity-100"
        : "-translate-y-35 invisible opacity-0";
      return {
        active: isActive,
        top_line: topLineClass,
        bottom_line: bottomLineClass,
        menu: menuClass,
      };
    });
  };
  const MenuButton = ({containerClass}) => {
    return (
      <button
      onClick={handleMenuClick}
      className={containerClass}>
        <span className={menuClass.top_line}></span>
        <span className={menuClass.bottom_line}></span>
      </button>
    )
  }
  return (
    <>
      {/* Desktop Menu */}
      <div className="fixed w-full bg-bronze flex items-center justify-between text-sm uppercase text-ink gin-regular leading-tight px-6 py-2 md:[writing-mode:vertical-lr] md:px-1 md:pb-2 md:pt-8 md:w-auto md:h-full md:rotate-180">
        <ul className="gap-x-16 hidden md:flex">
          {navigationItems.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="cursor-pointer transition-all duration-500 hover:text-smoke"
                  target={link.target}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <MenuButton containerClass={"block cursor-pointer md:hidden"}/>
        <Link href="/" className="cursor-pointer header-logo-link">
          <Logo />
        </Link>
      </div>
      {/* Mobile Menu */}
      <div
        className={`z-20 flex items-end transition-all duration-500 fixed -top-10 pb-10 px-6 bg-ink h-full w-full ${menuClass.menu}`}>
        <MenuButton containerClass={"absolute top-5 left-6 cursor-pointer md:hidden"}/>
        <ul>
          {navigationItems.map((link) => {
            return (
              <li key={link.id} className="mb-3">
                <Link
                  href={link.href}
                  className="gin-regular text-4xl cursor-pointer transition-all duration-500 hover:text-bronze"
                  target={link.target}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
