import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { ReactElement } from "react";
import FilterArea from "./FilterArea";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <Header />

      <main>
        <FilterArea />
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
