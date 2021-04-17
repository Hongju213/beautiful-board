import React from 'react'

const ArticlePage = ({
    match,
    location
}) => {

    return (
        <div>
            <h1>Article Id: {match.params.articleId}</h1>
        </div>
    )
}

export default ArticlePage
