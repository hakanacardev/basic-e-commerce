import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Interface } from 'readline';
import { Product } from '../Interfaceses/Product';
import { useCustomContext } from '../context/GlobalContext';

interface Iprops {
    data: Product | undefined
}

export default function ProductCard(props: Iprops) {
    //console.log('props.data11111', props.data)
    const { addCartItem } = useCustomContext() as any
    return (
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="140"
                image={props.data?.image}
                alt="green iguana"
            />
            <CardContent >
                <Typography color='#1976d2' gutterBottom variant="subtitle2" component="div">
                    {props.data?.price}
                </Typography>
                <Typography fontWeight={500} variant="subtitle1" color="text.secondary">
                    {props.data?.name}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
                <Button onClick={() => addCartItem(props.data)} sx={{ width: '100%' }} variant='contained' color="primary" disableElevation>
                    Sepete Ekle
                </Button>
            </CardActions>
        </Card>
    );
}