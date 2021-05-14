import { React, useState } from 'react'
import axios from 'axios';
import { Navbar } from '../containers/Navbar'
import Grid from '@material-ui/core/Grid';
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

  const handleTest = async (e) => {
    console.log("testing");
    const res = await axios.get("/api/campuses/");
    console.log(res.data);
    console.log("done testings");
  }
  /*
  await axios.post("/api/favorites", null, {
    params: {
      orgName: name || "",
      orgId: ein,
      userId: user.uid,
      orgAddress: organization.orgAddress || "",
      tagLine: organization.tagLine || "",
    },
  });
  */
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

        <Grid container justify="center">
          <Button variant="contained" color="primary" onClick={handleTest}>
            Test Button
          </Button>
        </Grid>
      </form>
    </div>
  )
}

export default AddStudentView
