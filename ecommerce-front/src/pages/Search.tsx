import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actSearchProducts from "@store/products/actSearchProducts";
import { Product } from "@components/ecommerce";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (query) dispatch(actSearchProducts(query));
  }, [dispatch, query]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Results for &quot;{query}&quot;</h1>

      {loading === "pending" && <div className="py-16 text-center text-gray-500">Loading...</div>}
      {error && <div className="py-16 text-center text-red-500">{error}</div>}
      {loading === "succeeded" && records.length === 0 && (
        <div className="py-16 text-center text-gray-500">No products found</div>
      )}

      {records.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {records.map((record) => (
            <Product key={record.id} {...record} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
