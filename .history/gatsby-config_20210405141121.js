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
      telephone: `(+63) 915 312 3148`,
    },
    address: `Zone 7 Bobonan Asingan Pangasinan 2439 `,
    satellite: 'Sawalag Dasmarinas, Cavite 4114',
    map: `https://www.google.ca/maps/dir/16.0674391,120.6330729/Bobonan,+Asingan,+Pangasinan,+Philippines/@16.0343834,120.6328583,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33911660933af3d9:0x45cb07d70e42f07d!2m2!1d120.6415611!2d16.0339291`,
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
      name: `Dave Hernan`,
      position: `Web Developer`,
      email: `khristiandavehernan@gmail.com`,
      contact: `780 587 9366`,
      website: `https://60582165b16f08a485aa6fba--hiredave.netlify.app/`,
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
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
