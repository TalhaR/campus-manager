import PropTypes from "prop-types";
import { Navbar } from "../containers/Navbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const EditStudentView = (props) => {
    const classes = useStyles();

    const [campusId, setCampusId] = useState(null)

    useEffect(() => {
        console.log(props.allCampuses);
    }, [props.allCampuses]);

    const handleChange = (e) => {
        setCampusId(e.target.value);
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        if (campusId)
            axios
                .put(`/api/students/${props.studentId}`, {
                    campusId: campusId,
                })
    };

    return (
        <>
            <Navbar />
            <Grid container justify="center">
                <h1>Edit Student Form</h1>
            </Grid>

            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={props.handleSubmit}
            >
                <Grid container justify="center">
                    {"firstName" in props.errors ? (
                        <TextField
                            error
                            helperText={props.errors.firstName}
                            id="standard-basic"
                            label="First Name"
                            value={props.firstName}
                            onInput={(e) => props.setFirstName(e.target.value)}
                        />
                    ) : (
                        <TextField
                            id="standard-basic"
                            label="First Name"
                            value={props.firstName}
                            onInput={(e) => props.setFirstName(e.target.value)}
                        />
                    )}
                </Grid>

                <Grid container justify="center">
                    {"lastName" in props.errors ? (
                        <TextField
                            error
                            helperText={props.errors.lastName}
                            id="standard-basic"
                            label="Last Name"
                            value={props.lastName}
                            onInput={(e) => props.setLastName(e.target.value)}
                        />
                    ) : (
                        <TextField
                            id="standard-basic"
                            label="Last Name"
                            value={props.lastName}
                            onInput={(e) => props.setLastName(e.target.value)}
                        />
                    )}
                </Grid>

                <Grid container justify="center">
                    {"gpa" in props.errors ? (
                        <TextField
                            error
                            helperText={props.errors.gpa}
                            id="standard-basic"
                            label="GPA"
                            value={props.gpa}
                            onInput={(e) => props.setGPA(e.target.value)}
                        />
                    ) : (
                        <TextField
                            id="standard-basic"
                            label="GPA"
                            value={props.gpa}
                            onInput={(e) => props.setGPA(e.target.value)}
                        />
                    )}
                </Grid>

                <Grid container justify="center">
                    {"imageUrl" in props.errors ? (
                        <TextField
                            error
                            helperText={props.errors.imageUrl}
                            id="standard-basic"
                            label="Student URL"
                            value={props.imageUrl}
                            onInput={(e) => props.setimageUrl(e.target.value)}
                        />
                    ) : (
                        <TextField
                            id="standard-basic"
                            label="Student URL"
                            value={props.imageUrl}
                            onInput={(e) => props.setimageUrl(e.target.value)}
                        />
                    )}
                </Grid>

                <Grid container justify="center">
                    <Button type="submit" variant="contained" color="primary">
                        Save Changes
                    </Button>
                </Grid>
            </form>

            <br />
            <br />
            <br />
            <br />

            <Grid container>
                <Grid item xs={12} align="center">
                    <Typography variant="h2"> 
                      Change Campus
                    </Typography>
                    <form onSubmit={handleAddSubmit}>
                        <Select defaultValue="" onChange={handleChange}>
                            <MenuItem value="" disabled hidden>
                                <em>None</em>
                            </MenuItem>
                            {props.allCampuses.length &&
                                props.allCampuses.map((campus) => (
                                    <MenuItem key={campus.id} value={campus.id}>
                                        <em>{campus.name}</em>
                                    </MenuItem>
                                ))}
                        </Select>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            value="Select Campus..."
                            style={{marginLeft: "15px"}}
                        >
                            Change Campus
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

EditStudentView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setGPA: PropTypes.func.isRequired,
    setimageUrl: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

export default EditStudentView;
