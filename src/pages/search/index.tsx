import SearchLayout from "@/component/search-layout";
import { ReactNode } from "react";
import MovieItem from "@/component/movie-item";
import style from "./index.module.css";
import fetchAllMovies from "@/lib/fetch-all-movies";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const movies = await fetchAllMovies(q as string);

  return {
    props: { movies },
  };
};

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.movie_list}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
