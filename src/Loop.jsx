import ReuseComonentInLoop from "./ReuseComonentInLoop";

function Loop() {
  const studentData = [
    {
      id: 1,
      name: 'Anil Sidhu',
      email: 'anil@gmail.com',
      mobile: '6387110312',
    },
    {
      id: 2,
      name: 'Ajeet Kumar',
      email: 'ajeet@gmail.com',
      mobile: '7355791565',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      mobile: '123456789',
    },
    {
      id: 4,
      name: 'Amit Nishad',
      email: 'amit@gmail.com',
      mobile: '123456789',
    },
  ];

  return (
    <div>
        <h1>Reuse Component In Loop</h1>
        {
            studentData.map((user)=>(
                <div key={user.id}>
                   <ReuseComonentInLoop data={user} />
                </div>
            ))
        }
    </div>
  );
}

export default Loop;