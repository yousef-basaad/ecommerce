import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/ecommerce";

function Home() {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center gap-6">
          <span className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase">
            New season
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-2xl">
            Style that fits your everyday
          </h1>
          <p className="text-gray-400 max-w-md">
            Discover fresh arrivals across men, women, kids, baby and sport — curated for every part of your day.
          </p>
          <Link
            to="/categories"
            className="mt-2 inline-flex items-center bg-white text-gray-950 font-semibold text-sm px-6 py-3 rounded-full transition-transform hover:scale-105"
          >
            Shop now
          </Link>
        </div>
      </section>

      {/* CATEGORY PREVIEW */}
      {records.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
            <Link to="/categories" className="text-sm font-semibold text-gray-600 hover:text-gray-950">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4">
            {records.map((record) => (
              <Category key={record.id} {...record} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
