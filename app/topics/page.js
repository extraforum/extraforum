import { Breadcrumbs, Link, Typography } from "@mui/material"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import ItemsList from './../components/Article/ItemsList';

function Topics() {
  return (
    <div>
      <Navbar/>
      <br></br>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="primary" href="/">
            Home
        </Link>
        <Typography color="inherit">Categories</Typography>
      </Breadcrumbs>
      <ItemsList/>
      <Footer/>
    </div>
  )
}

export default Topics
