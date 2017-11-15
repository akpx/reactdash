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
import Android from 'material-ui-icons/Android';
import StarBorder from 'material-ui-icons/StarBorder';
import Divider from 'material-ui/Divider';

import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

//import {iOSApp, AndroidApps } from './Applist';
import { AppList } from './Applist';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { platform: 'ios'}
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="platformselect">Platform</InputLabel>
            <Select
            value={this.state.platform}
            onChange={this.handleChange('platform')}
            input={<Input id="platformselect" />}
            >
            <MenuItem value={"ios"}>iOS</MenuItem>
            <MenuItem value={'android'}><Android /></MenuItem>
            </Select>
        </FormControl>
    </form>
     <AppList apps={this.props.apps} />
    </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);