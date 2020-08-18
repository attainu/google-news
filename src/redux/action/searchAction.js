import axios from "axios";
import { newsBaseUrl, newsApiKey } from "../../Config/api.config";

import {
  SET_SEARCH_STORIES,
  TOGGLE_SEARCH_FETCHING_STATE,
} from "../actionTypes";

export const fetchSearchResults = (SearchQuery, pagesize) => async (
  dispatch
) => {
  try {
    dispatch({ type: TOGGLE_SEARCH_FETCHING_STATE });

    const response = await axios(
      `https://cors-anywhere.herokuapp.com/${newsBaseUrl}/everything?qInTitle="${SearchQuery}"&language=en&sortBy=popularity${
        pagesize ? `&pageSize=+${pagesize}` : ""
      }&apiKey=${newsApiKey}`
    );

    const data = response.data.articles;
    console.log(data);

    dispatch({ type: SET_SEARCH_STORIES, payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: TOGGLE_SEARCH_FETCHING_STATE });
  }
};
