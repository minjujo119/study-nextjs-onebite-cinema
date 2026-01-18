import { MovieData } from "@/types";
import { API_URL } from "./fetch-url";

export default async function fetchMovieDescription(
  id: number,
): Promise<MovieData | null> {
  const url = `${API_URL}/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
