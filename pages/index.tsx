import { GetServerSideProps } from "next";
import { Athlete } from "../types";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:/3000/api/athletes");
  const athletes: Athlete[] = await res.json();

  return {
    props: { athletes },
  };
};
