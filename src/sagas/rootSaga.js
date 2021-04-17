import { takeEvery, takeLatest } from "redux-saga/effects";
import { articleActions } from "../slice/articleSlice";
import { boardActions } from "../slice/boardSlice";
import { registerArticleAsync } from "./articleSaga";
import { getBoardAsync } from "./boardSaga";

const { registerArticle } = articleActions;
const { getBoard } = boardActions;

export default function* rootWatcher() {
    yield takeLatest(registerArticle.type, registerArticleAsync);
    // yield takeEvery(getArticle.type, getArticle.Async);
    yield takeEvery(getBoard.type, getBoardAsync);
}