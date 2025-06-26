function NestedLoop() {
  const data = [
    {
      student: 'Anil Sidhu',
      subjects: ['Math', 'Science', 'English']
    },
    {
      student: 'Ajeet Kumar',
      subjects: ['History', 'Geography']
    },
    {
      student: 'Seema Yadav',
      subjects: ['Physics', 'Chemistry', 'Biology']
    }
  ];

  return (
    <div>
      <h2>Student Subjects List</h2>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{item.student}</h3>
          <ul>
            {item.subjects.map((subject, subIndex) => (
              <li key={subIndex}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedLoop;