import PropTypes from "prop-types";
import { Navbar } from '../containers/Navbar'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Typography, Card, Button, Grid } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const EditCampusView = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <h1>Edit Campus Form</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>
        <Grid container justify="center">
          {
            "name" in props.errors ?
            <TextField error helperText={props.errors.name} id="standard-basic" label="Campus Name" value={props.name} onInput={ e=>props.setName(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Campus Name" value={props.name} onInput={ e=>props.setName(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          {
            "address" in props.errors ?
            <TextField error helperText={props.errors.address} id="standard-basic" label="Campus Address" value={props.address} onInput={ e=>props.setAddress(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Campus Address" value={props.address} onInput={ e=>props.setAddress(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          {
            "imageUrl" in props.errors ?
            <TextField error helperText={props.errors.imageUrl} id="standard-basic" label="Campus Image URL" value={props.imageUrl} onInput={ e=>props.setImageUrl(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Campus Image URL" value={props.imageUrl} onInput={ e=>props.setImageUrl(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          {
            "description" in props.errors ?
            <TextField error helperText={props.errors.description} id="standard-basic" label="Campus Description" value={props.description} onInput={ e=>props.setDescription(e.target.value)}/>
            :
            <TextField id="standard-basic" label="Campus Description" value={props.description} onInput={ e=>props.setDescription(e.target.value)}/>
          }
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>



        {/* <Typography variant='h4' align='left'>Students on Campus</Typography>

        <Grid container spacing={3}>
            <Grid item xs={6}>
                {props.campus.students.map(student => {
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
                        {props.campus.name}
                    </Typography>
                    </Card>
                );
                })}
            </Grid>
        </Grid> */}
      </form>
    </div>
  )
}

EditCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setImageUrl: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default EditCampusView
