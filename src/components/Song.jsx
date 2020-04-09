import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledDiv = styled.div`
border: 1px solid black
`;

const Song = (props) => (
    <StyledDiv >
        {props.song.title}
        <ReactMarkdown source={props.song.content} />
    </StyledDiv>
);

export default Song
