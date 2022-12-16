import Search from '@mui/icons-material/Search';
import { Container, Grid } from '@mui/material';
import * as React from 'react';
import "../App.css"
import RightBar from '../components/RightBar';
import TopBar from '../components/TopBar';
interface Iprops {
    icon?: JSX.Element
    children: JSX.Element
}
export default function CustomLayout(props: Iprops) {
    return <>
        <TopBar />
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Grid container spacing={4}>
                {props.children}
                <RightBar />
            </Grid> 
        </Container>


    </>
}