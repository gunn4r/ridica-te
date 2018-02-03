import React from 'react'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 10,
      padding:20,
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
                { console.log(classes) }
                <Grid container spacing={24}>
                    <Grid item xs>
                        Herp Derp
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Standup);
