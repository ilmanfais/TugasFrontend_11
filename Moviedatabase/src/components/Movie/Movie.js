import styled from "styled-components";
import React from "react";

function Movie(props) {
  const { title, date, Image, genre } = props;
  return (
    <MovieStyle>
      <img className="movie__image" src={Image} alt="" />
      <h3 className="movie__title">{title}</h3>
      <p className="movie__genre">{genre}</p>
      <p className="movie__date">{date}</p>
    </MovieStyle>
  );
}

const MovieStyle = styled.div`
  margin-bottom: 1rem;

  .movie__image {
    border-radius: 25px;
    width: 350px;
    height: auto;
    margin-bottom: 1rem;
  }
  .movie__title {
    color: aquamarine;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }
  .movie__date {
    color: #000000;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default Movie;
