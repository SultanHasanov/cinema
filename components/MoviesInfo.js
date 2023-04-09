import Link from "next/link";
import PersonsInfo from "./PersonsInfo";

const MoviesInfo = ({ movie }) => {
  const {
    poster,
    name,
    countries,
    year,
    budget,
    fees,
    genres,
    movieLength,
    description,
  } = movie || {};

  return (
    <div className="movies-body">
      <div className="movies-content">
        <img src={poster.url} width={330} height={455} />
        <div className="movies-content-info">
          <span>
            <b>Название:</b> {name}
          </span>
          <span>
            <b>Год производства:</b> {year}
          </span>
          <span>
            <b>Страна:</b> {countries[0].name}
          </span>
          <span>
            <span>
              <b>Жанр: </b>
              {genres && genres.map(({ name }) => <>{name}, </>)}
            </span>
          </span>
          <span>
            <b>Бюджет:</b> {budget.value}$
          </span>
          {/* <span>
            <b>Сборы в России:</b>
            {fees.russia ? fees.russia.map(({ value }) => <>{value}$, </>) : null}
          </span>
          <span>
            <b>Сборы в США:</b>
            {fees.usa && fees.usa.map(({ value }) => <>{value}$, </>)}
          </span> */}
          <span>
            <b>Сборы в мире:</b> {fees.world.value}$
          </span>
          <span>
            <b>Описание:</b> {description}
          </span>
          <span>
            <b>Время:</b> {movieLength} мин.
          </span>
          <Link className="btn-back" href={"/"}>
            Вернуться на главную страницу
          </Link>
        </div>
      </div>
      <h1>В фильме снимались</h1>
      <div className="persons-info">
        <PersonsInfo movie={movie} />
      </div>
    </div>
  );
};

export default MoviesInfo;
