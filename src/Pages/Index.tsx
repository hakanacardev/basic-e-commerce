import Search from '@mui/icons-material/Search';
import React, { useState, useEffect } from 'react';
import "../App.css"
import CustomLayout from '../Templates/CustomLayout';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Product } from '../Interfaceses/Product';
import { getProduct } from '../api/getProduct';
import BasicCard from '../components/Card';
import ProductCard from '../components/ProductCard';
interface Iprops {
    icon?: JSX.Element
}
export default function Index(props: Iprops) {
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
    return <CustomLayout>
        <>
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
        </>

    </CustomLayout>
}