import React from 'react';
function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../../letras/', true, /\.md$/));

const Songs = () => {
  return (
      <div>
        <p>
          Songs
        </p>
      </div>
  )
};

export default Songs
