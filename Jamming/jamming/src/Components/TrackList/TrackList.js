import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({ tracks ,onAdd, onRemove, isRemoval }){
  if (!tracks) {
    return null; // Return null or handle the case when tracks is undefined
  }


  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id}
         track={track} 
         onAdd={onAdd}
         onRemove={onRemove}
         isRemoval={isRemoval}
         />
      ))}
    </div>
  );
}

