import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from "./VolumeControl";

export default function CurrentlyPlaying({ song }) {
  return (
    <div>
      <CoverArt />
      <SongTitle 
        title={song ? song.title : 'No Song Playing'} 
        artist={song ? song.artist : ''}
      />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
