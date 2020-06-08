import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function CardToDo(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignContent="center">
      <Card className={classes.root}>
        <Grid item>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.toDo}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Card>
    </Grid>
  );
}
