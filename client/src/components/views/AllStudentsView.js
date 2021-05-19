import { Box, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'


const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <>
      <Navbar />
      <Box p={2}>
        <Button variant="contained" color="primary" component={Link} to={`/addstudent`}>
          Add Student
        </Button>
        
        {props.allStudents.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h1>{student.firstname} {student.lastname}</h1>
            </Link>
            <p>{student.gpa}</p>
          </div>
        ))}
      </Box>
    </>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;