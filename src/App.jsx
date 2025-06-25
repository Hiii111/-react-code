// import { useState } from "react";

// function App(){
//   const[fruit, setFruit]=useState("Apple");
//   function handleFruit(){
//     setFruit("Banana");
//   }
//   const[count, setCount]=useState(0);
//   function handleCount(){
//     setCount(count + 1);
//   }
//   const[dcount, setDcount]=useState(10);
//   function handleDcount(){
//       if(dcount > 0){
//         setDcount(dcount - 1);
//       }else{
//         setDcount("You Can't");
//       }
//   }
//   return(
//     <div>
//       <h1>{fruit}</h1>
//       <button onClick={handleFruit}> Click for chnage fruit name </button>
//       <h2>Increase Count : {count}</h2>
//       <button onClick={handleCount}>Increase Count +</button>
//       <h3>Decrease Count : {dcount}</h3>
//       <button onClick={handleDcount}>Decrease Count - </button>
//     </div>
//   )
// }
// export default App;

  import { useState } from 'react'

  function App(){
    const[toggle, setToggle]=useState(false);
    function handleToggle(){
      setToggle(!toggle);
    }
    return(
      <div>
      <button onClick={handleToggle}>
        {toggle ? (
            <img 
            src="https://cdn-icons-png.flaticon.com/512/1828/1828595.png" 
            alt="Hide Icon" 
            style={{ width: '20px', height: '20px' }}
          />
        ) : (
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1828/1828724.png" 
            alt="Hide Icon" 
            style={{ width: '20px', height: '20px' }}
          />
        )}
</button>
        { toggle ?<h1>Hello</h1> : null }
      
      </div>
    )
  }

export default App;