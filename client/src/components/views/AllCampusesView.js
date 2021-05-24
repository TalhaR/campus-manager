import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from '../containers/Navbar'
import { Container, Typography, Card, Button, Grid } from '@material-ui/core/'
import { useEffect, useState } from "react";


const AllCampusesView = (props) => {
  const [campuses, setCampuses] = useState([])

  useEffect(() => {
    setCampuses(props.allCampuses)
  }, [props.allCampuses])

  const handleDelete = (id) => {
    props.deleteCampus(id)
    setCampuses(() => campuses.filter(elem => elem.id !== id))
  }

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant='h2' align='center'>All Campuses</Typography>

        <Button variant="contained" color="primary" component={Link} to={`/addcampus`} style={{ marginBottom: "10px"}}>
          Add Campus
        </Button>

        {!props.allCampuses.length ? (
          <>
            <Typography variant='h4' align='center'>There are no campuses.</Typography>
          </>
        ) : (
          <>
            <Grid container spacing={3}>
            
              {campuses.map((campus) => (
                <Grid item xs={6} key={campus.id}>
                  <Card variant="outlined">
                    <img src={campus.imageUrl} alt={campus.name + " img"} style={{ width: "100%" }} />
                    <Typography variant='h4' align='center'>
                      <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
                    </Typography>
                    <Typography variant='subtitle1' align='center'>{campus.description}</Typography>
                    <Typography align='right'>
                      <Button variant="contained" component={Link} to={`/editcampus/${campus.id}`}>
                        Edit
                      </Button>
                      <Button variant="contained" onClick={() => handleDelete(campus.id) }>Delete</Button>
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