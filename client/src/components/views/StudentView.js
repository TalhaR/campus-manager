import { Container, Typography, Card, Button, Grid } from '@material-ui/core/'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core/'
import { deleteStudentThunk } from "../../store/thunks";
import axios from "axios";


const StudentView = ({ student, allCampuses }) => {
  const [newCampus, setNewCampus] = useState(null);

  useEffect(() => {
    console.log(student);
  }, [student])

  if (student === null) {
    return <Typography variant='h2' align='center'>No such student exists!</Typography>
  }

  // waiting for students array to be populated
  if (student.campus === undefined) {
    return <div>Loading...</div>
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    setNewCampus(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    if (newCampus)
      axios
        .put(`/api/students/${student.id}`, { campusId: newCampus })
        .then(() => e.target.submit());
  };

  return (
    <Container>
      <Typography variant='h2' align='center'>Student Page</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} align='center'>
          <img src={student.imageUrl} alt="student" style={{width: "100%"}} />
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Typography variant='h3' align='center'>{student.firstname} {student.lastname}</Typography>
            <Typography variant='subtitle1' align='center'>{"GPA: " + student.gpa}</Typography>
            <Typography align='right'>
              <Button variant="contained" color="primary" component={Link} to={`/editstudent/${student.id}`}>
                Edit
              </Button>
              <Button onClick={deleteStudentThunk(student.id)}>Delete</Button>
            </Typography>
          </Card>
        </Grid>

        {student.campus === null ? (
          <>
            <Typography variant='subtitle1' align='left'>This student is not registered to a campus</Typography>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <Typography variant='subtitle1' align='left'>This student is registered to a campus</Typography>
              <Card> 
                <img src={student.campus.imageUrl} alt="campus" style={{width: "100%"}} />
                <Typography align='center'><Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></Typography>
                <br/>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <form onSubmit={handleSubmit}>
              <Select

                defaultValue=""
                onChange={handleChange}
              >
                <MenuItem value="" disabled hidden>
                  <em>None</em>
                </MenuItem>
                {allCampuses.length && 
                  allCampuses.map((campus) => (
                    <MenuItem key={campus.id} value={campus.id}>
                      <em>{campus.name}</em>
                    </MenuItem>
                ))}
              </Select>
              <Button type="submit" value="Select Campus...">Change Campus</Button>
              </form>
              </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default StudentView;