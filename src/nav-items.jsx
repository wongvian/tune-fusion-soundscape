import { HomeIcon, SearchIcon, LibraryIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Browse from "./pages/Browse.jsx";
import Library from "./pages/Library.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Browse",
    to: "/browse",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <Browse />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <LibraryIcon className="h-4 w-4" />,
    page: <Library />,
  },
];
