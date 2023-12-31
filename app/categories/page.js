import { Breadcrumbs, Container, Link, Typography } from "@mui/material"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import ItemsList from '../components/Category/ItemsList';

function CategoriesPage() {
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
          <Typography color="inherit">Categories</Typography>
        </Breadcrumbs>
        <ItemsList/>
      </Container>
      
      <Footer/>
    </div>
  )
}

export default CategoriesPage;
