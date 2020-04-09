import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { Songs as SongsModel } from '../services/dataProvider/Songs';

import { PATH_SONG_WITH_ARG } from '../routes'

const CustomTitle = styled.h1`
color: red;
`;

const StyledDiv = styled.div`
border: 1px solid black
`;

const Songs = () => {
    const sortedSongs = new SongsModel();
    const songs = sortedSongs.songs.map((song, index) => (
        <StyledDiv key={index}>
            <Link to={PATH_SONG_WITH_ARG(song.name)}>
                {song.title}
            </Link>
        </StyledDiv>
        )
    );

    return (
      <div>
        <CustomTitle>
          Songs
        </CustomTitle>
            {songs}
      </div>
    )
};

export default Songs
