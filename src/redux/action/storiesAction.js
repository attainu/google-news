import axios from "axios";
import { newsBaseUrl, newsApiKey } from "../../Config/api.config";

export const fetchStories = (endpoint, pagesize) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });

    const response = await axios(
      `https://cors-anywhere.herokuapp.com/${newsBaseUrl}/${endpoint}?country=in${
        pagesize ? `&pageSize=+${pagesize}` : ""
      }&apiKey=${newsApiKey}` //todo add
    );
      console.log(response.data.sources)
      const data = response.data.articles;
      
    console.log(data);
    dispatch({ type: "SET_STORIES", payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });
  }
};

export const fetchSource = (endpoint) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });

    const response = await axios(
      `https://cors-anywhere.herokuapp.com/${newsBaseUrl}/${endpoint}?apiKey=${newsApiKey}`//todo add
    );
      console.log(response.data.sources)
      const data = response.data.sources
    console.log(data);
    dispatch({ type: "SET_STORIES", payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: "TOGGLE_FETCHING_STATE" });
  }
};
