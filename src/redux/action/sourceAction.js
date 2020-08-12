import axios from "axios";
import { newsBaseUrl, newsApiKey } from "../../Config/api.config";

export const fetchSource = (endpoint) => async (dispatch) => {
    try {
      dispatch({ type: "TOGGLE_SOURCE_FETCHING_STATE" });
  
      const response = await axios(
        `https://cors-anywhere.herokuapp.com/${newsBaseUrl}/${endpoint}?apiKey=${newsApiKey}`//todo add
      );
        console.log(response.data.sources)
        const data = response.data.sources
      // console.log(data);
      dispatch({ type: "SET_SOURCE", payload: data });
    } catch (err) {
      console.log(err.message);
    } finally {
      dispatch({ type: "TOGGLE_SOURCE_FETCHING_STATE" });
    }
  };
  