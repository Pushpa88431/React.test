import { useState } from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./Footer.jsx";
import images from "./assets/react.svg";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Puspa", title: "Student", age: 30 },
    { id: 2, name: "Tina", title: "Developer", age: 40 },
    { id: 3, name: "Lina", title: "Teacher", age: 50 },
  ]);

  const eventHandler = (name) => {
    console.log(name);
    /*const removeHandler = (id) => {
      const updatedArray = persons.filter(person => person.id)
      setPersons(updatedArray);
    }*/
  };

  return (
    <>
      <Header logo="Pushpa" />
      <main>
        <h2>My app</h2>
        <img src={images} alt="logo" />
        <div className="cards">
          {persons.map((person) => (
            <Card
              key={person.id}
              {...person}
              click={() => eventHandler(person.name)}
            />
          ))}
        </div>
        <button onClick={eventHandler}>Click me</button>
      </main>
      <Footer copyright="Copyright some cool stuff" />
    </>
  );
}

export default App;
