import { Navbar } from '../containers/Navbar'
import { Link } from "react-router-dom";
import { Container, Typography, Card, Button, Grid} from '@material-ui/core/'
import { deleteCampusThunk } from "../../store/thunks";


const CampusView = (props) => {
  const {campus} = props;
  if (campus === null) {
    return <Typography variant='h2' align='center'>No campus exists on this page!</Typography>
  }
  //waiting for students array to be populated
   if (campus.students === undefined){
     return <div>Loading...</div>
   }
  return (
    <>  
      <Navbar />
      <Container>
        <Typography variant='h2' align='center'>Campus Page</Typography>

        <Grid container spacing={3}>
          <Grid item xs={6} align='center'>
            <img src={campus.imageURL} alt={campus.name}></img>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Typography variant='h3' align='center'>{campus.name}</Typography>
              <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
              <Typography align='right'>
                <Button>Edit</Button>
                <Button onClick={deleteCampusThunk(campus.id)}>Delete</Button>
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Typography variant='h4' align='left'>Students on Campus</Typography>
          <Grid container spacing={3}>
          <Grid item>
            {campus.students.map( student => {
                let name = student.firstname + " " + student.lastname;
                return (
                  <Card key={student.id}>
                    <img align='center' src={student.imageURL} alt={name}></img>
                    <Typography variant='subtitle1' align='left'>
                      <Link to={`/student/${student.id}`}>{name}</Link>
                      </Typography>
                    <Typography variant='subtitle2' align='left'>{campus.name}</Typography>
                  </Card>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </>
  );

};

export default CampusView;