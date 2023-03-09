import React from 'react'

const NewsCard = (props) => {
    let {title,publishedAt,content} = props.data

    return (
        <div className="cards newscards">
            <div className="newscard">
                <h1>{title}</h1>
                <h3>{publishedAt}</h3>
                <p>{content}</p>
            </div>
        </div>
  )
}

export default NewsCard