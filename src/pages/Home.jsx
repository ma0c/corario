import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {PATH_SONGS} from '../routes';
import FlipPage from 'react-flip-page'

import portada from '../assets/images/portada.jpg'
import estela from '../assets/images/estela.jpg'

const FullPageContainer = styled.div`
    position: relative;
    min-height: 90vh;
`;

const Album = styled(FlipPage)`
    position: absolute !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
`;

const CenteredImage = styled.img`
    
    min-height: 100%;
    display: block;
    max-width: 100%;
    max-height: 100%;
    
`;

const Home = () => {
    return (
        <FullPageContainer>
            <h1> Hello World </h1>
            <Link to={PATH_SONGS}>Canciones</Link>
            <Album
                orientation="horizontal"
                style={{position: "absolute", border: "1px solid black"}}
            >
                <CenteredImage src={portada}/>
                <CenteredImage src={estela}/>
            </Album>

        </FullPageContainer>
    )

};

export default Home;
