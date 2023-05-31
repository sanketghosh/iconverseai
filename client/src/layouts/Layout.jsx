import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function Layout() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen font-poppins pb-16">
      <Navbar />
      <div className="px-4 py-2 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <Outlet />
      </div>
    </main>
  );
}
