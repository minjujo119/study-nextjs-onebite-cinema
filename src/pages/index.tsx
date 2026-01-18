import SearchLayout from "@/component/search-layout";
import { ReactNode } from "react";
import MovieItem from "@/component/movie-item";
import style from "./index.module.css";
import fetchAllMovies from "@/lib/fetch-all-movies";
import fetchRecommendMovies from "@/lib/fetch-recommend-movie";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  const [allMovies, recommendMovies] = await Promise.all([
    fetchAllMovies(),
    fetchRecommendMovies(),
  ]);

  return {
    props: { allMovies, recommendMovies },
    revalidate: 60,
  };
};

export default function Home({
  allMovies,
  recommendMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className={style.container}>
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          <div className={`${style.movie_list} ${style.recommend}`}>
            {recommendMovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          <div className={`${style.movie_list} ${style.all}`}>
            {allMovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
