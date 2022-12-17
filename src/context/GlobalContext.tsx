import { createContext, useContext, useState } from "react";
import { Product } from "../Interfaceses/Product";

interface Iprops {
    children?: JSX.Element | JSX.Element[];
}
export const GlobalContext = createContext({} as Iprops)

export const GlobalProvider = (props: Iprops) => {
    const [product, setProduct] = useState<Product>()
    const getCart = () => {
        const localeCart = JSON.parse(window.localStorage.getItem("cart") as any) || [];

        return localeCart
    }
    const [cart, setCart] = useState(getCart())
    const addCartItem = async (product: Product) => {

        await window.localStorage.setItem("cart", JSON.stringify([...cart as any, product]))
        setCart(getCart())
    }
    const deleteCartItem = async (product: Product) => {
        const index = await cart.findIndex((v: any) => v.id === product.id)
        cart.splice(index, 1)
        await window.localStorage.setItem("cart", JSON.stringify(cart))
        setCart(getCart())
    }
    const [totalPrice, setTotalPrice] = useState()
    console.log('totalPrice', totalPrice)
    const [search, setSearch] = useState("")

    const data = { product, setProduct, getCart, addCartItem, deleteCartItem, cart, totalPrice, setTotalPrice, search, setSearch }

    return (
        <GlobalContext.Provider value={data as any} >
            {props.children}
        </GlobalContext.Provider>
    )

}
export const useCustomContext = () => useContext(GlobalContext)

