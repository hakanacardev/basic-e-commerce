import Search from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import "../App.css"
import { useCustomContext } from '../context/GlobalContext';
import { Product } from '../Interfaceses/Product';
interface Iprops {
    data: Product
    key?: number
}
export default function CartItem(props: Iprops) {
    const { cart, addCartItem, deleteCartItem } = useCustomContext() as any
    let qty = cart.filter((v: any) => v.id === props.data.id).length
   
    return (

        <Box key={props.key} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box style={{ flexDirection: 'column' }}>
                <Typography fontSize={12}>{props.data.brand}</Typography>
                <Typography fontSize={10}>{props.data.price}</Typography>

            </Box>
            <Box style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button onClick={() => deleteCartItem(props.data)} style={{ minHeight: 0, minWidth: 0, padding: "0px 6px", backgroundColor: '#dddddd' }} >-</Button>
                <Button disabled style={{ minHeight: 0, minWidth: 0, padding: "0px 6px", backgroundColor: '#3498db', color: '#dddddd' }} >
                    {
                        qty
                    }
                </Button>
                <Button onClick={() => addCartItem(props.data)} style={{ minHeight: 0, minWidth: 0, padding: "0px 6px", backgroundColor: '#dddddd' }} >+</Button>
            </Box>
        </Box>
    )
}