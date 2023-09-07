import { Breadcrumbs, Container, Link, Typography } from "@mui/material"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Login from '../components/Auth/Login';

function LoginPage() {
  return (
    <div>
      <Navbar/>
      <br></br>
      {/* <Container maxWidth="1"> */}
      <Container fixed>
        <br></br>
        <br></br>
        <br></br>
        
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="primary" href="/">
              Home
          </Link>
          <Typography color="inherit">Login</Typography>
        </Breadcrumbs>
        <Login/>
      </Container>
      <Footer/>
    </div>
  )
}

export default LoginPage;
