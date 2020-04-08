import React from 'react';
import ReactDOM from 'react-dom'
import { OpenSheetMusicDisplay} from 'opensheetmusicdisplay';



class Score extends React.Component {

    componentDidMount() {
        this.container = ReactDOM.findDOMNode(this);
        this.score = this.container.querySelector('.score');
        this.osmd = new OpenSheetMusicDisplay(this.score, {autoResize: false});
        const promise = this.osmd.load('../../musica/1-canto-de-alegria.musicxml')
        promise.then(()=> this.osmd.render());
    }

    render() {

        return (
            <div className='scoreContainer' style={{width: "100%", border: '1px black solid'}}>
              <div className='score' style={{width: "100%", border: '1px red solid'}}/>
            </div>
        )
    }
}

export default Score;

