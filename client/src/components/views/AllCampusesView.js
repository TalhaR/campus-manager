import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'
import { Container, Typography, Card, Button, Grid} from '@material-ui/core/'
// import { deleteCampusThunk } from "../../store/thunks";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
      <Typography variant='h1' align='center'>Campus Listing</Typography>
      <Link to={`/addcampus`}>
        <h1>Add Campus</h1>
      </Link>
      <Grid container spacing={3}>
      
      
      {props.allCampuses.map((campus) => (
        <Grid item xs={6} key={campus.id}>
        <Card variant="outlined">
          <img src={campus.imageURL} alt={"campus " + campus.id}></img>
          <Typography variant='h4' align='center'>
            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
          </Typography>
          <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
          <Typography align='right'>
            <Button>edit</Button>
            <Button onClick={() => {
              // deleteCampusThunk(campus.id)
            }}>delete</Button>
          </Typography>
        </Card>
        </Grid>
      ))}
      </Grid>
      </Container>
    </>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;