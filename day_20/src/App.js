import "./App.css";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [value, setValue] = useState([
    {
      id: 1,
      title: "Pizza",
      description: "No. of Cals consumed today :",
      val: 56,
      img: "https://imgur.com/PPF5hRK.png",
    },
    {
      id: 2,
      title: "Burger",
      description: "No. of Cals consumed today :",
      val: 100,
      img: "https://imgur.com/Ce2Wl9b.png",
    },
    {
      id: 3,
      title: "Coke",
      description: "No. of Cals consumed today :",
      val: 206,
      img: "https://imgur.com/fNLZb6M.png",
    },
    {
      id: 4,
      title: "Fried Rice",
      description: "No. of Cals consumed today :",
      val: 178,
      img: "https://imgur.com/8z5hDHt.png",
    },
  ]);

  const deleteFun = (id) => {
    const newArray = value.filter((omk) => omk.id !== id);
    setValue(newArray);
  };

  return (
    <div>
      <h1 className="gg">Calory Tracker</h1>
      <div className="App">
        {value.map((i) => (
          <Card
            title={i.title}
            description={i.description}
            val={i.val}
            img={i.img}
            id={i.id}
            deleteFun={() => {
              deleteFun(i.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
