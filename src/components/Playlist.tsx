import React, { useEffect, useState } from 'react';
import usePlaylistData from '../hooks/usePlaylistData';
import { Song } from './types';

type PlaylistProps = {
    onSongSelect: (song: Song) => void;
    setSongs: (songs: Song[]) => void;
    onShuffleToggle?: () => void;
    isShuffleOn?: boolean;
}

const Playlist = ({ onSongSelect, setSongs, onShuffleToggle, isShuffleOn }: PlaylistProps) => {
    const { data: songs, loading, error } = usePlaylistData();
    // const [songs, setSongsState] = useState<Song[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setSongs(songs);
    }, [songs, setSongs]);
    //     const fetchSongs = async () => {
    //         try {
    //             const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data: Song[] = await response.json();
    //             setSongsState(data);
    //             setSongs(data);
    //         } catch (error) {
    //             setError((error as Error).message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchSongs();
    // }, [setSongs]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="p-4 bg-gray-light rounded-md">
            <h1 className="text-black text-xl font-bold p-2">Playlist</h1>
            <div className="space-y-2">
                {songs.map((song) => (
                    <div
                        key={song.title + song.artist}
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
};

export default Playlist;
