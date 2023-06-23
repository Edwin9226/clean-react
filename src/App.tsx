import "./App.css";
import GeolocationContainer from "./components/Geolocation/GeolocationContainer";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <GeolocationContainer />
      <MyComponent />
    </div>
  );
}

export default App;
