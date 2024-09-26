import HeaderComponent from "@/src/components/header";
import IndexComponent from "@/src/components";
import FooterMobile from "@/src/components/footer";

export default function Home() {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <IndexComponent></IndexComponent>
      <FooterMobile></FooterMobile>
    </main>
  );
}
