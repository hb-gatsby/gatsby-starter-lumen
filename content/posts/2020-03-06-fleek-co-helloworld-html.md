---
template: post
title: Deploy to IPFS in Under 5 Minutes using Fleek
slug: fleek+helloWorld
draft: false
date: 2020-03-06T03:02:20.010Z
description: Create and deploy static website using Fleek and IPFS
category: Tutorial
socialImage: ./HelloWorld.png 
tags:
  - Tutorial
  - Resource
---
![](./HelloWorld.png)

Create your first static website hosted on IPFS using Fleek.

![](./media/1st photo.jpeg "Photo by Markus Spiske on Unsplash")

## Overview

We’ll create a simple `index.html` file and deploy it to IPFS on [Fleek](http://Fleek.co/). This whole process should take 5 minutes. Deployment should take 30 seconds. 

If you already have a Github Repo for your site or app in mind you can skip directly to step 2. Fleek makes it easy to deploy by auto detecting any framwork or build settings you use for your site.

Tools:

* Fleek account
* GitHub account
* Text editor

## Step 1: Set Up a Repo on Github

Create an empty repository, clone it and start coding.

![](./media/image 2.png)

Create an `index.html` file and add some content.

![](./media/image 3.png)

add, commit, push (you know the drill)

![](./media/image 4.png)

Now you’re repository is ready to go!

![](./media/image 5.png)

## Step 2: Set Up Fleek

Sign into: <https://app.fleek.co/>

Sign in with Github or Email

![](./media/image 6.png)

Add New Site

![](./media/image 7.png)

Connect with Github.

![](./media/image 8.png)

Pick a repository.

![](./media/image 9.png)

In this example, there is no `Build command` nor `Public directory`

Deploy Site

![](./media/image 10.png)

Deployment takes 30 seconds.

![](./media/Image 11.png)

Once complete, view your website.

![](./media/Image 12.png)

You can view the website using the provided domain name.

`https://<your-custom-domain>.on.fleek.co`

![](./media/image 13.png)

Or verify with the CID.

`https://ipfs.io/ipfs/<CID>`

![](./media/Image 14.png)

## Step 3: Updates

Fleek will automatically redeploy your website whenever you make changes on GitHub. The provided domain name will remain the same and will point to the new CID. This enables you to build fast modern websites hosted on IPFS.

* Join our [Community Chat](https://join.slack.com/t/fleek-public/shared_invite/zt-bxna7y1d-PbVdut4rgHt5jM6Zjg9g9A)
* Follow us on [Twitter](https://twitter.com/FleekHQ) 
* Check out our [Tech Docs](https://docs.fleek.co/)
* Contact us at support@fleek.co 
