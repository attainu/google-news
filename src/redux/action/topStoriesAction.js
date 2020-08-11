import axios from "axios";
import { SET_TOP_STORIES, TOGGLE_FETCHING_STATE } from "../actionTypes";

export const fetchTopStories = () => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_FETCHING_STATE });

    const response = await axios(
      "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=030c64300b5b4d14b11c5b91c2e25946"
    );

    const data = response.data.articles;
    console.log(data);
    dispatch({ type: SET_TOP_STORIES, payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: TOGGLE_FETCHING_STATE });
  }
};

// export const fetchRelatedStories = (title) => async (dispatch) => {
//   try {
//     // dispatch({ type: "TOGGLE_FETCHING_STATE" });

//     const response = await axios(
//       `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=${title}&apiKey=030c64300b5b4d14b11c5b91c2e25946`
//     );

//     const data = response.data;
//     console.log(data);
//     // dispatch({ type: "SET_STORIES", payload: data });
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     // dispatch({ type: "TOGGLE_FETCHING_STATE" });
//   }
// };
