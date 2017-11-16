/* eslint-disable flowtype/require-valid-file-annotation */

import { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Grid from 'material-ui/Grid';
import { Route, Switch } from 'react-router-dom'


import axios, {httpAgent, httpsAgent, http, Agent} from 'axios';

import Sidebar from './Sidebar';
import { Content } from './Content';

import * as api from '../api/api';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'auto',
    
  },
  flexgrid: {
    flexGrow: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'fixed',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    marginLeft: 60,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  contentAdjusted: {
    marginLeft: 240
  },
  searchDefault: {
    margin: 20
  }
});

class DashboardApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      allapps : [],
      platform: 'iOS',
      currentAppId: 0,
      VERSION_ID: '',
      CRASH_REASON_ID: '',
      appstoload : []
    }
    this.changePlatform = this.changePlatform.bind(this)
  }
  getNewApps = (app, newplatform) => {
    return app.platform === newplatform
  }
  doSomething = (newplatform) => {
    console.log('Did something with ' + newplatform)
    console.log(this.state.appstoload)
  }
  changePlatform  = name = (event) => {

    this.setState({ platform: event.target.value })
  }
  filterApps =  (obj, filter)  => {
    
  }
  componentDidMount() {
    // Load All Apps from Hockey
    var self = this
    var promiseObj = api.getAllApp()
    promiseObj.then((data) => {
      self.setState({allapps: data.apps})
      self.setState({appstoload: data.apps})
     });
  }
 
  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleClick = () => {
    console.log('Search Bar was clicked')
  }
  handleBlur = () => {
    console.log('Blur Triggered')
  }

  render() {
    const { classes, theme } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                App Crash Logs
              </Typography>
              {/* TODO: Future Implementation of Search Apps
              <Grid  container className={classes.flexgrid}>
                <Grid container
                  alignItems="center"
                  justify="flex-end"
                  direction="row"
                >
                  <Grid item 
                    onBlur={this.handleBlur}
                    onClick={this.handleClick} 
                    xs={12} sm={6}>
                  <Search 
                    appstoload={this.state.appstoload}
                  />
                  </Grid>
                 
                </Grid>
              </Grid> */}
              
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <Sidebar 
                      apps={this.state.appstoload} 
                      changePlatform={this.changePlatform}
                      platform={this.state.platform}
                      />
            </div>
          </Drawer>
          
          <main className={classes.content+ ' ' + (this.state.open ? classes.contentAdjusted:'')}>
            <Switch>
              <Route path="/loadapps/:appid" component={Content} />
            </Switch>
          </main>
          
        </div>
      </div>
    );
  }
}

DashboardApp.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardApp);
