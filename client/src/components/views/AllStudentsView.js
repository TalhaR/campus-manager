import { Box, Button, Container, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'


const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return (
      <>
        <Navbar />
        <Container >
          <Typography variant='h3' align='center'>There are currently no Students </Typography>

          <Button variant="contained" color="primary" component={Link} to={`/addstudent`} style={{ marginBottom: "10px"}}>
            Add Student
          </Button>
        </Container>
        {/* <div style={{display: "flex", justifyContent: "center"}}>There are no students.
          <br/>
          <Button variant="contained" color="primary" component={Link} to={`/addstudent`}>
            Add Student
          </Button>
        </div> */}
      </>
    )
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