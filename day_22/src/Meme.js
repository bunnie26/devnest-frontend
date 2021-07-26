import React from "react";

function Meme({ meme }) {
  return (
    <div className="meme">
      <img src={meme.url} />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input type="text" className="input" placeholder={`Meme Caption ${index+1}`} />
        ))}
      </div>
      {/* <div className="buttons">
        <button className="button">1</button>
        <button>2</button>
      </div> */}
    </div>
  );
}

export default Meme;
