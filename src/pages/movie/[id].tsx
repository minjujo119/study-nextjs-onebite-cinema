import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchMovieDescription from "@/lib/fetch-movie-description";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchMovieDescription(Number(id));

  // if (!movie) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return "로딩중입니다. 잠시만 기다려 주세요.";
  if (!movie) return "문제가 발생했습니다. 다시 시도해주세요.";

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
