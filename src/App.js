import logo from "./logo.svg";
import "./App.css";
import "./main.css";

function App() {
  return (
    <div className="App">
      <div className="contaner">
      <nav className="nav_box">
        <img src="logo.png" alt="loga" />
        <ul className = "ul_cart">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
        <button className="button_loga">loga</button>
      </nav>
      <div className="text_box">
           <h2 className="text_h2">Exclusive Deals of  Furniture Collection</h2>
           <p className="text_p">Explore different categories. Find the best deals.</p>
           <button className="text_button">Shop Now</button>
      </div>
      </div>
    </div>
  );
}

export default App;
