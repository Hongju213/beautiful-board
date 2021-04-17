import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import BoardList from './Sections/BoardList'
import { Button } from 'antd'
import Title from 'antd/lib/typography/Title'
import { boardActions } from '../../../slice/boardSlice'
import { useSelector } from 'react-redux'

function BoardPage({history}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(boardActions.getBoard())
    }, [dispatch]);
    
    const board = useSelector((state) => state.boardReducers.board);

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }} >
            <div>
                <Title>Board Title</Title>
            </div>
            <div>
                <Link to="/register">
                    <Button type="primary">New Post</Button>
                </Link>
            </div>
            <div>
                <BoardList board={board} history={history} />
            </div>
        </div>
    )
}

export default BoardPage
