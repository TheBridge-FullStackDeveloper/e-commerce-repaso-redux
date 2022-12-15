import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(like.fulfilled,(state,action)=>{
        state.products = state.products.map( product =>{
            if(product._id == action.payload._id){
                product = action.payload
            }
            return product
        })
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      return await productsService.getProducts();
    } catch (error) {
      console.error(error);
    }
  }
);

export const like = createAsyncThunk("products/like", async (_id) => {
  try {
    return await productsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});

export default productsSlice.reducer;
