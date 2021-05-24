import { Link } from "react-router-dom";
import { Container, Typography, Card, Button, Grid } from '@material-ui/core/'

const CampusView = ({ campus, deleteCampus }) => {
  if (campus === null) {
    return <Typography variant='h2' align='center'>No campus exists on this page!</Typography>
  }
  
  //waiting for students array to be populated
  if (campus.students === undefined) {
    return <div>Loading...</div>
  }

  const handleDelete = (id) => {
    deleteCampus(id)

    let web = window.location.href;
    web = web.substring(0, web.indexOf("/"));
    window.location.href = web + "/campuses/";
  }

  return (
    <Container>
      <Typography variant='h2' align='center'>Campus Page</Typography>

      <Grid container spacing={3}>
        <Grid item xs={4} align='center'>
          <img src={campus.imageUrl} alt={campus.name} style={{width: "100%"}} />
        </Grid>
        <Grid item xs={8}>
          <Card>
            <Typography variant='h3' align='center'>{campus.name}</Typography>
            <Typography variant='subtitle1' align='center'>{campus.address}</Typography>
            <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
            <Typography align='right'>
              <Button component={Link} to={`/editcampus/${campus.id}`}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(campus.id)}>Delete</Button>
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <br />

      <Typography variant='h4' align='left'>Students on Campus</Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          {campus.students.length === 0 ? <h1> No students registered to this campus </h1> :
          campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <Card key={student.id}>
                <img align='center' src={student.imageUrl} alt={name} style={{width: "100%"}} />
                <Typography variant='subtitle1' align='center'>
                  <Link to={`/student/${student.id}`}>
                    {name}
                  </Link>
                </Typography>
                <Typography variant='subtitle2' align='center'>
                  {campus.name}
                </Typography>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CampusView;