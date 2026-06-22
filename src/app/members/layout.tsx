import NavBar from "@/components/NavBar";

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar">
      <NavBar className="w-full mt-0 md:flex md:justify-center md:mt-9" />
      {children}
    </div>
  );
}
