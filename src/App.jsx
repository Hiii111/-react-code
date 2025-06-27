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



//   import { useState } from 'react'

//   function App(){
//     const[toggle, setToggle]=useState(false);
//     function handleToggle(){
//       setToggle(!toggle);
//     }
//     return(
//       <div>
//       <button onClick={handleToggle}>
//         {toggle ? (
//             <img 
//             src="https://cdn-icons-png.flaticon.com/512/1828/1828595.png" 
//             alt="Hide Icon" 
//             style={{ width: '20px', height: '20px' }}
//           />
//         ) : (
//           <img 
//             src="https://cdn-icons-png.flaticon.com/512/1828/1828724.png" 
//             alt="Hide Icon" 
//             style={{ width: '20px', height: '20px' }}
//           />
//         )}
// </button>
//         { toggle ?<h1>Hello</h1> : null }
      
//       </div>
//     )
//   }

// export default App;

// multiple condition with state

// import { useState } from "react";

// function App(){
//   const[count, setCount]=useState(0);
//   function handleCounter(){
//     setCount(count + 1);
//   }
//   return(
//     <div>
//       <h1>Count <sup> ({count})</sup></h1>
//       <button onClick={handleCounter}>Change Number</button>
//       {count == 0 ? <h1>Condition 0 Working Now</h1> 
//       :count == 1 ? <h1>Condition 1 Working Now</h1>  
//       :count == 2 ? <h1>Condition 2 Working Now</h1> : <h1>Other Condition Working Now</h1>
//     }
//     </div>
//   )
// }
// export default App;

// function App(props){
//   return(
//     <h1>Hello, {props.name} Email  {props.email} </h1>
//   )
// }

// export default App;

// function App(){
//   const[val, setVal]=useState("");
//   const handleEvent=(event)=>{
//     setVal(event.target.value);
//   }
//   return(
//     <div>
//         <h1>Input Field Value With onChange Event</h1>
//         <input type="text" value={val} onChange={handleEvent} placeholder="Enter Something.." />
//         <h2>{val}</h2>
//         <button onClick={()=>setVal("")}>Clear Value</button>
//     </div>
//   )
// }

import Checkboxes from "./Checkboxes";
import DropdownRadioButton from "./DropdownRadioButton";
import Home from "./Home";
import Loop from "./Loop";
import Card from "./Card";
import NestedLoop from "./NestedLoop";
import ExternalCss from "./externalCss";
import ReactBootstrap from "./ReactBootrap";
import UncontrolledComponent from "./uncontrolledComponent";

function App(){
  return(
    <div> 
      <UncontrolledComponent />
    </div>
  )
}
export default App;