import { PlayIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const Player = () => {
  return (
    <div className="bg-gray-900 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/placeholder.svg" alt="Album cover" className="w-12 h-12 mr-4" />
        <div>
          <h3 className="font-semibold">Song Title</h3>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SkipBackIcon className="cursor-pointer" />
        <PlayIcon className="cursor-pointer" />
        <SkipForwardIcon className="cursor-pointer" />
      </div>
      <div className="flex items-center w-1/4">
        <VolumeIcon className="mr-2" />
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      </div>
    </div>
  );
};

export default Player;