import SearchLayout from "@/component/search-layout";
import { ReactNode, useEffect, useState } from "react";
import MovieItem from "@/component/movie-item";
import style from "./index.module.css";
import fetchAllMovies from "@/lib/fetch-all-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";
import Head from "next/head";

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchMovieResult = async () => {
    const data = await fetchAllMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchMovieResult();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>민주의 한입 시네마 - 검색결과</title>
        <meta property="og:title" content="민주의 한입 시네마 - 검색결과" />
        <meta property="og:image" content="./thumbnail.png" />
        <meta
          property="og:description"
          content="최신 영화에 대해 한눈에 알아보세요"
        />
      </Head>
      <div className={style.movie_list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
