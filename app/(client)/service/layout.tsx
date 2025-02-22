export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative h-full bg-slate-50 min-h-[100vh]">
        {children}
      </div>
    </>
  );
}
