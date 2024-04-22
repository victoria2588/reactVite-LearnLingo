import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

export const register = createAsyncThunk(
  "auth/register",
  async ({ value }, thunkAPI) => {
    const { name, email, password } = value;
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      await updateProfile(user, {
        displayName: name,
      });

      return {
        email: user.email,
        accessToken: user.accessToken,
        id: user.uid,
        name: user.displayName,
      };
    } catch (error) {
      toast.error("Please check your data and try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logining = createAsyncThunk(
  "auth/login",
  async ({ value }, thunkAPI) => {
    const { email, password } = value;
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      return {
        email: user.email,
        accessToken: user.accessToken,
        id: user.uid,
        name: user.displayName,
      };
    } catch (error) {
      toast.error("Please check your data and try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    const auth = getAuth();

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            resolve({
              name: user.displayName,
              email: user.email,
              token: user.accessToken,
              id: user.uid,
            });
          } else {
            reject("Unable to fetch user");
          }
        });
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);