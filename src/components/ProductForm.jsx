import React from 'react'
import { useForm } from "react-hook-form"
import ProductList from './ProductList'
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ProductsContext } from '../contexts/ProductsContext';



const ProductForm = () => {
  const { register, handleSubmit } = useForm()

  const {products, setProducts} = useContext(ProductsContext)

  const onSubmit = (data) => {
    const newProduct = {
      id: uuidv4(),
      name: data.name,
      category: data.category,
      priceHT: data.priceHT,
      tva: data.tva,
      stock: data.stock,
      description: data.description,
    }
    const newProductsList = [...products, newProduct]
    setProducts(newProductsList)
    localStorage.setItem("products", JSON.stringify(newProductsList))
    console.log(data)
  
  }
  return (
    <>
   
    <form className='flex flex-col items-start justify-center m-3 p-3 ' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name :</label>
      <input className='' type="text" name="name" {...register("name")} />
      <label htmlFor="category">Category :</label>
      <input type="text" name="category" {...register("category")} />
      <label htmlFor="priceHT">Price HT :</label>
      <input type="text" name="priceHT" {...register("priceHT")} />
      <label htmlFor="tva">TVA :</label>
      <input type="text" name="tva" {...register("tva")} />
      <label htmlFor="stock">Stock :</label>
      <input type="text" name="stock" {...register("stock")} />
      <label htmlFor="description">Description :</label>
      <input type="text" name="description" {...register("description")} />
      <button className='' type="submit">Valider</button>
    </form>


     </>
  )
}

export default ProductForm