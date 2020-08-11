import axios from "axios";
import {
  SET_CATEGORYWISE_STORIES,
  TOGGLE_CATEGORY_FETCHING_STATE,
} from "../actionTypes";

export const fetchCategoryStories = (categoryName) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_CATEGORY_FETCHING_STATE });

    const response = await axios(
      `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&category=${categoryName}&pageSize=20&apiKey=030c64300b5b4d14b11c5b91c2e25946`
    );

    const data = response.data.articles;
    console.log(data);
    dispatch({ type: SET_CATEGORYWISE_STORIES, payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: TOGGLE_CATEGORY_FETCHING_STATE });
  }
};
