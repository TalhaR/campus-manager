import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        title: {
          flexGrow: 1,
          textAlign: 'left',
          fontType: 'bold',
          fontFamily: 'Courier, sans-serif', 
          fontSize: '35px', 
          color: '#CDDC39'
        },
        appBar:{
          backgroundColor: '#11153e',
          shadows: ['none'],
        },
        greeting:{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: "50%",
          margin: "auto",
        },
        links:{
          textDecoration: 'none',
        }
      
      }));
      const classes = useStyles();
    return (
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            <Link className={classes.links} to={'/'} >
                CRUD App
            </Link>
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
}
