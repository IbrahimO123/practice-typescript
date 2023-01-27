import { Button } from "./components/state/Button";
import { Counter } from "./components/state/Counter";
import { Greet } from "./components/state/Greet";
import { Heading } from "./components/state/Heading";
import { Input } from "./components/state/Input";
import { Oscar } from "./components/state/Oscar";
import { Person } from "./components/state/Person";
import { PersonLists } from "./components/state/PersonLists";
import { Status } from "./components/state/Status";
import { User } from "./components/state/User";
import { UserContextProvider } from "./components/state/UserContext";
import { Form } from './components/state/Form';
import { MutableRef } from "./components/state/MutableRef";
function App() {
  const person = {
    first: "Oliyide",
    last: "Zainab",
  };
  const personList = [
    {
      first: "Ibrahim",
      last: "Oliyide",
    },
    {
      first: "Temitope",
      last: "Alabi",
    },
    {
      first: "Oluwaseun",
      last: "Adu",
    },
    {
      first: "Kazeem",
      last: "Adewale",
    },
  ];
  return (
    <UserContextProvider>
      <div className="App">
        <Greet name="Ibrahim" isLoggedIn={true} />
        <Person name={person} />
        <PersonLists names={personList} />
        <Status status="loading" />
        <Oscar>
          <Heading>
            Welcome to my world of learning....Hope you enjoy the visit
          </Heading>
        </Oscar>
        <Input
          value="Name"
          type="text"
          handleChange={(e) => console.log("Typing ...", e)}
        />
        <Button
          title="Send"
          handleClick={(e) => console.log("Button Clicked", e)}
        />
        <User />
        <Form/>
        <Counter />
        <MutableRef/>
      </div>
    </UserContextProvider>
  );
}

export default App;
