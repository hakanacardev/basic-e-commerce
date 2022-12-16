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
import { GlobalProvider, useCustomContext } from './context/GlobalContext';
import CartItem from './components/CartItem';
import Cart from './components/Cart';
import TopBar from './components/TopBar';
import TotalPrice from './components/TotalPriceCard';
import RightBar from './components/RightBar';
import ContainerLayout from './components/ContainerLayout';
import CustomLayout from './Templates/CustomLayout';
import Index from './Pages/Index';



const App = () => {



  return (

    <>
      <GlobalProvider  >
        <Index />
      </GlobalProvider>

    </>





  );
}
export default App;
