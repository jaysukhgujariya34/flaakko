"use client";

import React, { createRef, FC, useEffect, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "@/shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const inputRef = createRef<HTMLInputElement>();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const router = useRouter();

    const isBigScreen = useMediaQuery({
      query: "(min-width: 900px)",
    });
  
    useEffect(() => {
      setShowContent(false);

      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);

      return () => clearTimeout(timer);
    }, [isBigScreen]);

  // navbar main -----------------------------------------------------------------------------------------

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        className="flex-1 py-2 text-slate-900 dark:text-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/search");
          inputRef.current?.blur();
        }}
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            ref={inputRef}
            type="text"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
          />
          <button type="button" onClick={() => setShowSearchForm(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderContent = () => {
    return (
      <div className="h-30 flex justify-between">
        <div className="lg:flex-1 flex items-center">
          <Logo className="flex-shrink-0 w-32" />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          {showSearchForm ? renderSearchForm() : <Navigation />}
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          {!showSearchForm && (
            <button
              className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
              onClick={() => setShowSearchForm(!showSearchForm)}
            >
              {renderMagnifyingGlassIcon()}
            </button>
          )}
          <AvatarDropdown />
          <CartDropdown />
        </div>
        <div className="flex items-center lg:hidden">
          <MenuBar />
        </div>
      </div>
    );
  };

  return (
    <div
      className="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700 sm:mx-20 md:mx-20 xl:mx-64 "
      style={{
        borderRadius: "0px 0px 3rem 3rem",
        boxShadow: "0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a",
      }}
    >
      <div className="container ">{renderContent()}</div>
    </div>
  );
};

export default MainNav2Logged;
