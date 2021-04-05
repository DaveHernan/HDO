import React from "react"
import { Link } from "gatsby"
import ClockSVG from "../assets/svg/clock.svg"
import LinkSVG from "../assets/svg/link.svg"
import "./newsCard.scss"

const NewsCard = ({ news }) => {
  const { title, date, about, img, slug } = news
  return (
    <article className="news-card">
      <section className="news-thumbnail">
          <section className="news-thumbnail-hover">
          </section>
        <img src={img} alt={title} />
      </section>
      <section className="news-content">
        <Link to={`/news/${slug}`}>
          <h4 className="news-title">{title}</h4>
        </Link>
        <section className="news-date">
          <p>{date}</p>
        </section>
        <p className="news-text">{about}</p>
      </section>
    </article>
  )
}

export default NewsCard
