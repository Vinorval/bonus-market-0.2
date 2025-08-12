import { 
    REGISTRATION, 
    AUTHORIZATION, 
    EXIT,
    GET_USER,
    UPDATE_USER,
    RESET_PASSWORD,
    PUT_ADRESS, 
    UDEPT_ADRESS
} from "../actions/auth";

const initialState= {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    adress: [],
};

export const authReducet = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION: {
          return { ...state, email: action.email, surname: action.surname, password: action.password };
        }
        case AUTHORIZATION: {
          return { ...state, email: action.email, password: action.password};
        }
        case EXIT: {
            return { ...state, email: '', name: '', surname: '', phone: '', password: '', adress: [], }
        }
        case GET_USER: {
            return { ...state, email: action.email, name: action.name, surname: action.surname, phone: action.phone, password: action.password, adress: action.adress, }
        }
        case UPDATE_USER: {
            return { ...state, email: action.email, name: action.name, surname: action.surname, phone: action.phone, password: action.password, }
        }
        case RESET_PASSWORD: {
          return { ...state, email: action.email }
        }
        case PUT_ADRESS: {
          return { ...state, adress: action.adress }
        }
        case UDEPT_ADRESS: {
          return { ...state, adress: action.adress }
        }
        default: {
          return state;
        }
    }
}