import Image from "next/image";
import HeaderComponent from "@/src/components/header";
import IndexComponent from "@/src/components";

export default function Home() {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <IndexComponent></IndexComponent>
    </main>
  );
}
