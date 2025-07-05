import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchAll",
  async (params = { pageNumber: 1, pageSize: 12 }) => {
    const { pageNumber, pageSize } = params;

    const response = await axios.get(
      `https://test.newulmmed.com/api/Doctor/GetAllDoctors?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    return {
      doctors: response.data.data,
      totalPages: response.data.numberOfPages,
      currentPage: response.data.pageNumber,
    };
  }
);

export const fetchDoctorsBySpecialization = createAsyncThunk(
  "doctors/fetchBySpecialization",
  async (specializationId) => {
    const response = await axios.get(
      `https://test.newulmmed.com/api/Doctor/GetAllDoctors?specializationId=${specializationId}`
    );
    return response.data.data;
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload.doctors;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchDoctorsBySpecialization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorsBySpecialization.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
        state.totalPages = 1;
        state.currentPage = 1;
      })
      .addCase(fetchDoctorsBySpecialization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;
