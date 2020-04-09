import React from 'react';
import { withRouter } from 'react-router';

import SongComponent from '../components/Song.jsx'
import {Songs as SongsModel} from '../services/dataProvider/Songs';

class Song extends React.Component {
    render() {
        const sortedSongs = new SongsModel();
        const song = sortedSongs.songs.find(song => song.name === this.props.match.params.nombre);
        return (
            <SongComponent song={song}/>
        )
    }
}

export default withRouter(Song);
