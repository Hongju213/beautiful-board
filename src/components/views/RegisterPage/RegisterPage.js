import React, { useState } from 'react'
import RegisterOrEdit from './Sections/RegisterOrEdit';
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../../slice/articleSlice";

const RegisterPage = () => {

    const dispatch = useDispatch();

    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const [IsForUpdate, setIsForUpdate] = useState("")

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };

    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    };

    const { count, createdTime, updatedTime } = useSelector((state) => ({
        count: state.articleReducers.count,
        createdTime: state.articleReducers.createdTime,
        updatedTime: "",
    }));

    const onSubmitArticle = (event) => {
        event.preventDefault();
            if (TitleValue === "" || TitleValue === null || TitleValue === undefined) { 
                alert("제목을 작성하십시오."); 
                return false; 
            }
            if ( ContentValue === "" || ContentValue === null || ContentValue === undefined ) { 
                alert("내용을 작성하십시오."); 
            return false; 
            }
        const article = { 
            type: '자유게시판', 
            title: TitleValue, 
            contents: ContentValue,
            count: count,
            createdTime: createdTime,
            updatedTime: updatedTime,
        };
        dispatch(articleActions.registerArticle(article));
    }

    return (
        <>
            <RegisterOrEdit
                titleValue={TitleValue}
                contentValue={ContentValue}
                handleTitleChange={onTitleChange}
                handleContentChange={onContentChange}
                handleSubmit={onSubmitArticle}
                updateRequest={IsForUpdate}
            />
        </>
    );
}

export default RegisterPage;