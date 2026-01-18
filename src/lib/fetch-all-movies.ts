import { MovieData } from "@/types";
import { API_URL } from "./fetch-url";

export default async function fetchAllMovies(q?: string): Promise<MovieData[]> {
  let url = `${API_URL}/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
