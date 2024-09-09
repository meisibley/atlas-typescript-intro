import unselectedPlaylist from "../../images/playlistitem.png";
import selectedPlaylist from "../../images/playlistitem-selected.png";

export default function PlayListItem() {
    return <>
        <div className="text-xl font-bold m-2">Unselected</div>
        <img src={unselectedPlaylist} alt="Unselected Play List" />
        <div className="text-xl font-bold m-2">Selected</div>
        <img src={selectedPlaylist} alt="Selected Play List" />
    </>
}
