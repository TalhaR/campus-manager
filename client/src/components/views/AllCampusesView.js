import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'
import { Container, Typography, Card, Button, Grid} from '@material-ui/core/'

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
        <Grid item xs={6}>
        <Card variant="outlined" key={campus.id}>
          <img src={campus.imageURL} alt="campus image"></img>
          <Typography variant='h4' align='center'>
            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
          </Typography>
          <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
          <Typography align='right'>
            <Button>edit</Button>
            <Button>delete</Button>
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