import React from 'react';
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

export default function Playlist({playlistTracks, onRemove, isRemoval, onNameChange, onSave}){

  function handelNameChange(event){
    const newName= event.target.value;
    onNameChange(newName);
  }

 

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handelNameChange} />
      <TrackList tracks={playlistTracks } onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );

}




