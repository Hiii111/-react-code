function ToDo(){
    return(
        <div>
            <h1>Anil  Sidhu Todos</h1>
            <img src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg" alt="" style={{maxWidth: '300px'}} />
            <ul>
                <li>First</li>
                <li>Secound</li>
                <li>Third</li>
            </ul>
            <button onClick={()=>alert('Function Called')}>Click</button>
        </div>
    )
}

export default ToDo;