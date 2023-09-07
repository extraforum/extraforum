import { Breadcrumbs, Container, Link, Typography } from "@mui/material"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Register from "../components/Auth/Register"

function RegisterPage() {
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
          <Typography color="inherit">Register</Typography>
        </Breadcrumbs>
        <Register/>
      </Container>
      <Footer/>
    </div>
  )
}

export default RegisterPage;
