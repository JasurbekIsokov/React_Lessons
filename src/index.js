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
import faker from "@faker-js/faker";
import CommentComponent from "./CommentComponent.js";
import CardComponent from "./CardComponent.js";

const App = function () {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          day={1}
          star={5}
          image={faker.image.avatar()}
          text={faker.lorem.paragraph()}
        />
      </CardComponent>

      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          day={1}
          star={5}
          image={faker.image.avatar()}
          text={faker.lorem.paragraph()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          day={1}
          star={5}
          image={faker.image.avatar()}
          text={faker.lorem.paragraph()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          day={1}
          star={5}
          image={faker.image.avatar()}
          text={faker.lorem.paragraph()}
        />
      </CardComponent>
      <CardComponent>
        <CommentComponent
          name={faker.name.firstName()}
          day={1}
          star={5}
          image={faker.image.avatar()}
          text={faker.lorem.paragraph()}
        />
      </CardComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
