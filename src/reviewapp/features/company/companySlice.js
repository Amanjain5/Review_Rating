import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cmpcreate_msg: "",
  loading: false,
  error: "",
  cmplist_msg: "",
  company_data: "",
  compDetails_msg: "",
  Company_details: "",
};


//--------------createCompnay Thunk API-------------//
export const createCompany = createAsyncThunk(
  "company/create",
  async (body, thunkAPI) => {
    const res = await axios.post("http://localhost:9000/company/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("CreateCompany API =", res);
    return res.data;
  }
); //console.log(createCompany)


//---------------getCompanies Thunk API-----------//
export const getCompanies = createAsyncThunk(
  "company/getCompanies",
  async (thunkAPI) => {
    console.log("GEt Companies slice");
    const resResult = await fetch("http://localhost:9000/company/list", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await resResult.json();
    console.log("Data :", data);
    if (data.success) {
      console.log("sucess", data);
      return data;
    } else {
      return thunkAPI.rejectWithValues(data);
    }
  }
);


//------------getCompanyDetails---------//
export const getCompanyDetails = createAsyncThunk(
  "company/getCompanyDetails",
  async (id, thunkAPI) => {
    const ressResult = await fetch(
      `http://localhost:9000/company/details/${id}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "context-type": "application/json",
        },
      }
    );
      let data = await ressResult.json();
    console.log("data", data);
    if (data.status) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  }
);


//------------Reducers-------------//
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    clearState: (state) => {
      state.cmpcreate_msg = "";
      state.error = "";
    },
  },
  extraReducers: {
    //----------------Createcompany reducer----------//
    [createCompany.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = "";
      state.cmpcreate_msg = "";
    },

    [createCompany.fulfilled]: (state, { payload }) => {
      console.log("CreComp Ful =", payload);
      state.loading = false;
      if (payload.error) {
        state.error = payload.error;
        state.cmpcreate_msg = "";
      } else {
        state.cmpcreate_msg = payload.message;
        state.error = "";
      }
    },

    [createCompany.rejected]: (state, { payload }) => {
      console.log("CreComp Reje =", payload);
      state.loading = false;
      state.error = payload.error;
      state.cmpcreate_msg = "";
    },

    //---------------CompanyList reducers------------//
    [getCompanies.pending]: (state, { payload }) => {
      state.loading = true;
    },

    [getCompanies.fulfilled]: (state, { payload }) => {
      console.log("getComp Ful =", payload);
      state.loading = false;
      if (payload.error) {
        state.error = payload.error;
        state.cmplist_msg = "";
        state.company_data = "";
      } else {
        state.cmplist_msg = payload.message;
        state.company_data = payload.companies;
        state.error = "";
      }
    },

    [getCompanies.rejected]: (state, { payload }) => {
      console.log("getComp reje =", payload);
      state.loading = false;
      state.error = payload.error;
      state.cmplist_msg = "";
      state.company_data = "";
    },

    //--------------getDetailsCompany reducers--------//
    [getCompanyDetails.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = "";
      state.compDetails_msg = "";
      state.Company_details = "";
    },

    [getCompanyDetails.fulfilled]: (state, { payload }) => {
      console.log("getCompDet Ful =", payload);
      state.loading = false;
      if (payload.error) {
        state.error = payload.error;
        state.compDetails_msg = "";
        state.Company_details = "";
      } else {
        state.compDetails_msg = payload.message;
        state.Company_details = payload.compDetails;
        state.error = "";
      }
    },

    [getCompanyDetails.rejected]: (state, { payload }) => {
      console.log("getCompDet reje =", payload);
      state.loading = false;
      state.error = payload.error;
      state.compDetails_msg = "";
      state.Company_details = "";
    },
  },
});

export default companySlice.reducer;
