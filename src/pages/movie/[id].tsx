import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchMovieDescription from "@/lib/fetch-movie-description";
import { useRouter } from "next/router";
import Head from "next/head";

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

  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <>
        <Head>
          <title>민주의 한입 시네마</title>
          <meta property="og:title" content="민주의 한입 시네마" />
          <meta property="og:image" content="./thumbnail.png" />
          <meta
            property="og:description"
            content="최신 영화에 대해 한눈에 알아보세요"
          />
        </Head>
        <div>로딩중입니다. 잠시만 기다려 주세요.</div>
      </>
    );
  if (!movie) return "문제가 발생했습니다. 다시 시도해주세요.";

  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta property="og:title" content={movie.title} />
        <meta property="og:image" content={movie.posterImgUrl} />
        <meta property="og:description" content={movie.subTitle} />
      </Head>
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
    </>
  );
}
