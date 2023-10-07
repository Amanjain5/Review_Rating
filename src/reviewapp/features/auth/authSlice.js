import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  message: "",
  user: "",
  token: "",
  loading: false,
  error: "",
  forget_message: "",
};

// -----------Login API Integration---------//
export const signInUser = createAsyncThunk(
  "user/SignInUser",
  async (body, thunkAPI) => {
    const resResult = await fetch("http://localhost:9000/user/userLogin", {
      method: "POST",
      headers: {
        Accept: "application/json", //image ni ja ri ho jab ye use karo or ja rahi ho jab multipart form data
        "Content-Type": "application/json", //post man me header dekh lo
      },
      body: JSON.stringify(body), //serialization
    });

    let data = await resResult.json(); //desearalization
    if (data.success) {
      //ye error message ke liye he
      console.log("***", data.success, data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    } //yaha tak
  }
);
//------------Login API Integration END--------//


//------------Signup API Integration--------------//
export const signupuser = createAsyncThunk(
  "user/SignUpUser",
  async (body, thunkAPI) => {
    console.log("sign thunk:", body);
    const res = await axios.post(
      "http://localhost:9000/user/registeruser",
      body,
      {
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
      }
    );

    if (res.data.success) {
      console.log("**", res.data.success);
      return res.data;
    } else {
      return thunkAPI.rejectWithValue(res.data);
    }
  }
);
//-------------------Signup API Integration END--------------//


//-------Forgot Password API Integration------------//
export const forgotPasswordApi = createAsyncThunk(
  "user/ForgotPassword",
  async (body, thunkAPI) => {
    const resultData = await fetch(
      "http://localhost:9000/user/send-reset-password-email",
      {
        method: "Post",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log("resData",resultData);

    let data = await resultData.json(); //desearalization
    if (data.success) {
      //ye error message ke liye he
      console.log("***", data.success, data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    } //
  }
);
//-----------Forgot Password API Integration End---------//


//--------------Reset Password API Integration--------------//
export const resetPasswordApi = createAsyncThunk(
  "user/resetPassword",
  async (body, thunkAPI) => {
    const resetResultData = await axios.post(
      "http://localhost:9000/user/rest-password",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (resetResultData.data.success) {
      console.log("**", resetResultData.data.success);
      return resetResultData.data;
    } else {
      return thunkAPI.rejectWithValue(resetResultData.data);
    }
  }
);
console.log("res", resetPasswordApi);
//--------------------Reset Password API Integration End------------//


//---------Reducer & Action starting--------//
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = "";
      state.message = "";
    },
  },
  extraReducers: {
    //----------Promise ke 3 state handel kare he --------------//
    //----------------LoginAPI Reducers/action start---------------//
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log("payload fullfilled:", payload);
      console.log(typeof payload);
      console.log("__", payload.success);
      if (payload.success) {
        console.log("inside payload success");
        state.message = payload.message;
        state.token = payload.token;
        state.user = payload.userData;
        localStorage.setItem("message", payload.message);
        localStorage.setItem("user", JSON.stringify(payload.userData));
        localStorage.setItem("token", payload.token);
        console.log("successsful");
      } else {
        state.error = payload.error;
      }
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
      state.message = "";
    }, //----------------LoginAPI Reducer/action END---------------------//


    //------------SignupAPI Reducer/action start-------------------//
    [signupuser.pending]: (state, { payload }) => {
      // state.payload = payload.payload
      state.loading = true;
      state.message = "";
      state.error = "";
    },
    [signupuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      console.log("success", payload.message);
      if (payload.error) {
        console.log("fullfil error");
        state.error = payload.error;
        state.message = "";
      } else {
        state.message = payload.message;
        state.error = "";
      }
    },
    [signupuser.rejected]: (state, { payload }) => {
      state.loading = true;
      state.error = payload.error;
      state.message = "";
    },
    //-------------SignupAPI Reducer END------------//


    //-----------Reset Password Reducer----------//
    [resetPasswordApi.pending]: (state, { payload }) => {
      state.loading = true;
      // state.error = "";
      // state.msg = "";
    },
    [resetPasswordApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = payload.data.message;
      state.error = "";
    },
    [resetPasswordApi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = "";
      state.error = payload.error.message;
    },
    //--------------Reset password reducer end------------//


    //--------------Forgot Password Reducer----------//
    [forgotPasswordApi.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [forgotPasswordApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.forget_message = payload.data.message;
    },
    [forgotPasswordApi.rejected]: (state, payload ) => {
      state.loading = false;
      state.error = payload.error.message;
    },
  },
});

export default authSlice.reducer;
export const { clearState } = authSlice.actions;
