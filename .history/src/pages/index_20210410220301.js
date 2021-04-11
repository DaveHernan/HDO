import React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// ---------- Themes colors ----------
import "../themes/green.scss"
import "../themes/orange.scss"

// ---------- Components ----------
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import QuoteUs from "../components/quote"
import Feature from "../components/feature"
import News from "../components/news"
import Contact from "../components/Contact/contact"

const IndexPage = ({ data }) => {
  const { fullTitle, description, about } = data.site.siteMetadata


  
  return (
    <div>
   <Hero title={fullTitle} description={description} />
      
      <Feature
        title="Featured Projects"
        projects={data.allProjectsJson.edges}
      />
      
      <Services />
    
     
      <About about={about} />
      <News /> 
       <QuoteUs />
    <Contact/>


    </div>
  )
}

export const projectsQuery = graphql`
  query FeaturedProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          slug
          category
          description
          img {
            src
            orig
            author
          }
          completionDate
          amount
          duration
          owner
          address
          featured
        }
      }
    }
    site {
      siteMetadata {
        fullTitle
        description
        about
      }
    }
  }
`
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/api/v1', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: 'USERNAME',
    pass: 'PASSWORD'
  }
});

var mailOptions = {
  from: data.email,
  to: 'ENTER_YOUR_EMAIL',
  subject: 'ENTER_YOUR_SUBJECT',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

export default IndexPage
