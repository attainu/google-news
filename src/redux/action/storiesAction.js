import axios from "axios";
import { newsBaseUrl, newsApiKey } from "../../Config/api.config";


export const fetchStories = (endpoint,pagesize) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });

    const response = await axios(
      `${newsBaseUrl}/${endpoint}?country=in${pagesize?`&pageSize=+${pagesize}`:''}&apiKey=${newsApiKey}`//todo add
    );
      console.log(response)
    const data = response.data.articles;
    console.log(data);
    dispatch({ type: "SET_STORIES", payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });
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
