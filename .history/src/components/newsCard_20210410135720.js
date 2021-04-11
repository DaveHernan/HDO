import React from "react"


import "./newsCard.scss"

const NewsCard = ({ news }) => {
  const { title, date, about, img } = news
  return (
    <article className="news-card">
      <section className="news-content">
          <h4 className="news-title">{title}</h4>
        <section className="news-date">
          <p>{date}</p>
        </section>
        <div>
        <p className="news-text">{about}</p>
        </div>
      </section>
    </article>
  )
}

export default NewsCard
