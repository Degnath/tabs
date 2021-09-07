import './App.css';
import Tabs from "./components/Tabs"
import { useState } from 'react'

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "Java is most strictly typed langauge",
      // callback: () => alert("You have clicked tab 1")
    },
    {
      title: "Tab 2",
      content: "I am loving React but lately it is giving me a kinda headache",
      // callback: () => alert("You have clicked tab 2")
    },
    {
      title: "Tab 3",
      content: "I love to code and get my self prepared for new career",
      // callback: () => alert("You have clicked tab 3")
    }
  ])

  return (
    <div className="container">
     <Tabs tabs={ tabs }/>
    </div>
  );
}

export default App;
