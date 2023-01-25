import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
function App() {
  const person = {
    first: "Ibrahim",
    last: "Oliyide"
  }
  return (
    <div className="App">
      <Greet name="Ibrahim" />
      <Person name={person} />
    </div>
  );
}

export default App;
