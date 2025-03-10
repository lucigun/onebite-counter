import "./App.css";
import Viewer from "./componetns/Viewer";
import Controller from "./componetns/Controller";

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
