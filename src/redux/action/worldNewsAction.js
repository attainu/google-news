import axios from "axios";
import { SET_WORLD_STORIES, TOGGLE_FETCHING_STATE } from "../actionTypes";

export const fetchWorldNews = () => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_FETCHING_STATE });

    const response = await axios(
      `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?language=en&pageSize=20&apiKey=030c64300b5b4d14b11c5b91c2e25946`
    );

    const data = response.data.articles;
    console.log(data);
    dispatch({ type: SET_WORLD_STORIES, payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: TOGGLE_FETCHING_STATE });
  }
};