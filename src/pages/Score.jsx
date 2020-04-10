import React from 'react';
import ReactDOM from 'react-dom'
import { OpenSheetMusicDisplay} from 'opensheetmusicdisplay';
import { withRouter } from 'react-router';

import { SCORES } from '../services/dataProvider/Scores';
import {Link} from 'react-router-dom';
import {PATH_SONG_WITH_ARG} from '../routes';

class Score extends React.Component {

    componentDidMount() {
        const scoreName = `${this.props.match.params.nombre}.musicxml`;
        this.scoreFile = SCORES[scoreName];
        this.container = ReactDOM.findDOMNode(this);
        this.score = this.container.querySelector('.score');
        this.osmd = new OpenSheetMusicDisplay(this.score, {autoResize: false});
        if (this.score) {
            const promise = this.osmd.load(this.scoreFile.default);
            promise.then(()=> this.osmd.render());
        }
    }

    render() {

        return (
                <div className='scoreContainer' style={{width: "100%", border: '1px black solid'}}>
                    <Link to={PATH_SONG_WITH_ARG(this.props.match.params.nombre)}> Atras </Link>
                    <div className='score' style={{width: "100%", border: '1px red solid'}}/>
                    {
                        !!this.scoreFile && (
                            <div> Partitura no creada </div>
                        )
                    }

                </div>
        )
    }
}

export default withRouter(Score);

