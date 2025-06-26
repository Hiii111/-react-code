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
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loop;