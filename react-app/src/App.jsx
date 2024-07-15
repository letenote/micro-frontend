import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const ButtonReact = React.lazy(() => import("react_component/Button"));
import ButtonaAngularModule from "./modules/ButtonaAngularModule";

const App = () => {
  return (
    <div className="container">
      <div>
        <div>Name: react-app</div>
        <div>Framework: react</div>
      </div>
      <React.Suspense>
        <ButtonReact title={"ClickMe:import:from:component"} />
        <ButtonaAngularModule />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
