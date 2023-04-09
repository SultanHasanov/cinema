import Moviesname from "@/components/Moviesname";
import axios from "axios";
import Head from "next/head";

export const getStaticProps = async () => {
  const { data } = await axios.get(`${process.env.API}?page=1&limit=20`, {
    headers: {
      "X-API-KEY": `${process.env.TOKEN}`,
      accept: "application/json",
    },
  });

  return {
    props: { movies: data.docs },
  };
};

const Home = ({ movies }) => {
    // console.log({movies});

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Moviesname movies={movies} />
    </div>
  );
};

export default Home;
