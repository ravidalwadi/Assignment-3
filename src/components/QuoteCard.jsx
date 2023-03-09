import React from 'react'

const QuoteCard = (props) => {
  console.log(props.data)

  let {content,author} = props.data
  return (
    <div className="cards newscards">
        <div className="newscard">
             <h1>{content}</h1>
             <h3>-{author}</h3>
        </div>
       
    </div>
  )
}

export default QuoteCard