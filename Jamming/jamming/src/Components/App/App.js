import React, { useState, useCallback } from "react";
import "./App.css";
import Spotify from "../../util/Spotify";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


const App = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  const [ playlistName, setPlaylistName ] = useState("My Playlist");

  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  function addTrack(track){
    const trackId = track.id;
    const existingTrack = playlistTracks.find((track) =>  track.id === trackId);

    if(!existingTrack){
      const updatePlaylist = [...playlistTracks, track];
      setPlaylistTracks(updatePlaylist);
    }
  };

  function removeTrack(track){
    const trackId= track.id;
    const updatePlaylist = playlistTracks.filter((t) => t.id !== trackId);
      setPlaylistTracks(updatePlaylist);
    }
  

    function updatePlaylistName(name){
      setPlaylistName(name);
    }

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    }, [playlistName, playlistTracks]);

    function search(term){
      Spotify.search(term).then(setSearchResults);
  }

  return (
    <div>
      <h1>
        Spot<span className="highlight">ifyTun</span>ner
      </h1>
      <div className="App">
        <SearchBar  onSearch={search}/>
        <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
};

export default App;
