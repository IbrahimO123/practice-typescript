import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonLists } from "./components/PersonLists";
import { Status } from "./components/Status";
import { User } from "./components/User";
import { UserContextProvider } from "./components/UserContext";
import { Form } from './components/Form';
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
      </div>
    </UserContextProvider>
  );
}

export default App;
