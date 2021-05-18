import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'
import { Container, Typography, Card, Button, Grid} from '@material-ui/core/'
import { deleteCampusThunk } from "../../store/thunks";


const AllCampusesView = (props) => {

  return (
    <>
    <Navbar />
    <Container>
      <Typography variant='h2' align='center'>All Campuses</Typography>
      <Typography variant='h4'>
        <Link to={`/addcampus`}>
          Add Campus
        </Link>
      </Typography>
    {!props.allCampuses.length ? (
      <>
        <Typography variant='h4' align='center'>There are no campuses.</Typography>
      </>
    ) : (
    <>
      <Grid container spacing={3}>
      {props.allCampuses.map((campus) => (
        <Grid item xs={6} key={campus.id}>
        <Card variant="outlined">
          <img src={campus.imageURL} alt={campus.name + " img"}></img>
          <Typography variant='h4' align='center'>
            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
          </Typography>
          <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
          <Typography align='right'>
            <Button>edit</Button>
            <Button onClick={deleteCampusThunk(campus.id)}>delete</Button>
          </Typography>
        </Card>
        </Grid>
      ))}
      </Grid>
    </>
    )}
    </Container>
    </>
  )
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;