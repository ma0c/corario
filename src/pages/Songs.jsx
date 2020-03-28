import React from 'react';
import ReactMarkdown from 'react-markdown';
const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('../../letras/', true, /\.md$/));

const Songs = () => {
    const titles = Object.keys(cache).map((name, index) => (
        <div key={index}>
            {name}
            <ReactMarkdown source={cache[name].default} />
        </div>
        )
    );
    console.log(cache);
    return (
      <div>
        <h1>
          Songs
        </h1>

            {titles}


      </div>
    )
};

export default Songs
