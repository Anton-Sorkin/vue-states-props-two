import { IMovie } from "@/models/IMovie";
import { IOmdbResponse } from "@/models/IOmdbResponse";
import axios from "axios";

export class MainService {
  async getMovies(staticInput: string): Promise<IMovie[]> {
    const response = await axios.get<IOmdbResponse>(
      "http://www.omdbapi.com/?apikey=ee348134&s=" + staticInput
    );
    return response.data.Search;
  }

  async getSearch(userInput: string): Promise<IMovie[]> {
    const response = await axios.get<IOmdbResponse>(
      "http://www.omdbapi.com/?apikey=ee348134&s=" + userInput
    );
    return response.data.Search;
  }
}
