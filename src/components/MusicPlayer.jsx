import React from 'react';
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer({ currentSong, onSongSelect }) {
    return (
      <div>
        <div className="flex mt-2 shadow-lg">
            <div className="max-w-md mx-auto w-full h-auto md:w-1/2 lg:w-1/2">
                <CurrentlyPlaying song={currentSong} />
                <div className="md:hidden lg:hidden">
                    <Playlist onSongSelect={onSongSelect} />
                </div>
            </div>
            <div className="hidden md:block lg:block w-px md:bg-gray lg:bg-gray"></div>
            <div className="hidden max-w-md mx-auto md:block lg:block md:w-1/2 lg:w-1/2">
                <Playlist onSongSelect={onSongSelect} />
            </div>
        </div>
      </div>
    );
}
