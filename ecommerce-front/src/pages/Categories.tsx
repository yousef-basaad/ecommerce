
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {actGetCategories} from '@store/categories/categoriesSlice';
import { useEffect } from 'react';
import { Category } from "@components/eCommerce";





function Categories() {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);


  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const categoriesList =
   records.length > 0
    ? records.map(record => {
    return <div key={record.id}
     className="w-1/2 md:w-1/4 flex justify-center mb-5 mt-2">
      <Category {...record} />
    </div>

  }) : "there are no categories";

  return (
    <div className="container mx-auto">
  <div className="flex flex-wrap">
   {categoriesList}
  </div>
</div>
  )
}

export default Categories