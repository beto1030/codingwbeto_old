---
title: Gatsby blog tutorial
date: "2015-09-19T22:12:03.284Z"
description: "Tutorial on how to create this gatsby blog"
template: blogPost
slug: gatsby-blog-tutorial 
---
In this tutorial we will go over how to create a blog using gatsby.

### Table of Contents
1. [Installation](#installation)
2. [Run a gatsby preview server](#run-a-gatsby-preview-server)
3. [Edit src/pages/index.js](#edit-src/pages/indexjs)
4. [Edit one of the blog posts](#edit-one-of-the-blog-posts)
5. [Understand how gatsby creates our blog posts](#understand-how-gatsby-creates-our-blog-posts)
6. [Test our understanding how gatsby creates our blog posts](#test-our-understanding-how-gatsby-creates-our-blog-posts)
7. [Connect a headless cms](#connect-a-headless-cms)
8. [Use Github to host your blog for free](#use-Github-to-host-your-blog-for-free)

### Installation<a name="installation"></a> 

Use a curl command to install <a href="https://brew.sh/" target="_blank">Homebrew</a> inside the /bin/bash directory <br/>

###### Open your terminal and run
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

###### Use brew to install Node
```
brew install node 
```
###### Use node to install gatsby
```
npm install gatsby
```

###### Use npm to initialize gatsby project

```
npm init gatsby
```
Change into your project directory
```
cd gatsby-starter-blog
```

This is what your project should look like
```
my-gatsby-site/
▸ node_modules/
▸ public/
▸ src/
  gatsby-config.js
  package-lock.json
  package.json
  README.md
```

### Run a Gatsby preview server <a name="run-a-gatsby-preview-server"></a>

###### Lets see what this gatsby starter site looks like, run the following command
```
npm run develop
```

![npm run develop](starterSite.jpg)

### Edit src/pages/index.js <a name="edit-src/pages/index.js"></a>

When you ran the Gatsby preview server, it says to edit src/pages/index.js so lets give that a try.

Lets start off by deleting the congradulations message and the line it says to edit the src/pages/index.js file

![Editing src/pages/index.js](./editingIndex.png)

Lets go ahead and add a navbar

This is a good place to introduce what React calls components, all your pages will have a navbar. Why hardcode that navbar on every page? Doing that will eventually give you unnessary headacks from silly things such as typo errors. The idea behind React components is so that you write the code once and just import it in all your pages. 

Create a file inside src/components/ name it Navbar.js

You have two diffrent ways you can create this component, using a regular function

![Nav Component Function](./navComponentFunction.png)

Or by using an arrow function 

![Nav Component Arrow Function](./navComponentArrowFunction.png)

I sprinkled some bootstrap to quickly style this Nav component, create a file called gatsby-browser.js in the root folder of your project. Here is were you import your css. It is best practice to always use normalize.css because diffrent browsers interpret styling in there own ways and this makes sure your styling is consitant in every browser. 

To get bootstrap just install it using ```npm install bootstrap```

To get normalize.css just install it using ```npm install normalize.css```

![Gatsby Browser Page](./gatsby-browser.png)


Lets import this component into our homepage ```src/pages/index.js```

![Importing Nav](./importingNav.png)

Your page should now look like this

![Preview Nav](./previewNav.png)


### Edit one of the blog posts <a name="edit-one-of-the-blog-posts"></a>

To edit one of the blog posts we must go inside the content folder inside there you will see markdown files.

### Understand how Gatsby creates our blog posts <a name="understand-how-gatsby-creates-our-blog-posts"></a>

I'll walk you through understanding how gatsby does things

There are a few files with a prefix of gatsby 
* gatsby-browser.js
    * This is where you put all your styling css files
* gatsby-config.js
    * This is where you put your site's metadata and gatsby plugins
* gatsby-node.js
    * This is where the magic happens, where your markdown files with the content are put together 
* gatsby-ssr

### Test our understanding how Gatsby creates our blog posts <a name="test-our-understanding-how-gatsby-creates-our-blog-posts"></a>

To test our understanding how Gatsby creates our blog posts lets take a look inside gatsby-node.js. This is where the magic happens!

We have 3 functions here

1. ```createPages``` This function is avalible to you from the gatsby api. Using this function gives you access to the function createPage.

   This function takes 3 parameters, graphql, actions, and reporter.
  
   Next we set the method of createPage to actions
  
   Next we define the path to your blog post template
  
   After that we create a varible named results and do an await graphql query grabing the nodes and edges
  
   We check for any error messages
  
   Next we declare a varible named posts and set it to equal the result's nodes part
  
   We next create an if statment to check if there are any "nodes" in other words we are checking if there are any blog posts
  
   If yes, we want to itterate through all of the blog posts and use the build in function gatsby gives you called createPage and pass that function a object defining the path, component, and the context which contains the post id, previous ,and next post id's 

2. ```onCreateNode``` This function 


### Connect a headless cms <a name="connect-a-headless-cms"></a>

Lets now connect a headless cms to our blog. In this tutorial I will be using a headless cms called Sanity.



### Use Github to host your blog for free <a name="use-github-to-host-your-blog-for-free"></a>

###### Github Client
```
brew install gh
```

###### Git Client
```
brew install git
```

