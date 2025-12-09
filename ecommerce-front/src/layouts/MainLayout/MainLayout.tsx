
import {Header,Footer} from "@components/common";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-8">
        {/* Main content goes here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout