import {  useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetProductsByCatPrefix from "@store/products/actGetProductsByCatPrefix"
import { Product } from "@components/eCommerce"


function Products() {
  const params= useParams();
  const dispatch = useAppDispatch();
  const {records,loading,error} = useAppSelector((state)=> state.products);

  useEffect(() => {
   
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
  }, [dispatch,params]);

  const ProductsList =
   records.length > 0
    ? records.map(record => {
       console.log("IMG FROM RECORD:", record.img);

    return <div key={record.id}
     className="w-1/2 md:w-1/4 flex justify-center mb-5 mt-2">
      <Product {...record} />
    </div>

  }) : "there are no categories";
  return (
      <div className="container mx-auto">
  <div className="flex flex-wrap">
   {ProductsList}
  </div>
</div>
  )
}

export default Products