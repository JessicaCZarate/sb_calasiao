export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative h-full bg-slate-50">{children}</div>
    </>
  );
}
