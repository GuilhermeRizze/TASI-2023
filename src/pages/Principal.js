import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from 'react-router-dom'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Ola'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to = "/ola">
            <ListItemButton>
              <ListItemIcon>
              <MailIcon /> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
            <Divider />
          </ListItem>
        ))}
      </List>
      
      <List>
        {['Blog'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to = "/blog">
            <ListItemButton>
            <ListItemIcon>
              <MailIcon /> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
            <Divider />
          </ListItem>
        ))}
      </List>

      <List>
        {['Calculadora'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to = "/calculadora">
            <ListItemButton>
              <ListItemIcon>
              <MailIcon /> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        
      {['MENU'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            
          </Drawer>
          </React.Fragment>
      ))}
    </div>
    
  );
}