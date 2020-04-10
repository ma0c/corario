import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {PATH_SCORE_WITH_ARG} from '../routes';

const StyledDiv = styled.div`
border: 1px solid black
`;

const Song = (props) => (
    <StyledDiv >
        <h1>
            {props.song.title}
        </h1>
        <i>
            <Link to={PATH_SCORE_WITH_ARG(props.song.name)}>
                Partitura
            </Link>
        </i>
        <ReactMarkdown source={props.song.content} />
    </StyledDiv>
);

export default Song
