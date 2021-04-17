import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function BoardList(props, history) {
    return (
        <>
        <div> 
            <table>
                <colgroup> 
                    <col width="10%" /> 
                    <col width="10%" /> 
                    <col width="40%" /> 
                    <col width="40%" /> 
                </colgroup>
                <thead>
                    <tr> 
                        <th>번호</th> 
                        <th>제목</th> 
                        <th>조회수</th> 
                    </tr>
                </thead>
                <tbody>
                    {props.board.map((board, index) => ( 
                        <tr key={index}>
                            <td>{board.no}</td> 
                            <Link to={`/article/${board.no}`}>
                                <td>{board.title}</td> 
                            </Link>
                            <td>{board.count}</td> 
                        </tr> 
                    ))}
                </tbody>
            </table> 
        </div>
        </>
    )
}

export default BoardList
