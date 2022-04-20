// import React from "react";
// import ReactDOM from "react-dom";

// function data() {
//   let date = new Date();
//   let yil = date.getFullYear();
//   let oy = date.getMonth();

//   let kun = date.getDate();
//   let minut = date.getMinutes();
//   let vaqt = date.getHours();

//   return { vaqt, minut, kun, oy, yil };
// }

// let obj = data();

// const App = function () {
//   return (
//     <div>
//       <h1>
//         {obj.vaqt}:{obj.minut} {obj.kun}/{obj.oy + 1}/{obj.yil}
//       </h1>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.querySelector("#root"));

////////////////////////////////////////////////////////////////////////////////////////////

// Lesson 2

import React from "react";
import ReactDOM from "react-dom";

const App = function () {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src="/images/avatar/small/stevie.jpg" />
        </a>
        <div className="content">
          <a className="author">Stevie Feliciano</a>
          <div className="metadata">
            <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>5 Faves
            </div>
          </div>
          <div className="text">
            Hey guys, I hope this example comment is helping you read this
            documentation.
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
