import Search from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import * as React from 'react';
import "../App.css"
import Cart from './Cart';
import TotalPrice from './TotalPriceCard';
interface Iprops {
    icon?: JSX.Element
}
export default function RightBar(props: Iprops) {
    return <Grid sx={{ height: 'max-content' }} container spacing={4} item xs={2}>
        <Grid item xs={12}>
            <Cart />
        </Grid>
        <Grid item xs={12}>
            <TotalPrice />
        </Grid>

    </Grid>
}