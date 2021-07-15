import "./App.css";
import Card from "./components/card";

function App() {
  const stored = [
    {
      title: "Pizza",
      description: "No. of Cals consumed today :",
      val: 56,
      img: "https://imgur.com/PPF5hRK.png",
    },
    {
      title: "Burger",
      description: "No. of Cals consumed today :",
      val: 100,
      img: "https://imgur.com/Ce2Wl9b.png",
    },
    {
      title: "Coke",
      description: "No. of Cals consumed today :",
      val: 206,
      img: "https://imgur.com/fNLZb6M.png",
    },
    {
      title: "Fried Rice",
      description: "No. of Cals consumed today :",
      val: 178,
      img: "https://imgur.com/8z5hDHt.png",
    },
  ];
  
  return (
    <div >
      <h1 className = "gg">Calory Tracker</h1>
      <div className="App">
        {stored.map((i) => (
          <Card
            title={i.title}
            description={i.description}
            val={i.val}
            img={i.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
