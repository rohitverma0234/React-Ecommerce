import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productcontext'

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const{getSingleProduct, isSingleLoading, singleProduct} = useProductContext()

  const{id:alias, name, company, price, description, category, stock, reviews, stars, image} = singleProduct

  const {id} = useParams();
  // console.log(id)

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[])

  return (
    <div>SingleProduct {name}</div>
  )
}

export default SingleProduct