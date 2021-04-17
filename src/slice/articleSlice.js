import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: { 
        no: 0, 
        title: "", 
        contents: "",
        count: 0,
        createdTime: new Date(Date.now()),
        updatedTime: new Date(Date.now()), 
    },
    reducers: {
        registerArticle: (state, article) => {
            console.log(article);
        },
        registerArticleAsync: (state, { payload }) => {
            console.log(payload);
            return {
                ...state,
                no: payload.no,
            };
        },
    },
});

export const articleReducers = articleSlice.reducer;
export const articleActions = articleSlice.actions;