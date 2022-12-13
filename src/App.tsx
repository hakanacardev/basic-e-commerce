import React, { useState, useEffect } from 'react';
import "./App.css"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Container, TextField } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Input from './components/StyledTextField';
import Grid from '@mui/material/Grid';
import Search from '@mui/icons-material/Search';
import BasicCard from './components/Card';
import Paper from '@mui/material/Paper';
import ProductCard from './components/ProductCard';
import { getProduct } from "../src/api/getProduct"
import { Product } from './Interfaceses/Product';
import { GlobalProvider } from './context/GlobalContext';



const App = () => {

  const [productData, setProductData] = useState<Product[] | undefined>()
  const fecthProduct = async () => {
    let res = await getProduct()
    if (res) {
      setProductData(res?.data)
    }
  }
  useEffect(() => {
    fecthProduct()

  }, [])

  return (

    <>
      <GlobalProvider  >

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">

            <Container maxWidth="lg">
              <Toolbar>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  MUI
                </Typography>
                <Box sx={{ marginLeft: 5 }}>
                  <Input
                    icon={<Search />}
                  />
                </Box>

                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <Button
                    color='inherit'
                    startIcon={<WorkOutlineIcon />}
                  >
                    deneme
                  </Button>
                  <Button
                    color='inherit'
                    startIcon={<AccountCircle />}
                  >
                    deneme2
                  </Button>
                </Box>
              </Toolbar>

            </Container>
          </AppBar>
        </Box>
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Grid container spacing={4}>
            <Grid sx={{ height: 'max-content' }} container spacing={4} item xs={2}>
              <Grid item xs={12}>
                <BasicCard children={<Typography>Deneme</Typography>} />
              </Grid>
              <Grid item xs={12}>
                <BasicCard children={<Typography>Deneme</Typography>} />
              </Grid>
              <Grid item xs={12}>
                <BasicCard children={<Typography>Deneme</Typography>} />
              </Grid>
            </Grid>
            <Grid item xs={8} container spacing={2}>
              {productData?.map((value: any, i: any) => {
                return (
                  <Grid key={i} item xs={3}>
                    <ProductCard
                      data={value} />
                  </Grid>
                )
              }
              )
              }
            </Grid>
            <Grid sx={{ height: 'max-content' }} container spacing={4} item xs={2}>
              <Grid item xs={12}>
                <BasicCard children={<Typography>Deneme</Typography>} />
              </Grid>
              <Grid item xs={12}>
                <BasicCard children={<Typography>Deneme</Typography>} />
              </Grid>

            </Grid>
          </Grid>

        </Container>
      </GlobalProvider>

    </>





  );
}
export default App;
