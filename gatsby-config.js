/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`, // this plugin loads files from the filesystem
      options: {
        name: `blog`, 
        path: `${__dirname}/blog` // load in files from /blog
      }
    },

    `gatsby-transformer-remark`, // this plugin parses markdown files that we loaded in

    `gatsby-plugin-netlify-cms` // this plugin will create a cms at /admin path
  ],
}
