import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    padding: 20,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Standup extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            Side Content
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Main Content</Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Standup.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Standup);
