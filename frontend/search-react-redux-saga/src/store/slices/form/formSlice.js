import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: "",
  isLoading: false,
  isError: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    clearInput: (state) => {
      state.input = "";
    },
    setFormLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setFormError: (state, action) => {
        state.isError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase('setFormLoading', (state, action) => {
      state.isLoading = action.formIsLoading;
    })
    builder.addCase('setFormLoadingError', (state, action) => {
      state.isError = action.formIsLoadingError
    })
  },
})

export const { setInput, clearInput, setFormLoading, setFormError } = formSlice.actions;
export default formSlice.reducer;

export const formInputStatus = state => state.formSlice.input;
export const formLoadingStatus = state => state.formSlice.isLoading;