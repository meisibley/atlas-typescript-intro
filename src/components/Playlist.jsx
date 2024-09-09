import React from 'react';

const songs = [
    { title: "Painted in Blue", artist: "Soul Canvas", duration: "5:55" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", duration: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", duration: "3:01" },
    { title: "Cosmic Drift", artist: "Solar Flare", duration: "5:01" },
    { title: "Urban Serenade", artist: "Midnight Groove", duration: "4:54" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", duration: "6:13" },
    { title: "Electric Fever", artist: "Neon Jungle", duration: "8:41" },
    { title: "Edge of the Abyss", artist: "Steel Horizon", duration: "2:27" },
    { title: "Golden Haze", artist: "Velvet Waves", duration: "3:15" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", duration: "8:22" },
];

export default function Playlist({ onSongSelect }) {
    return (
      <div className="p-4 bg-gray-light rounded-md">
        <h1 className="text-black text-xl font-bold p-2">Playlist</h1>
        <div className="space-y-2">
            {songs.map((song, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center mt-2 hover:bg-purple-300 active:bg-blue-300 cursor-pointer"
                    onClick={() => onSongSelect(song)}
                >
                    <div className="w-1/2">
                        <h2 className="text-black text-md font-semibold pl-2">{song.title}</h2>
                        <p className="text-gray font-semibold pl-2">{song.artist}</p>
                    </div>
                    <div className="w-1/2 text-gray font-semibold text-right pr-2">{song.duration}</div>
                </div>
            ))}
        </div>
      </div>
    );
}
