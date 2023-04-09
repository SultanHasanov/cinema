import MoviesInfo from "@/components/MoviesInfo";
import axios from "axios";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  console.log(context);
  const { id } = context.query;
  console.log(id);
  const { data } = await axios.get(`${process.env.API}/${id}`, {
    headers: {
      "X-API-KEY": `${process.env.TOKEN}`,
      accept: "application/json",
    },
  });

  return {
    props: { movie: data },
  };
};

const Movies = ({ movie }) => {
  console.log({ movie });

  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      {/* {movie?.map(({ id, body }) => (
        <li key={id}>{body}</li>
      ))} */}
      <MoviesInfo movie={movie} />
    </div>
  );
};

export default Movies;
