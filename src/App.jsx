


function App() {
  const name = "Amit Kumar";
  let x=10;
  let y=20;
  function fruits()
  {
    return "Apple";
  }
  function sum(a,b)
  {
    return a+b;
  }
  function operation(a,b,op)
  {
    if(op=="+"){
      return a+b;
    }else if(op=="-"){
      return a-b;
    }else if(op=="*"){
      return a*b;
    }else{
      return "Unmached Condition";
    }
  }
  const userObj = {
    name : 'Anil Nishad',
    email : 'anil@gmail.com',
    age : 20
  }

  const userData = ['anil', 'anil@gmail.com', 30];

  return (
    <div>
     <h1>{name?name:"User Not Found"}</h1>
     <h1>{x+y}</h1>
     <h1> {fruits()} </h1>
     <h1>{sum(10,10)}</h1>
     <h1>{operation(10,10,"*")}</h1>
     <h1>{userObj.name}</h1>
     <h1>{userObj.email}</h1>
     <h1>{userObj.age}</h1>
     <h1>{userData[0]}</h1>
     <h1>{userData[1]}</h1>
     <h1>{userData[2]}</h1>
     
    </div>
  );
}

export default App;