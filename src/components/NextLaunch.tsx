import { gql, useQuery } from "@apollo/client";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  contentHeader: { fontWeight: 700, marginRight: theme.spacing(1) },
}));

const GET_NEXT_LAUNCH = gql`
  query NextLaunch {
    launchNext {
      rocket {
        rocket_name
        rocket {
          id
        }
      }
      mission_name
      launch_date_utc
      details
    }
  }
`;

const MainPage: FunctionComponent = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_NEXT_LAUNCH, {
    variables: { language: "english" },
  });
  if (error) return <div />;
  const launchNext: any = data?.launchNext || false;
  if (!!launchNext) console.log(launchNext);
  return (
    <Grid direction="column" container spacing={1}>
      <Grid item xs={12}>
        <div style={{ color: "#fff" }}>
          <Typography variant="h4">Upcoming Launch</Typography>
        </div>
      </Grid>
      {loading && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ color: "#fff" }}>
              <Typography color="inherit">Loading</Typography>
            </div>
          </Grid>
        </Grid>
      )}
      {!loading && !!launchNext && (
        <Paper className={classes.paper}>
          <Grid
            container
            item
            justify="flex-start"
            alignContent="flex-start"
            spacing={1}
            xs={12}
            sm={12}
          >
            <Grid container item xs={12}>
              <div className={classes.contentHeader}>Mission Name:</div>
              <div>{` ${launchNext.mission_name}`}</div>
            </Grid>
            <Grid container item xs={12}>
              <div className={classes.contentHeader}>Launch Time UTC:</div>
              <div>{` ${launchNext.launch_date_utc}`}</div>
            </Grid>
            <Grid container item xs={12}>
              <div className={classes.contentHeader}>Rocket Type:</div>
              <div>{` ${launchNext.rocket.rocket_name}`}</div>
            </Grid>
            <Grid container item xs={12}>
              <div className={classes.contentHeader}>Details:</div>
              <div>{` ${launchNext.details}`}</div>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default MainPage;
