import * as React from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import UnderConstruction from "../components/underConstruction";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Profile />
      <UnderConstruction />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Portfolio | Curtis Wilson</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
  </>
)
