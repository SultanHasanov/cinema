import Link from "next/link";

const Moviesname = ({ movies }) => {

  // console.log(movies)
  return (
    <div className="movies_name">
      <ul>
        {movies.map(({ id, name }) => (
          <Link key={id} href={`/movies/${id}`}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Moviesname;
