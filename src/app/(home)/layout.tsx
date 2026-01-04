import Header from "@/components/custom/Header";
import PageTransition from "@/components/custom/PageTransition";
import Transition from "@/components/custom/Transition";
import CursorProvider from "@/context/cursror-context/CursorContext";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <section>
      <CursorProvider>
        <Transition/>
      <Header />
      <main
      className="bg-secondary-default/100"
      >
        <PageTransition>
        {children}
        </PageTransition>
        </main>
</CursorProvider>
    </section>
  );
};
export default HomeLayout;
