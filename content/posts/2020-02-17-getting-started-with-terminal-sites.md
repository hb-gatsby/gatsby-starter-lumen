---
template: post
title: Getting Started with Terminal Sites
slug: getting-started
draft: false
date: 2020-02-17T19:22:21.659Z
description: Get started deploying your first site to IPFS with Terminal
category: getting started
socialImage: /media/Getting Started.png
tags:
  - general
  - getting started
---
![](/media/Getting Started.png)

Here at Terminal we are committed to helping build the world’s decentralized web infrastructure. While blockchain technology has revolutionized the ways in which we are capable of transacting and computing without intermediaries or centralized servers, fundamentally most real world applications of blockchain will require users to interact with the blockchain through a centralized website or web application. Our newest product, Terminal Sites, aims to solve this by providing the ability to easily deploy and maintain your website in a fully distributed fashion using the IPFS (Interplanetary File System) protocol. If you are interested in learning more about IPFS, you can read about the [basics](https://medium.com/@ConsenSys/an-introduction-to-ipfs-9bba4860abd0). In this guide I will walk through deploying a Gatsby website to IPFS using Terminal Sites.

For this walkthrough I will assume you already have a website you are ready to deploy. If you don’t have a site ready to deploy, feel free to use any of the gatsby starter [](https://www.gatsbyjs.org/starters/?v=2)[websites](https://www.gatsbyjs.org/starters/?v=2) to follow along.

Begin by signing up for a Terminal Sites account. As soon as your account is created, you will see a pop up noting that you have yet to add your first site. Before moving forward, ensure that you have installed gatsby-plugin-ipfs and configured it in the `gatsby-config.js` file. Go ahead and select `Add New Site` and then follow the steps to link your websites github repo. Now that your github repository has been linked, you will be prompted to define your build command and publish directory as shown below.

![CreateNewSite](https://gracious-heisenberg-ed7b14.netlify.com/static/65f3096803d7c5d270326d486f0a650f/06881/CreateNewSite.png)

Your build command can generally be found in the `package.json` and your publish directory is most commonly either `dist` or `public`. If the website you would like to deploy is only a part of a larger repository, you can define which branch you would like to deploy from, however it will be set to `master` by default. Now that your build configuration has been set, you are ready to deploy your site.

Once you click `deploy site` you will see a deploy log that looks something like this:

![deployLog](https://gracious-heisenberg-ed7b14.netlify.com/static/2f52278390815aed4daa49366a2812e0/49c97/deployLog.png)

Your site will be automatically deployed to procedurally generated url. Now that your site is deployed, you can choose to use a custom domain name or keep the one that was generated.

To add a custom domain go to your site settings page and select `Add or Buy Custom Domain.` From here you can add a custom domain that you already own, or you can purchase a domain of your choice directly on our site.

![AddOrBuy](https://gracious-heisenberg-ed7b14.netlify.com/static/f117b9513c37ab5d05861db7b754b0a8/94396/AddOrBuy.png)

For custom domains that you have procured on your own, you will have to handle DNS management on your own, however if you purchase a domain from our site we automatically configure your DNS settings and provision a wildcard certificate for your domain.

If you have added a domain name you already owned, configure the DNS settings by selecting `check DNS configuration`. This will pop open a window telling you point your A record to our load balancers IP address (44.233.93.166).

![ArecordConfig](https://gracious-heisenberg-ed7b14.netlify.com/static/947f049464bf1561663ec03a9840a47b/ff9c7/ArecordConfig.png)

This is something you will need to do with your DNS provider by entering the command shown in the popup. Once completed navigate back to your site settings page and select `verify DNS configuration`. If you have added a subdomain as well you will need to register this with your DNS provider as well. This can be done with the command shown below:

![CNAMEConfigure](https://gracious-heisenberg-ed7b14.netlify.com/static/680e3f14e4c406dec6b8030be0f31e31/c1e59/CNAMEConfigure.png)

Sometimes it can take up to 24 hours for these changes to propagate.

if you run into any issues during this process please feel free to reach out on our website, in our [Community Chat](https://join.slack.com/t/terminal-public/shared_invite/enQtOTM1MjQ3NTExMDU3LTNkYjU1ZGJhZGUyYjgwN2I3OThjY2U5OThlMGY2MGY0OGYxMDI1OWIwMTMwYzViZGY4ZGU0NDA0YmY4ZjVhOTg), on our [Twitter](https://twitter.com/terminaldotco) or at hi@terminal.co as we are always more than happy to help out.
