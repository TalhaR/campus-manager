import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'


const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      <Navbar />
      <Link to={`/addstudent`}>
        <h1>Add Student</h1>
      </Link>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname} {student.lastname}</h1>
          </Link>
          <p>{student.gpa}</p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;