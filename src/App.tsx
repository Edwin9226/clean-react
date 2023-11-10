import "./App.css";
import GeolocationContainer from "./components/Geolocation/GeolocationContainer";
import { Link } from "./components/Link";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <GeolocationContainer />
      <MyComponent />
      <Link link={"react.dev"} urls={"//react.dev"} />
    </div>
  );
}

export default App;
