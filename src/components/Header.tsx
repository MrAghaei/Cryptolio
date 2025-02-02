"use client";
import { Bitcoin } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const navigationLinkNames = ["overview", "Manage", "Top Coins"];
  //region hooks
  const router = useRouter();
  const pathname = usePathname().toLowerCase();
  //endregion

  //region functions
  function handleNavigationButtonClick(linkName: string): void {
    const url = `/${linkName.toLowerCase().replace(/\s+/g, "-")}`;
    router.replace(url);
  }
  function handleLogout() {
    console.log("logged out");
  }
  //endregion
  return (
    <div className="flex gap-10 justify-between items-center px-10 py-7">
      <div className="flex items-center">
        <Bitcoin size={35} />
        <h2 className="font-bold cursor-pointer">Cryptolio</h2>
      </div>

      {/*Navigation*/}
      <div className="flex gap-2">
        {navigationLinkNames.map((linkName) => {
          const isActive =
            pathname === `/${linkName.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <button
              onClick={() => handleNavigationButtonClick(linkName)}
              key={linkName}
              className={`rounded-full px-6 py-3 shadow-sm w-32 duration-300
             ${isActive ? "bg-gradient-to-r from-black to-button_blue text-white" : "bg-white hover:bg-gray-100"}`}
            >
              {linkName}
            </button>
          );
        })}
      </div>
      {/*Profile button*/}
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-red-900 to-red-800 text-white px-3 py-1 rounded-full"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;
