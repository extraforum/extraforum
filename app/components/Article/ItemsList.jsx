"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Hỏi đáp"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi mọi người cùng nhau chia sẻ khó khăn, cùng nhau giải quyết"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Javascript"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi hỏi đáp mọi chủ đề về Javacsript (Scope, context, bất đồng bộ, promise ...)"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="NodeJS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'Chia sẻ, thảo luận về Node.JS , Javascript'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Hỏi đáp"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi mọi người cùng nhau chia sẻ khó khăn, cùng nhau giải quyết"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Javascript"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi hỏi đáp mọi chủ đề về Javacsript (Scope, context, bất đồng bộ, promise ...)"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="NodeJS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'Chia sẻ, thảo luận về Node.JS , Javascript'}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Hỏi đáp"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi mọi người cùng nhau chia sẻ khó khăn, cùng nhau giải quyết"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Javascript"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Nơi hỏi đáp mọi chủ đề về Javacsript (Scope, context, bất đồng bộ, promise ...)"}
            </React.Fragment>
          }
        />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="NodeJS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'Chia sẻ, thảo luận về Node.JS , Javascript'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default ItemsList;
