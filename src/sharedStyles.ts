import { makeStyles, Theme, createStyles } from "@material-ui/core";

const SharedStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);
export default SharedStyles;
