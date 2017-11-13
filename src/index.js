import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DashboardApp from './components/DashboardApp'

window.React = React

// Needed for onTouchTap
injectTapEventPlugin();

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function App(props) {
  const { classes } = props;
  return (
    <DashboardApp />
  );
}


render(<App classes={styles} />, document.querySelector('#app'));
