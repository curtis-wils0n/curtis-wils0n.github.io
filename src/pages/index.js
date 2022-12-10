import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
