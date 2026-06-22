import NavBar from "@/components/NavBar";

export default function VotingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar className="absolute top-0 left-0 w-full z-10 md:flex md:justify-center md:mt-9" />
      {children}
    </>
  );
}
