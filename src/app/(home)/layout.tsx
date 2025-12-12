import Header from "@/components/custom/Header";
import CursorProvider from "@/context/cursror-context/CursorContext";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
        <CursorProvider>
      <Header />
      <main>{children}</main>
</CursorProvider>
    </section>
  );
};
export default HomeLayout;
