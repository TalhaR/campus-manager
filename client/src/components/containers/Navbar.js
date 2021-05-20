import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
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
    appBar: {
      backgroundColor: '#11153e',
      shadows: ['none'],
    },
    greeting: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: "50%",
      margin: "auto",
    },
    links: {
      textDecoration: 'none',
      color: "gray"
    },
    buttons: {
      [theme.breakpoints.down('xs')]: {
        width: "80%",
        fontSize: 12
      }
    }

  }));
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit" >
          <Link className={classes.links} to={'/'} >
            CRUD App
          </Link>
        </Typography>

        <Link className={classes.links} to={'/campuses'} >
          <Button className={classes.buttons} variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Campuses
          </Button>
        </Link>

        <Link className={classes.links} to={'/students'} >
          <Button className={classes.buttons} variant="contained" color="primary">
            Students
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
