import Search from '@mui/icons-material/Search';
import * as React from 'react';
import "../App.css"
import { useCustomContext } from '../context/GlobalContext';
import BasicCard from './Card';
import CartItem from './CartItem';
interface Iprops {
    icon?: JSX.Element
}
export default function Cart(props: Iprops) {
    const { cart, setTotalPrice } = useCustomContext() as any
    const uniqcart = cart.filter((v: any, i: any, a: any) => a.findIndex((c: any) => (c.id === v.id)) === i)
    let totalprice = 0;
    cart.forEach((element: any) => {
        return totalprice += parseInt(element.price)
    });
    setTotalPrice(totalprice)
    return <BasicCard>
        {
            uniqcart.map((v: any, i: any) => <CartItem data={v} key={i} />)
        }
    </BasicCard>
}