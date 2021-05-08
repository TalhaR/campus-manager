import { Navbar } from '../containers/Navbar'

const StudentView = (props) => {
  const {student} = props;
  // waiting for students array to be populated
   if (student.campus === undefined){
     return <div>Loading...</div>
   }

  return (
    <div>  
      <Navbar />
      <h1>{student.firstname} {student.lastname}</h1>
      <p>{student.description}</p>
      <ul>
      {student.campus.name}
      </ul>
    </div>
  );
};

export default StudentView;