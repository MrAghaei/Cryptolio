"use client";
import { useState } from "react";
import {Bitcoin} from "lucide-react";

function Header() {
  const navigationLinkNames = ["Overview", "Manage", "Top Coins"];
  //region hooks
  const [activeIndex, setActiveIndex] = useState<number>(0);
  //endregion

  //region functions
  function handleNavigationButtonClick(index: number): void {
    setActiveIndex(index);
  }
  //endregion
  return (
    <div className="flex gap-10 justify-between items-center px-10 py-7">
      <div className='flex items-center'>
        <Bitcoin />
        <h2 className="font-bold cursor-pointer">Cryptolio</h2>
      </div>

      {/*Navigation*/}
      <div className="flex gap-2">
        {navigationLinkNames.map((linkName, index) => (
          <button
            onClick={() => handleNavigationButtonClick(index)}
            key={linkName}
            className={`rounded-full px-6 py-3 shadow-sm w-32
             ${activeIndex === index ? "bg-gradient-to-r from-black to-button_blue text-white" : "bg-white"}`}
          >
            {linkName}
          </button>
        ))}
      </div>
      {/*Profile button*/}
      <div>Profile button</div>
    </div>
  );
}

export default Header;
