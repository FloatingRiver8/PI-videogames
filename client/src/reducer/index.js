import { GET_ALL_VG, ERROR, GET_ALL_GENRES } from "../actions"


const initialState = {
    allVg: [],
    error: "",
    allGenres: [],
   
    
}


export default function rootReducer(state = initialState, action) {

switch(action.type){
 case GET_ALL_VG:
    return{
        ...state,
        allVg: action.payload
    }

case GET_ALL_GENRES:
    return{
        ...state,
        allGenres: action.payload
    }
    case ERROR:
        return{
            ...state,
            error: action.payload
        }
        default:
            return state;
        }

}

