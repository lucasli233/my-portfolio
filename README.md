<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <!-- <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" /> -->
  </a>
</p>
<h1 align="center">
  Gatsby's DEVS Workshop starter
</h1>

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## Part 1: Creating a personal portfolio

### Installing Gatsby

First, we need to install Gatsby by running the following command in your terminal:

```
npm install -g gatsby-cli
```
### Creating a blank application

Next, we want to create a blank application by running the following command inside the directory where you want the app to live:

```
gatsby new my-portfolio https://github.com/devsuoa/devs-gatsby-starter.git
```
In this case, "my-portfolio" will be the name of our application; you can call it whatever you like. Note: if Gatsby asks you which package manager you would like to use, choose **npm**

Let's run our application and see what it looks like by running these commands:

```
cd my-portfolio
npm run start
```
If you see a blank page saying "Hello World", then you have successfully created a blank application to work on.

### Exploring our application files

Inside your application, you will find a "src" folder. All of the code for your website will live inside this folder. There will also be a folder called "pages" inside of src (i.e. src/pages). The files inside pages will act as the actual, navigable web-pages of your application. E.g., if you had a file called **blog**.js, you could open it by going to localhost:8000/**blog**

There will be an existing page file called **index.js**. This file is the entry point of our application, i.e. the home page. 

Let's have a quick look at the contents of index.js: 

```
import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}
```
The first line is an import statement stating that our application requires React. In React, web-pages take the form of functions, and these functions return an HTML element representing that page. In this file, we have a function called **Home** to represent the Home page, and it returns a single div element with the text "Hello world!"

### Creating pages

A personal portfolio usually contains the same information as your C.V., but it gives you the ability to go into greater depth. With that in mind, our portfolio will have the following pages:

* Home - Talk about yourself and your interests, and give a short summary of what you've accomplished
* Projects - Talk about any personal projects you've completed in as much detail as you'd like. 
* Education - Summarise your education so far
* Experience - Go over all relevant experience, and go into detail about what you accomplished
* Blog

Before we make any of the other pages, we're going to make the Home page. If you take a look at the design, you'll notice there's a header with links to all the other pages. This is something that we'll have on all our pages. To avoid repeating code, we can write it once and use it multiple times using **components**. Create a folder called components inside src (i.e. src/components), and inside of it create a file called **header.js**. The contents of that file will be:

```
import React from "react"
import { Link  } from "gatsby";
import "../styles.css"

export default function Header() {
    return (
            <header>
                <p className="name">John Smith</p>
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            <header>
    )
}
```
You will also need to create a file called **styles.css** inside the src folder (NOT inside components), and add the following styling:

```
*, body {
    font-family: Arial, Helvetica, sans-serif;
    color: #707070;
}

header {
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: center;
}

.name {
    padding: 0;
    font-size: 36px;
    font-weight: 700;
    padding-left: 20px;
}

.navigation {
    height: auto;
    margin: 0 0 0 auto;
}

.navigation > a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    margin: 10px;
    font-size: 20px;
    font-weight: 100;
}
```
This new Header component is now ready to be used in our Home page. Replace the contents of the index.js file with the following:

```
import React from "react";

import Header from "../components/header"
import "../styles.css"

export default function Home() {
    return (
        <div>
            <Header />

            <div className="container">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas elit a tellus porttitor,
                id finibus ligula pulvinar. Phasellus nec posuere nisl. Vivamus ac turpis a velit vestibulum
                lacinia eget ac dui. Nunc efficitur libero tortor, quis aliquam nunc tristique eu. In egestas
                lectus a porta imperdie</p>

                <h1>My Interests</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas elit a tellus porttitor,
                id finibus ligula pulvinar. Phasellus nec posuere nisl. Vivamus ac turpis a velit vestibulum
                lacinia eget ac dui. Nunc efficitur libero tortor, quis aliquam nunc tristique eu. In egestas
                lectus a porta imperdie</p>
            </div>
        <div/>
    )
}
```
And add the following styling to styles.css:

```
.container {
    width: 65vw;
    margin: 0 auto;
}

.container > h1 {
    margin-top: 50px;
}

.container > p {
    font-size: 18px;
}
```
If you take a look at the app in the browser, you'll see a home page with a header on the top, and some text in the body. Of course, for your real portfolio, you would replace the dummy text with real information!

To create the other pages, we'll simply duplicate the index.js file, rename it, and change the text content. For example, the Projects page will look like:

*projects.js:*
```
import React from "react";

import Header from "../components/header"
import "../styles.css"

export default function Projects() {
    return (
        <div>
            <Header />

            <div className="container">
                <h1>My Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas elit a tellus porttitor,
                id finibus ligula pulvinar. Phasellus nec posuere nisl. Vivamus ac turpis a velit vestibulum
                lacinia eget ac dui. Nunc efficitur libero tortor, quis aliquam nunc tristique eu. In egestas
                lectus a porta imperdie</p>
            </div>
        <div/>
    )
}
```
In a similar manner, go ahead and create the remaining pages. For your real portfolio, you would modify each page's layout to suit the information on that page. For simplicity's sake, all our pages look similar, but you can choose to style yours however you like!

## Part 2: Creating a blog

### Uploading to Github

Run on terminal
```
  git add -A
  git commit -m "Made personal website"
```

Then make a repo on github

Run on terminal
```
git remote add origin <url>
git push -u origin master
```

### Plugins

Gatsby plugins are Node.js packages that implement Gatsby APIs. These plugins are defined in the `gatsby-config.js` file. 

Plugins are either listed as 
```
  { 
    resolve: <plugin_name>
    options: {
      option1: ...
    }
  }
```

**OR** if no options are needed, then the plugin name will suffice

Looking into the `gatsby-config.js` file, we find:

1. `gatsby-source-filesystem`: This plugin will load all the files specified in the path i.e. `/blog` option into File nodes. 
2. `gatsby-transformer-remark`: This plugin will parse markdown type File Nodes into MarkdownRemark nodes. They are easily queryable in this form.
3. `gatsby-plugin-netlify-cms`: This plugin will automatically create the cms side of the website. 

Note: these plugins were already installed when we ran `gatsby new`. You can find more plugins to add at https://www.gatsbyjs.org/plugins/


### Netlify CMS Configuration

Configuration for netlify cms is found in the `config.yml` file at `static/admin`. 

Looking into the `config.yml` file we find: 

```yml
backend:
  name: github
  repo: <github_name>/<repo_name>
```
The backend option specifies how to access the content for your site, including authentication. i.e. where should netlify cms look for/post blog posts. In this case, netlify cms will be uploading our blog posts to the github repo.

```yml
media_folder: static/assets
public_folder: /assets
```
The media_folder option specifies the folder path where uploaded files should be saved. e.g. images that are uploaded will be saved in the `static/assets` folder.

The public_folder option specifies the folder path where the files uploaded by the media library will be accessed, relative to the base of the built site. e.g. gatsby will move images to the `/assets` folder when the website is built.

Now, we must configure the actual blog part. We use the `collections` option to specify different content types. e.g. a blog or events. 

```yml
collections:
  - name: blog
    label: Blog
    folder: blog
    create: true
    fields:
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: author, label: Author }
      - { name: body, label: Body, widget: markdown }
```

Looking at the fields: 

- `name` is a unique identifier for a collection.
- `label` is the string displayed on the CMS page for this collection
- `folder` specifies what folder to save our blog posts to. In this case `/blog`
- `create` specifies whether users are allowed to create new blog posts
- `fields` include the format of the blog post. In this case, we have a date, title, author and body. Note that if `widget` is not specified, the type defaults to string. Also note that `body` contains the actual markdown of the blog post. The rest is just frontmatter (i.e. metadata of the post)

More documentation of configuration options are found here: https://www.netlifycms.org/docs/configuration-options/

#### **`/static/admin/config.yml`**
``` yml
backend:
  name: github
  repo: <github_name>/<repo_name>

media_folder: static/assets
public_folder: /assets

collections:
  - name: blog
    label: Blog
    folder: blog
    create: true
    fields:
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: author, label: Author }
      - { name: body, label: Body, widget: markdown }
```

### Running the CMS

Run on terminal
`gatsby develop` or `npm run start`

Go to http://localhost:8000/admin/ and login with github.

Click on **New Blog** and fill out the fields and click **Publish**.

This will publish the created blog post as a markdown file to github. To retrieve this blog post, run `git pull` on terminal.

So far, we have a way of creating markdown posts in our repository via an interface. Now we focus on displaying our blog posts. 

### Querying Blog Posts with GraphQL. 

This page will contain all of our blog posts. We will do this by first finding all the markdown posts in `/blog`, parsing them and mapping them. 

Thankfully, majority of the work is done by the gatsby plugins we installed earlier (gatsby-transformer-remark). All we have to do is write a GraphQL query to retrieve the parsed markdown. 

GraphQL is a query language used to retrieve data from API's. 

Gatsby allows GraphQL to be used to retrieve any data related to the website e.g. outputted from plugins.  

As explained before, the `gatsby-transformer-remark` plugin creates a MarkdownRemark Node for each of the markdown files in the `/blog` folder. 

A GraphQL query looks like this: 
```
{
  site {
    siteMetadata {
      title
    }
  }
}
```
The important thing is that the response will be an javascript object containing keys corresponding to schema you queried for.  

In this case, the response may look like this : 

```
{
  "site": {
    "siteMetadata": {
      "title": "A Gatsby site!"
    }
  }
}
```

We can construct GraphQL queries easily by using the GraphQL client that gatsby provides when we run `gatsby develop`. 

Go to http://localhost:8000/___graphql

Notice that clicking on the types on the left side, constructs a query for you. 

To query for our markdown blog posts, we construct the following GraphQL query: 

```
allMarkdownRemark {
  nodes {
    frontmatter {
      author
      date
      title
    }
    html
    id
  }
}
```

Executing the query may return the following response: 

```
{
  "data": {
    "allMarkdownRemark": {
      "nodes": [
        {
          "frontmatter": {
            "author": "Alan",
            "date": "2020-08-07T23:39:01.559Z",
            "title": "My First Blog Post"
          },
          "html": "<p>This is a blog post</p>",
          "id": "f144c37b-ac1f-5343-8e28-cb5a99421e2c"
        }
      ]
    }
  },
  "extensions": {}
}
```

### Creating a Blog page

Gatsby's integration with GraphQL allows working with GraphQL extremely easy. Gatsby will execute exported graphql queries and inject them into the react component as a prop.

First create a new file `blog.js` in `src/pages`

In this file we import the following: 
```js
import React from "react"
import { Link, graphql } from "gatsby"
```

and type our query in the file: 

```js
export const pageQuery = graphql` {
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          title
          path
        }
        excerpt
        id
      }
    }
  }
`
```

and our blog component as follows: Note the { data } prop that is passed in. 

```js
export default function Blog({ data }) {
    return (
    <section>
        {data.allMarkdownRemark.nodes
            .map(post => {
                return (
                    <article key={post.id}>
                        <h1>
                            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <h2>{post.frontmatter.date}</h2>
                        <p>{post.excerpt}</p>
                    </article>
                )
            })
        }
    </section>
    )
}
```

Clicking on the title, leads to a 404 page. This is because we havent created a page for each blog post. 

### Creating a page for each blog post

How do we create a page for each blog post? Clearly, we cant manually create a new js file in `/pages` whenever we get a new blog post.

What we really need is a way to programatically create pages when gatsby is building the website. We can achieve what we want by using the `gatsby-node.js file`. 

One of the functions passed as an action to `exports.createPages()` is `createPage()`. This will allow us to create pages at build time! 

The createPage() function takes 3 parameters we care about :

`path`: The path of the page that is being created i.e. localhost:8000/**path**

`component`: A react component that will display our blog post i.e. a template

`context`: Information passed into the react component. We could potentially pass in the entire blog post info right here, but we are opting not to do this and instead just pass the post id. 


#### Lets create a blog post component !
First create a new js file `blog-post.js` at `src/templates`

Next, write the component assuming a blog post id is passed into the graphQL query.

The following imports : 

```js
import React from 'react'
import { graphql } from "gatsby"
```

The following gQL query (note the parameter $id passed)
```js
export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`
```

And the Component, note that the markdown parser automatically created html for us!

```js
export default function Template({ data }) {
    const post = data.markdownRemark
    
    return (
        <section>
            <span>
                <h1> {post.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <h2>
                    {`${post.frontmatter.author} - ${post.frontmatter.date}`}
                </h2>
            </span>
        </section>
    )
}
```

Sweet! Now we move on to createPages in `gatsby-node.js`

#### Creating blog posts in gatsby-node.js

First, inside the exports.createPages method, we query for the paths and id's of all blog posts

```js
const result = await graphql(`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
        }
        id
      }
    }
  }
`)
```

then we need to get the absolute path of the blog-post.js template

we write
```js
const template = path.resolve(`src/templates/blog-post.js`)
```

next, we create the page for each node (blog post)!
```js
result.data.allMarkdownRemark.nodes.forEach(node => {
  createPage({
    path: node.frontmatter.path,
    component: template,
    context: {
      id: node.id,
    }, // additional data can be passed via context
  })
})
```

The full gatsby-node.js is as follows: 

```js

// Create pages programmatically

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // get the blog posts using graphQL
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
          id
        }
      }
    }
  `)
  
  // get the blog post template
  const template = path.resolve(`src/templates/blog-post.js`)

  // use the createPage() method to create pages.
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        id: node.id,
      }, // additional data can be passed via context
    })
  })
}
```
Lets see our blog post!

Run `gatsby develop` or `npm start` and go to the correct path.



# Other Stuff
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
