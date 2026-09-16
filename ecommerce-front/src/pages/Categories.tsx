import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetCategories } from '@store/categories/categoriesSlice';
import { useEffect } from 'react';
import { Category } from "@components/ecommerce";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h1>

      {loading === "pending" && (
        <div className="py-16 text-center text-gray-500">Loading...</div>
      )}

      {error && (
        <div className="py-16 text-center text-red-500">{error}</div>
      )}

      {loading === "succeeded" && records.length === 0 && (
        <div className="py-16 text-center text-gray-500">There are no categories</div>
      )}

      {records.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4">
          {records.map((record) => (
            <Category key={record.id} {...record} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
