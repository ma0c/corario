import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('../../letras/', true, /\.md$/));

const CustomTitle = styled.h1`
color: red;
`;

const StyledDiv = styled.div`
border: 1px solid black
`;

const Songs = () => {
    const songs = Object.keys(cache).map((name, index) => (
        <StyledDiv key={index}>
            {name}
            <ReactMarkdown source={cache[name].default} />
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
