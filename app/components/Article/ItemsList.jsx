"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

function ItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Hỏi đáp"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Javascript"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"NodeJS"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Hỏi đáp"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Javascript"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"NodeJS"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Hỏi đáp"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://pbs.twimg.com/profile_images/1122184484923662336/N9YFx3wD_400x400.png" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"Javascript"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.083d315e12252c3d2ca31d31f6315365?rik=6bMIx9VtcN9TCQ&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <Link href="/other" passHref>
        <ListItemText
          primary={
            <Typography variant="h6" style={{color: '#036ffc'}}>
                {"NodeJS"}
              </Typography>
          }
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
        </Link>
      </ListItem>
      
    </List>
  );
}

export default ItemsList;
