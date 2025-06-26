import './App.css'
function ReuseComonentInLoop({data}){
    return(
        <div className="reusecomponent">
           <h3>Id : <span style={{color: 'green'}}>{data.id}</span></h3>
           <h3>Name : <span style={{color: 'green'}}>{data.name}</span></h3>
           <h3>Email : <span style={{color: 'green'}}>{data.email}</span></h3>
           <h3>Phone : <span style={{color: 'green'}}>{data.mobile}</span></h3>
        </div>
    )
}
export default ReuseComonentInLoop;