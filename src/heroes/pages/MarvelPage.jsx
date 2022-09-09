import React from "react";
import { HeroList } from "../components/HeroList";

const PUBLISHER = "Marvel Comics";

export const MarvelPage = () => {
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />
      <HeroList publisher={PUBLISHER} />
    </>
  );
};
