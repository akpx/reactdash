// Needed for onTouchTap
import Android from 'material-ui-icons/Android';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import preloader from '../assets/loader.gif'
import ios from '../assets/ios.png'
import { Link } from 'react-router-dom'

const listStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

export const AppList = ({apps=[]}) => (
        <List className={'list'}>
            {(apps.length) ?
              apps.map(
                (app, i) => 
                <ListItem  button key={i}
                                {...app} component={Link}  
                                to={"/loadapps/"+app.id} divider={true} style={listStyle}>
            
                    {(app.platform === 'Android') ? 
                    <ListItemIcon>
                      <Android />
                    </ListItemIcon> :
                    <img src={ios} alt={"iOS"}/>}
                  
                  <ListItemText primary={app.title.substring(0, 15).toUpperCase()} />
                 
                </ListItem>
              ) :
              <div><img width="50px" src={preloader} alt={"loading"}/></div>
             }
        </List>
)
 