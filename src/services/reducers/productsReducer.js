import products from "../../utils/products";
import {
    GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
    POST_ORDER_SUCCESS,
    GET_ORDERS_SUCCESS,
    ADD_MORE_COUNT,
    REDUCE_COUNT,
    ADD_PRODUCT_COPPARISON,
    ADD_PRODUCT_LIKE,
    DELETE_PRODUCT_LIKE
} from "../actions/products";

const initialState= {
    products: products,
    order: [],
    orders: [],
    copparison: [],
    likes: [],
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS: {
        return { ...state, };
      }
      case ADD_PRODUCT_SUCCESS: {
        return { ...state, order: [...state.order, action.item] }
      }
      case DELETE_PRODUCT_SUCCESS: {
        return { ...state, order: state.order.filter((item) => item._id !== action.id) }
      }
      case POST_ORDER_SUCCESS: {
        return { ...state, orders: [...state.orders, action.order] };
      }
      case GET_ORDERS_SUCCESS: {
        return { ...state, orders: [action.orders] };
      }
      case ADD_MORE_COUNT: {
        return { ...state, order: state.order.map(el => (el._id === action.id ? { ...el, count: action.count + 1} : el)) }
      }
      case REDUCE_COUNT: {
        return { ...state, order: state.order.map(el => (el._id === action.id ? { ...el, count: action.count - 1} : el)) }
      }
      case ADD_PRODUCT_COPPARISON: {
        return { ...state, copparison: state.copparison.map(el => (el.category === action.item.category ? { ...el, items: [...state.copparison.items, action.item]} : el)) }
      }
      case ADD_PRODUCT_LIKE: {
        return { ...state, likes: [...state.likes, action.item] }
      }
      case DELETE_PRODUCT_LIKE: {
        return { ...state, likes: state.likes.filter((item) => item.name !== action.name) }
      }
      default: {
        return state;
      }
    }
};