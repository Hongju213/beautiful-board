import axios from "axios";
import { getContext } from "redux-saga/effects";
import history from "../utils/history"

export function* registerArticleAsync(action) {
    const data = action.payload;
    const response = yield axios.post(`http://localhost:8080/api/insert`, data)
    
    yield alert("저장되었습니다");
    
    history.push(`/article/${response.data.no}`, response.data.no);

    console.log(response);
}