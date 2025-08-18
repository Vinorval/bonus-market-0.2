export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';

export const ADD_MORE_COUNT = 'ADD_MORE_COUNT';
export const REDUCE_COUNT = 'REDUCE_COUNT';

export const ADD_PRODUCT_COPPARISON = 'ADD_PRODUCT_COPPARISON';

export const ADD_PRODUCT_LIKE = 'ADD_PRODUCT_LIKE';
export const DELETE_PRODUCT_LIKE = 'DELETE_PRODUCT_LIKE';

export const getProductSuccess = () => {
    return {
      type: GET_PRODUCTS_SUCCESS,
    };
};

export const addProductSuccess = (item) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    item: item,
  }
}

export const deleteProductSuccess = (name) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    name: name,
  }
}

export const getOrdersSuccess = (orders) => {
    return {
      type: GET_ORDERS_SUCCESS,
      orders: orders
    };
};

export const postOrderSuccess = (order) => {
    return {
      type: POST_ORDER_SUCCESS,
      order: order
    };
};

export const addMoreCount = (count, name) => {
  return {
    type: ADD_MORE_COUNT,
    count,
    name
  }
};

export const reduceCount = (count, name) => {
  return {
    type: REDUCE_COUNT,
    count,
    name
  }
};

export const addProductCopparison = (item) => {
  return {
    type: ADD_PRODUCT_COPPARISON,
    item: item,
  }
};

export const addProductLike = (item) => {
  return {
    type: ADD_PRODUCT_LIKE,
    item: item,
  }
};

export const deleteProductLike = (name) => {
  return {
    type: DELETE_PRODUCT_LIKE,
    name: name,
  }
};