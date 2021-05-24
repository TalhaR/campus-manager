import { Container, Typography, Card, Button, Grid } from '@material-ui/core/'
import { useEffect } from 'react';
// import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core/'
import { deleteStudentThunk } from "../../store/thunks";
import { Link } from "react-router-dom";


const StudentView = ({ student }) => {
  
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

  // const handleChange = (e) => {
  //   console.log(e)
  // }
  // const handleSubmit = (e) => {
  //   console.log(e);
  // }

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
                <Typography align='center'>{student.campus.name}</Typography>
                <br/>
              </Card>
            </Grid>

            {/* <Grid item xs={6}>
              <FormControl noValidate onSubmit={handleSubmit}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={student.campus.name}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.allCampuses.map((campus) => (
                  <MenuItem value={campus.name}>
                    <em>campus.name</em>
                  </MenuItem>
                ))}
              </Select>
                <Button value="Select Campus...">Change Campus</Button>
              </FormControl>
              </Grid> */}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default StudentView;