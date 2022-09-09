import React from "react";
import { HeroList } from "../components";

const PUBLISHER = "DC Comics";

export const DcPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <HeroList publisher={PUBLISHER} />
    </>
  );
};
