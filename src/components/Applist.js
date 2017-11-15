// Needed for onTouchTap
import Android from 'material-ui-icons/Android';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import preloader from '../assets/loader.gif'

export const AppList = ({apps=[]}) => (
        <List>
            {(apps.length) ?
              apps.map(
                (app, i) => 
                <ListItem  button key={i}
                                {...app}>
                  <ListItemIcon>
                    <Android />
                  </ListItemIcon>
                  <ListItemText primary={app.platform} />
                </ListItem>
              ) :
              <div><img width="50px" src={preloader} alt={"loading"}/></div>
             }
        </List>
)
 