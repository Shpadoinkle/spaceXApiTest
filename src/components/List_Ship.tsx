import { Divider, Grid, Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";
import { Cell, Pie, PieChart } from "recharts";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  contentHeader: { fontWeight: 700, marginRight: theme.spacing(1) },
}));

const ListShip: FunctionComponent<any> = ({ ship = {} }) => {
  const classes = useStyles();
  const data = [
    { name: "Success", value: ship.success_rate_pct || 0 },
    { name: "Fail", value: 100 - (ship.success_rate_pct || 0) },
  ];
  const COLORS = ["#00C49F", "#FF8042"];

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
              <div className={classes.contentHeader}>Name:</div>
              <div>{` ${ship.name}`}</div>
            </Grid>
            <Grid container item direction="row" xs={12}>
              <div className={classes.contentHeader}>First Flight:</div>
              <div>{` ${ship.first_flight}`}</div>
            </Grid>
            <Grid container item direction="row" xs={12}>
              <div className={classes.contentHeader}>Cost per launch:</div>
              <div>{` $${ship.cost_per_launch}`}</div>
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
              <div className={classes.contentHeader}>Success Rate:</div>
              <div>{` ${ship.success_rate_pct || 0}%`}</div>
            </Grid>
            <Grid container item justify="center" alignContent="center" xs={12}>
              <PieChart width={100} height={50}>
                <Pie
                  data={data}
                  //   cx={80}
                  cy={50}
                  innerRadius={40}
                  outerRadius={50}
                  fill="#8884d8"
                  //   paddingAngle={1}
                  dataKey="value"
                  //   startAngle={90}
                  //                   endAngle={-360}

                  startAngle={0}
                  endAngle={180}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ListShip;
