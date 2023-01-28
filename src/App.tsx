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
import { Form } from "./components/state/Form";
import { MutableRef } from "./components/state/MutableRef";
import { Lists } from "./components/generic/Lists";
import { Restrict } from "./components/restriction/Restrict";
import { Toasts } from "./components/toast/Toasts";
import { Buttons } from "./components/html/Buttons";
import { Text } from "./components/polymorphic/Text";

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
        <Form />
        <Counter />
        <MutableRef />
        {/* <Lists
          items={["Owolabi", "Kazeem", "Wasiu", "Kemi"]}
          onClick={(item) => console.log(item)}
        />
        <Lists
          items={[23, 45, 78, 12, 46, 98, 24]}
          onClick={(item) => console.log(item)}
        /> */}
        <Lists
          items={[
            { name: "Owolabi", age: 23 },
            { name: "Kazeem", age: 45 },
            { name: "Wasiu", age: 78 },
            { name: "Kemi", age: 12 },
            { name: "Oluwaseun", age: 46 },
          ]}
          onClick={(item) => console.log(item)}
        />
        <Restrict value={12} isPositive />
        <Toasts position="center" />
        <Buttons onClick={() => console.log("clicked")} variant="primary">
          Send
        </Buttons>
        <Text as="h2" size="md">Welcome to the world</Text>
        <Text as="p" color="secondary">How are you doing today</Text>
        <Text as="label" htmlFor="someId" color="primary" size="md">
          Extend my greetings to your family
        </Text>
      </div>
    </UserContextProvider>
  );
}

export default App;
