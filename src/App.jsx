import { useState } from "react";

function App(){
  const[fruit, setFruit]=useState("Apple");
  function handleFruit(){
    setFruit("Banana");
  }
  const[count, setCount]=useState(0);
  function handleCount(){
    setCount(count + 1);
  }
  const[dcount, setDcount]=useState(10);
  function handleDcount(){
      if(dcount > 0){
        setDcount(dcount - 1);
      }else{
        setDcount("You Can't");
      }
  }
  return(
    <div>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}> Click for chnage fruit name </button>
      <h2>Increase Count : {count}</h2>
      <button onClick={handleCount}>Increase Count +</button>
      <h3>Decrease Count : {dcount}</h3>
      <button onClick={handleDcount}>Decrease Count - </button>
    </div>
  )
}
export default App;