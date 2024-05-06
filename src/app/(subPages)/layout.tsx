import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center xs:px-16 px-8 lg:px-32 py-20 ">
      <HomeBtn />
      {children}
    </main>
  );
}
