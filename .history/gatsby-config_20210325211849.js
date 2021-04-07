module.exports = {
  siteMetadata: {
    title: `HDO Builders and Design`,
    fullTitle: `Building Trust with Quality work`,
    description: ``,
    about: `HDO Builders and Design began in the
    Pangasinan area in February 21, 2017 when
    Engr. Hernan Diego Ochoco, who had worked
    in the residental construction business for
    several years began his own company,
    designing and building many parts of Manila
    and South Luzon. For the next nine months,
    the company grew slowly, working mostly on
    small scale residential projects while gaining a
    reputation for quality services and reliability.`,
    email: `info@hdobuildinganddesign.com`,
    social: {
      facebook: `https://facebook.com`,
      twitter: `https://twitter.com`,
      instagram: `https://instagram.com`,
      linkedin: `https://linkedin.com`,
    },
    contact: {
      mobile: `(+63) 907 032 3711`,
      telephone: ``,
    },
    address: `Zone 7 Bobonan Asingan Pangasinan 2439`,
    satellite: 'Sawalag Dasmarinas, Cavite 4114',
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.590531801578!2d120.92931831483857!3d14.450745589898093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d282c1782f4f%3A0x62e247641b50bd21!2sBermuda%20Country%20Subdivision%2C%20Bacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1566970336076!5m2!1sen!2sph`,
    opening: {
      day: `Monday - Friday`,
      hour: `8:00am - 5:00pm`,
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities provide employees with the ability to
      work on projects of all sizes and types and receive amazing
      benefits in return. They include but are in no way limited to:`,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        `Employee development programs`,
      ],
    },

    author: {
      name: `Mark Dino Pelonia`,
      position: `Web Developer`,
      email: `markdinopelonia447@gmail.com`,
      contact: `(+63) 946 290 9678`,
      website: `https://markdino.github.io/portfolio`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `##1a1e2a`,
        theme_color: `##1a1e2a`,
        display: `minimal-ui`,
        icon: `src/images/brand-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
