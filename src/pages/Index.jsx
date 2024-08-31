import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Index;
