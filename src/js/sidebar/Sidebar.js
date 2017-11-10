/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import PhonelinkSetup from 'material-ui-icons/PhonelinkSetup'
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Sidebar extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <PhonelinkSetup />
          </ListItemIcon>
          <ListItemText inset primary="CD App" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhonelinkSetup />
          </ListItemIcon>
          <ListItemText inset primary="LO App" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <PhonelinkSetup />
          </ListItemIcon>
          <ListItemText inset primary="Partner App" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PhonelinkSetup />
            </ListItemIcon>
            <ListItemText inset primary="Version 1" />
          </ListItem>
        </Collapse>
      </List>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
