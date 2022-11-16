import axios from "axios";

export const GET_ALL_VG = "GET_ALL_VG";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const ERROR = "ERROR";

//ruta y action para mi Home
export function getAllVg() {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/videogames", {});

      dispatch({
        type: GET_ALL_VG,
        payload: json.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
}

export function getAllGenres() {
  return async (dispatch) => {
    try {
      const allGenres = await axios.get("http://localhost:3001/genres");
      dispatch({
        type: GET_ALL_GENRES,
        payload: allGenres.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
}
