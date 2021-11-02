import axios from "axios";
import { gameDetailsURL } from "../api";
import { gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detaildata = await axios.get(gameDetailsURL(id));
  const screenShotdata = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detaildata.data,
      screen: screenShotdata.data,
    },
  });
};
