import Navbar from "@/components/Navbar";
import Badge from "@/components/Badge";

export default function Layout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center w-full bg-gray-100">
        <Badge text="Sangguniang Bayan of Calasiao 2025" href="/municipal-officials"/>
      </div>
      <main className="relative bg-gray-100">
      <Navbar />
        {children}
      </main>
    </>
  );
}
