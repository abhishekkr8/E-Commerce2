import { useState } from 'react';
import {createContext} from 'react'
import { AxiosInstance } from '../routes/axiosInstance';
import { useEffect } from 'react';

export const AllProductsContext = createContext();

const ProductContex = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    async function getAllProducts() {
        let res = await AxiosInstance.get("/shop/product/get");
        setAllProducts(res.data.data)
    }

    useEffect(()=>{
        getAllProducts();
    },[])

  return (
    <AllProductsContext.Provider value={{allProducts}}>
        {props.children}
    </AllProductsContext.Provider>
  )
}

export default ProductContex