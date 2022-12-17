import Search from '@mui/icons-material/Search';
import React, { useState, useEffect } from 'react';
import "../App.css"
import CustomLayout from '../Templates/CustomLayout';
import { Box, Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Product } from '../Interfaceses/Product';
import { getProduct } from '../api/getProduct';
import BasicCard from '../components/Card';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import { useCustomContext } from '../context/GlobalContext';
interface Iprops {
    icon?: JSX.Element
}
export default function ProductDetail(props: Iprops) {
    const { id } = useParams()

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
    const onlyProduct = productData?.find((v) => v.id === id) as any
    console.log('onlyProduct', onlyProduct)
    const { addCartItem } = useCustomContext() as any

    return <CustomLayout>
        <Grid sx={{ height: 'max-content' }} container spacing={4} item xs={10} >
            <Grid container item xs={12} >
                <Grid xs={6} style={{ backgroundColor: '#dddddd' }} >
                    <img src={onlyProduct && onlyProduct.image} width="auto" height="auto" />
                </Grid>
                <Grid xs={6} style={{ backgroundColor: '#dddddd', padding: 20 }}>
                    <Grid item xs={12} >
                        <Box style={{ padding: 4 }}>
                            <Typography >{onlyProduct && onlyProduct.name}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Box style={{ padding: 4, marginTop: 10 }}>
                            <Typography color="primary" fontSize={20}>{onlyProduct && onlyProduct.price} ₺</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Button onClick={() => addCartItem(onlyProduct && onlyProduct)} sx={{ width: '100%' }} variant='contained' color="primary" disableElevation>
                            Sepete Ekle
                        </Button>
                    </Grid>
                    <Grid item xs={12} >
                        <Box style={{ padding: 4, marginTop: 10 }}>
                            <Typography >{onlyProduct && onlyProduct.description}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </CustomLayout>
}