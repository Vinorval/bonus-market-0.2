export const REGISTRATION = 'REGISTRATION';
export const AUTHORIZATION = 'AUTHORIZATION';
export const EXIT = 'EXIT';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const PUT_ADRESS = 'PUT_ADRESS';
export const UDEPT_ADRESS = 'UDEPT_ADRESS';

export const loginSuccess = (email, password,) => {
  return {
    type: AUTHORIZATION,
    email: email,
    password: password,
  }
}

export const registrationSuccess = (surname, email, password) => {
  return {
    type: REGISTRATION,
    surname: surname,
    email: email,
    password: password,
  };
};

export const resetPasswordSuccess = (email) => {
  return {
    type: RESET_PASSWORD,
    email: email,
  }
}

export const exitSuccess = () => {
  return {
    type: EXIT,
  }
}

export const getUserSuccess = (surname, name, email, phone, password, adress) => {
  return {
    type: GET_USER,
    surname: surname,
    name: name,
    email: email,
    phone: phone,
    password: password,
    adress: adress,
  }
}

export const updateUserSuccess = (surname, name, email, phone, password) => {
  return {
    type: UPDATE_USER,
    surname: surname,
    name: name,
    email: email,
    phone: phone,
    password: password,
  }
}

export const addNewAdressSuccess = (adress) => {
  return {
    type: PUT_ADRESS,
    adress: adress,
  }
}

export const udeptAdressSuccess = (adress) => {
  return {
    type: UDEPT_ADRESS,
    adress: adress,
  }
}
