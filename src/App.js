import "./styles.css";
import React from "react";
const Header = () => {
  return (
    <div className="head-container">
      <img
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        className="head-image"
      ></img>
      <h1 className="head-text">Name It!</h1>;
    </div>
  );
};
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
function App1() {
  return (
    <div>
      <Header />
    </div>
  );
}
export default App;
