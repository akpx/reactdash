// Needed for onTouchTap
import Android from 'material-ui-icons/Android';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const AppList = ({apps}) => (

        <List>
            {apps.map((app, i) =>
                <ListItem  button key={i}
                                {...app}>
                <ListItemIcon>
                  <Android />
                </ListItemIcon>
                <ListItemText primary={app.title} />
              </ListItem>
             )}
        </List>
        
)
 