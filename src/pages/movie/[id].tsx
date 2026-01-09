import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchMovieDescription from "@/lib/fetch-movie-description";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const movie = await fetchMovieDescription(Number(id));
  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!movie) {
    return "문제가 발생했습니다. 다시 시도해주세요.";
  }
  return (
    <div>
      <div
        className={style.image_box}
        style={{ backgroundImage: `url(${movie.posterImgUrl})` }}
      >
        <img src={movie.posterImgUrl} alt={movie.title} />
      </div>
      <div className={style.text_box}>
        <h1>{movie.title}</h1>
        <p>{`${movie.releaseDate} / ${movie.genres} / ${movie.runtime}`}</p>
        <p>{movie.company}</p>
        <h2>{movie.subTitle}</h2>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}
