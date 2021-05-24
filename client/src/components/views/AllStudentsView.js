import { Box, Button, Card, Container, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'


const AllStudentsView = (props) => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    setStudents(props.allStudents)
  }, [props.allStudents])

  const handleDelete = (id) => {
    props.deleteStudent(id)
    setStudents(() => students.filter(elem => elem.id !== id))
  }

  if (!props.allStudents.length) {
    return (
      <>
        <Navbar />
        <Container >
          <Typography variant='h2' align='center'>All Students </Typography>
          <Button variant="contained" color="primary" component={Link} to={`/addstudent`} style={{ marginBottom: "10px" }}>
            Add Student
          </Button>
          <Typography variant='h4' align='center'>There are currently no Students </Typography>
        </Container>
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

        <Grid container spacing={1}> 
        {props.allStudents.map((student) => (
          <Grid item xs={3} key={student.id}>
            <Card variant="outlined">
              <img src={student.imageUrl} alt={student.firstname} style={{ width: "100%" }} />
              <Typography variant='h4' align='center'>
                <Link to={`/student/${student.id}`}>{student.firstname + " " + student.lastname}</Link>
              </Typography>
              <Typography variant='subtitle1' align='center'>{student.gpa}</Typography>
              <Typography align='right'>
                <Button variant="contained" component={Link} to={`/editstudent/${student.id}`}>
                  Edit
                      </Button>
                <Button variant="contained" onClick={() => handleDelete(student.id)}>Delete</Button>
              </Typography>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Box>
    </>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;