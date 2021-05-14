import { React, useState } from 'react'
import { Navbar } from '../containers/Navbar'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const AddStudentView = () => {
  const classes = useStyles();
  const [campusName, setCampusName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('campusName:', campusName);
  }

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <h1>New Campus Form</h1>
      </Grid>
  
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Name" value={campusName} onInput={ e=>setCampusName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default AddStudentView
