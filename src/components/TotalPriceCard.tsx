import Search from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import * as React from 'react';
import "../App.css"
import { useCustomContext } from '../context/GlobalContext';
import BasicCard from './Card';
import CartItem from './CartItem';
interface Iprops {
    icon?: JSX.Element
}
export default function TotalPrice(props: Iprops) {
    const { totalPrice } = useCustomContext() as any

    return <BasicCard>
        <Typography>Total Price : {totalPrice}</Typography>
    </BasicCard>
}