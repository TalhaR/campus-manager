import PropTypes from "prop-types";
import { Navbar } from '../containers/Navbar'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Select, Container, Typography, Card, Button, Grid, MenuItem } from '@material-ui/core/'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
  const [studentId, setStudentId] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value)
    setStudentId(e.target.value);
  };

  useEffect(() => { 
    console.log(props.campus);
  }, [props.campus])


  const handleAddSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    if (studentId)
      axios
        .put(`/api/students/${studentId}`, { campusId: props.campus.id })
        .then((e) => console.log(e));
        //e.target.submit());
        
        console.log(studentId);
        
  };

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
        </form>
        <Grid container justify='center' >
            <Grid item xs={6}>
                <form onSubmit={handleAddSubmit}>
                <Select

                    defaultValue=""
                    onChange={handleChange}
                >
                    <MenuItem value="" disabled hidden>
                    <em>None</em>
                    </MenuItem>
                    {props.students && props.students.length && 
                    props.students.map((student) => (
                        <MenuItem key={student.id} value={student.id}>
                        <em>{student.firstname + " " + student.lastname}</em>
                        </MenuItem>
                    ))}
                </Select>
                <Button type="submit" value="Select Campus...">Change Campus</Button>
                </form>
            </Grid>
        </Grid>

        <Container>
            <Typography variant='h4' align='left'>Students on Campus</Typography>

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
            </Grid> 
        </Container>
      
    </div>
  )
}

EditCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleAddSubmit: PropTypes.func.isRequired,
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
