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
import { Box } from '@mui/system';

function ItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth:'1200px', bgcolor: 'background.paper' }}>
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
        <Box sx={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Typography variant="h7" style={{color: '#f5482f'}}>Topics: 1.5k</Typography>
          <Typography variant="h7" style={{color: '#f5482f'}}>Posts: 2.0k</Typography>
        </Box>
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
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
        <Box sx={{ marginLeft: 'auto', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar 
              alt="Remy Sharp" 
              // src="https://th.bing.com/th/id/R.e15bb9256f3d0b6cecc5bbd8e13ba3e8?rik=VECMHACyZippLw&pid=ImgRaw&r=0" 
              style={{height: '25px', width: '25px'}}
            />
            <Typography variant="caption">
              <Link href="/detail" style={{ textDecoration: 'underline' }}>
                about 2 hours ago
              </Link>
            </Typography>
          </div>
          <Typography variant="caption">Cách config file js.config.js trong nodejs</Typography>
        </Box>
      </ListItem>   
    </List>
  );
}

export default ItemsList;
