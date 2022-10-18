import './App.css';
import Signin from './components/signin/Signin';
import { useState, useEffect } from "react"

function App() {
  const [myName, setName] = useState("Shams")
  useEffect(()=>{

  },[])

  return (
    <div className="App">
      <h1>Easify Upload</h1>
      <Signin/>
      
    </div>
  );
}

export default App;
