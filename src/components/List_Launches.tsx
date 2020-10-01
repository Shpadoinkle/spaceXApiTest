import { Divider, Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  contentHeader: { fontWeight: 700, marginRight: theme.spacing(1) },
}));

const ListShip: FunctionComponent<any> = ({ launch = {} }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container direction="row" justify="space-between" spacing={2}>
          <Grid
            container
            item
            justify="flex-start"
            alignContent="flex-start"
            spacing={1}
            xs={12}
            sm={8}
          >
            <Grid container item direction="row" xs={12}>
              <div className={classes.contentHeader}>Mission Name:</div>
              <div>{` ${launch.mission_name}`}</div>
            </Grid>
            <Grid container item direction="row" xs={12}>
              <div className={classes.contentHeader}>Launch Date:</div>
              <div>{` ${launch.launch_date_utc}`}</div>
            </Grid>
            <Grid container item direction="row" xs={12}>
              <div className={classes.contentHeader}>Rocket Used:</div>
              <div>{` ${launch.rocket.rocket_name}`}</div>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Divider orientation="vertical" flexItem />
          </Hidden>
          <Grid
            container
            item
            justify="center"
            alignContent="center"
            spacing={1}
            xs={12}
            sm={4}
          >
            <Grid
              container
              item
              direction="row"
              justify="center"
              alignContent="center"
              xs={12}
            >
              <div className={classes.contentHeader}>Successful:</div>
              <div>{`${launch.launch_success ? "Yes" : "No"}`}</div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ListShip;
