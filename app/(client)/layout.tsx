import Navbar from "@/components/Navbar";
import Badge from "@/components/Badge";
import Footer from "@/components/section/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden sm:flex sm:bg-red-600 md:flex md:bg-yellow-400 lg:flex lg:bg-green-700 justify-center w-full bg-gray-100">
        <Badge text="Sangguniang Bayan of Calasiao 2025" href="/officials" />
      </div>
      <Navbar />
      <main className="flex-grow bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
