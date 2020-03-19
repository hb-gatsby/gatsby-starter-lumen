---
template: post
title: How to Deploy a GatsbyJS site onto IPFS with Terminal
slug: Gatsby-Terminal
draft: false
date: 2020-03-19T04:02:37.816Z
description: >-
  Gatsby allows for the creation of static sites in a simple, straightforward
  manner. In this tutorial, we will show you how to create a Gatsby project and
  deploy it to IPFS thanks to Terminal.
category: Tutorial
socialImage: /media/GatsbySocialimage.png
tags:
  - Tutorial
  - Guide
  - Gatsby
---
![](/media/GatsbySocialimage.png)

Gatsby allows for the creation of static sites in a simple, straightforward manner. In this tutorial, we will show you how to create a Gatsby project and deploy it to IPFS thanks to Terminal.

## Creating a Gatsby Project

Let’s start by installing the Gatsby CLI.

`npm i -g gatsby-cli`

Now we can create a Gatsby project.

`Gatsby new name_of_project`

This will create a new sample gatsby project which can be modified according to your needs. You can run `npm run develop` to see the page in the browser by going to http://localhost:8000.

For now, let’s make some changes to the basic starter site.

![](/media/gatsby1.png)

Beautiful!

## Deploying Through Terminal

We must create a github repository to store our site so Terminal can pick it up. For this tutorial, we will use the following repo:  https://github.com/SamueleA/gatsby-terminal

Now, we must log to Terminal and add a new site.

![](/media/gatsby2.png)

We select the github repo containing the Gatsby project.

![](/media/gatsby3.png)

Terminal will determine what build to use, so we can use the default ones, just make sure to select the correct branch. Click on “DEPLOY SITE” to proceed to the next step.

![](/media/gatsby4.png)

You will be redirected to the site’s page. We must now wait for the site to be built and deployed.

![](/media/gatsby5.png)

Once the deployment is over the site can be accessed and shared. For this tutorial, the site can be seen here: <https://wandering-surf-0223.tmnl.co/>

![](/media/gatsby6.png)

## Explore more

… and that’s it! Deploying a Gatsby site to Terminal is quick and easy.

As mentioned previously, Gatsby is very useful, among other things, for blog creation. In the documentation section at the bottom of this post, we have left some links to learn more about this aspect and what other features Gatsby has to offer.

Once you are done, come back to Terminal to share your work!

### Documentation

* [Gatsby video tutorial](https://www.youtube.com/watch?v=8t0vNu2fCCM)
* [Gatsby docs](https://www.gatsbyjs.org/docs/)
* [Terminal docs](https://docs.terminal.co/)
