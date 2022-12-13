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
        const filter = await cart.filter((v: any) => v.id !== product.id)
        await window.localStorage.setItem("cart", JSON.stringify(filter))
        setCart(getCart())
    }
    console.log("cart", cart)
    const data = { product, setProduct, getCart, addCartItem, deleteCartItem, cart }

    return (
        <GlobalContext.Provider value={data as any} >
            {props.children}
        </GlobalContext.Provider>
    )

}
export const useCustomContext = () => useContext(GlobalContext)

