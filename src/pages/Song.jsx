import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import SongComponent from '../components/Song.jsx'
import {Songs as SongsModel} from '../services/dataProvider/Songs';
import {PATH_SONGS} from '../routes';

class Song extends React.Component {
    render() {
        const sortedSongs = new SongsModel();
        const song = sortedSongs.songs.find(song => song.name === this.props.match.params.nombre);
        return (
            <>
                <Link to={PATH_SONGS}>Atras</Link>
                <SongComponent song={song}/>
            </>
        )
    }
}

export default withRouter(Song);
