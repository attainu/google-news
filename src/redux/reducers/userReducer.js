import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../actionTypes";

const initialState = {
  users: [
    {
      name: "akash",
      email: "akash@gmail.com",
      password: "akash123",
    },
    {
      name: "vinit",
      email: "vinit@gmail.com",
      password: "vinit123",
    },
  ],
  validUser: false,
  registered: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN: {
      const authToken = state.users.findIndex((user) => {
        return (
          user.email === payload.email && user.password === payload.password
        );
      });

      if (authToken !== -1) {
        return { ...state, validUser: true };
      } else {
        return { ...state, validUser: false };
      }
    }

    case SIGN_OUT:
      return { ...state, validUser: false };

    case SIGN_UP:
      return { ...state, users: [...state.users, payload], registered: true };

    default:
      return state;
  }
};

export default userReducer;
