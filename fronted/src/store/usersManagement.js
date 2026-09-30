import { use, useReducer } from "react";
import { users } from "../../../data.js";
import { create } from "zustand";
import { redux } from "zustand/middleware";

const initialState = {
  users,
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        users: users.map((u) =>
          u.name === action.payload ? { ...u, isAuthenticated: true } : u,
        ),
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        users: users.map((u) =>
          u.name === action.payload ? { ...u, isAuthenticated: false } : u,
        ),
      };
    }
    default:
      return state;
  }
};

export const useUsers = create(redux(usersReducer, initialState));
