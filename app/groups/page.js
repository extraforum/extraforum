import React from 'react'
import Navbar from './../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer"
import { Breadcrumbs, Typography, Link, Container } from '@mui/material';
import GroupsList from './../components/Group/GroupsList';

function Groups() {
  return (
    <div>
      <Navbar/>
      <br></br>
      <Container fixed>
        <br></br>
        <br></br>
        <br></br>

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="primary" href="/">
              Home
          </Link>
          <Typography color="inherit">Groups</Typography>
        </Breadcrumbs>
        <br></br>
        <GroupsList/>
      </Container>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Groups
