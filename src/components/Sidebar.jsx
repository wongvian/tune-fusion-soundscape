import { Link } from 'react-router-dom';
import { HomeIcon, SearchIcon, LibraryIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center text-gray-300 hover:text-white">
              <HomeIcon className="mr-4" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="flex items-center text-gray-300 hover:text-white">
              <SearchIcon className="mr-4" />
              Browse
            </Link>
          </li>
          <li>
            <Link to="/library" className="flex items-center text-gray-300 hover:text-white">
              <LibraryIcon className="mr-4" />
              Your Library
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;