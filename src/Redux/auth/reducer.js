import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, UPDATE_PROFILE } from "./actionTypes";
import { loadData, saveData } from "../../utils/localStorage"

const token = loadData("token");
const user = loadData("user");

const initState = {
    isAuth: token ? true : false,
    user: user || "",
    token: token || "",
    isLoading: false,
    isError: false
}
export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case LOGIN_SUCCESS: {
            saveData("token", payload.token);
            saveData("user", payload.user);
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                token: payload.token,
                isLoading: false,
                isError: false
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                token: "",
                isLoading: false,
                isError: true
            }
        }
        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case REGISTER_SUCCESS: {
            saveData("token", payload.token);
            saveData("user", payload.user);
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                token: payload.token,
                isLoading: false,
                isError: false
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                isAuth: false,
                token: "",
                isLoading: false,
                isError: true
            }
        }
        case UPDATE_PROFILE: {
            return {
                ...state,
                user:payload
            }
        }
        default:
            return state
    }
}