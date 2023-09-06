"use client"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function CardItem({ title, description, avatar, members}) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: '320px',
        margin: '1rem',
        // to make the card resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src={avatar} size="lg" />
        <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          {
            members.map((member, index) => (
              <Avatar key={index} src={member} />
            ))
          }
          <Avatar>+4K</Avatar>
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{description}</Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}

function GroupsList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CardItem
        title="ReactJS Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://th.bing.com/th/id/R.2bee11a830bacc5ae9006df56b20c33a?rik=nXUBy4boCTrW8w&pid=ImgRaw&r=0"
        members={[
          "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/272565500_3112440672372600_3049730568917912306_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=24Pv21VzMIQAX-WNzAv&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfCdER8j9-ievBFCb9Hz12Wzl20tyalnh0jQv980TgZ1OA&oe=64FD2C9F",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
      <CardItem
        title="Angular Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://cdn.auth0.com/blog/angular5/logo.png"
        members={[
          "/static/images/avatar/2.jpg",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
      <CardItem
        title="VueJS Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://www.filepicker.io/api/file/sSiotFQLSdqcDdblDpis"
        members={[
          "/static/images/avatar/2.jpg",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
      <CardItem
        title=".NET Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://styles.redditmedia.com/t5_2qh3h/styles/communityIcon_s4j823izlmu91.png?width=256&s=bbfb10218d33a0fe68a37f4e0288195cb53bb980"
        members={[
          "/static/images/avatar/2.jpg",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
      <CardItem
        title="Java Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/60c01ca2d317d3547d05eb90_18.png"
        members={[
          "/static/images/avatar/2.jpg",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
      <CardItem
        title="Python Comunity"
        description="We are a community of developers prepping for coding interviews, participate, chat with others and get better at interviewing."
        avatar="https://youngbutterfly.in/wp-content/uploads/2020/07/Python-Programming-Language.png"
        members={[
          "/static/images/avatar/2.jpg",
          "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/330982758_1847007242340367_3905556529127873411_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=PKffKIk5IAsAX_9uwWy&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfBSqc2g7HaddbgokPCsaGLlRGWLjumSjkarf6WOQyJSVg&oe=64FC3B54",
          "/static/images/avatar/4.jpg"
        ]}
      />
    </div>
  );
}

export default GroupsList
