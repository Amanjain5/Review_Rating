import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  review_msg: "",
  loading: "",
  error: "",
};

export const companyReview = createAsyncThunk(
  "company/addCompanyReview",
  async (body, thunkAPI) => {
    const res = await axios.post(
      "http://localhost:9000/company/company_review",
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("hire", res);
    return res.data;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    clearCompanyState: (state) => {
      state.cmplist_msg = "";
      state.cmpcreate_msg = "";
      state.companydata = "";
      state.loading = "false";
      state.error = "";
      return state;
    },
  },
  extraReducers: {
    [companyReview.pending]: (state) => {
      state.loading = "true";
    },

    [companyReview.fulfilled]: (state, { payload }) => {
      console.log("Mypylod", payload);
      state.loading = "false";
      if (payload.success) {
        state.review_msg = payload.message;
      } else {
        state.error = payload.message;
      }
    },

    [companyReview.rejected]: (state, { payload }) => {
      state.loading = "false";
      console.log("rejected", payload);
      state.error = payload.message;
    },
  },
});

export default reviewSlice.reducer;
export const {clearCompanyState} = reviewSlice.actions;
