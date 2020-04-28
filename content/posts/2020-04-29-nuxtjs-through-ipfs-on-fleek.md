---
template: post
title: NuxtJS through IPFS on Fleek
slug: NuxtJS through IPFS on Fleek
draft: false
date: 2020-02-28
description: Get started with deploying your NuxtJS site using IPFS on Fleek
category: getting started
socialImage: ./media/FleekOnFleek/socialImage.png
tags:
  - general
  - nuxtjs
  - ipfs
  - getting started
---
![](./media/FleekOnFleek/socialImage.png)


In this article, we will show you how to deploy your site built on NuxtJS and deploying using IPFS on Fleek 

```
# Table of Contents
- What is Fleek
- What is IPFS
- Starting a NuxtJS Project
- File Structure
- File Structure Content
- Deploying to IPFS on Fleek
- Switching name or adding a domain on Fleek
- Closing Thoughts
- Resources
```

# What is Fleek

![](images/nuxtjs/fleek-logo.png)

Fleek is everything you need to build fast, modern sites & apps on IPFS. All in one seamless workflow, From local development to global deployment, Your site will not only runs on IPFS, it’s also supplemented with a global, enterprise-grade CDN, allowing for speed, scale, and performance that is superior to normal hosting. 

# What is IPFS

[IPFS](https://ipfs.io) stands for `InterPlanetary File System`, The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.

# Starting a NuxtJS Project

First step is to create a nuxt app wraped around create-nuxt-app, the name of my directory is `deploy-nuxtjs-using-ipfs-on-fleek` yours can be named whatever you like.

```
$ npx create-nuxt-app deploy-nuxtjs-using-ipfs-on-fleek

```

Once that is done you now have your repo created, all that is left is to enter into the directory using the company below

```
cd deploy-nuxtjs-using-ipfs-on-fleek
```

run the comand below to start the developement server which would create a server on `http://localhost:3000/`

```
yarn dev
```

Once that is running you would see a preview there similar to the below

![](images/nuxtjs/nuxt-main.png)
