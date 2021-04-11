import React from "react"


import "./newsCard.scss"

const NewsCard = ({ news }) => {
  const { title, date, about, img } = news
  return (
    <article className="news-card">
      <section className="news-thumbnail">
        
        <img src={img} alt={title} />
      </section>
      <section className="news-content">
          <h4 className="news-title">{title}</h4>
        <section className="news-date">
          <p>{date}</p>
        </section>
        <p className="news-text">{about}</p>
      </section>
    </article>
  )
}

export default NewsCard
