---
template: post
title: >-
  Release Update: Custom Docker, Environment Variables, Faster Performance, and
  more..
slug: Release-update-1
draft: false
date: 2020-03-05T04:30:23.237Z
description: >-
  We are currently in private beta and from all the amazing feedback from our
  groundfloor users, we have released several updates that focus on improving
  the deployment process. We've also enhanced the experience all around the app
  and fixed many bugs.
category: Release
socialImage: /Release-Update-Docker.png 
tags:
  - Release
---
![](/Release-Update-Docker.png)

## Release Notes:

From starting the private beta a couple of weeks ago we have already onboarded 100+ users individually and received copious amounts of feedback. The feedback has mostly been around supporting all types of deployments so we have released several features around that alone, as well as other features to enhance performance and bug fixes.

### Deployment Improvements:

##### Custom Docker Images (BYOD: Bring Your Own Dockerfile):

Before your app or site is deployed onto IPFS it is built using docker images. We already store many docker images that support the most popular frameworks (Create React App, NextJS, GatsbyJS, etc.), however there are many different frameworks, web servers, languages, versions, etc. so being able to pull your own docker image for the build process makes it easy and can support any custom configurations.

![](/media/Screen Shot 2020-03-05 at 12.01.29 AM.png "Dockerfile upload component")

##### Environment Variables:

Users can now specify any number of environment variables before deploying their app. They can also be edited and updated later on to support flexible and robust dev ops practices. 

![](/media/Screen Shot 2020-03-05 at 12.01.19 AM.png "Environment Variables Component")

##### No Build Command or Publish Directory:

Deploy any combination of files or directories that do not require specifying any build command or publish directory. Just link your Git provider repo of files and click deploy. You’ll have an IPFS hash and subdomain to view those files directly in your browser.

![](/media/Screen Shot 2020-03-05 at 12.07.12 AM.png "Build Command and Publish Directory components")

##### To Sum Up All the Deployment Improvements in One Screenshot:

![](/media/Screen Shot 2020-03-05 at 12.19.21 AM.png)

### Performance Enhancements

* Speed up the build process by 3 - 4 minutes by caching docker images to deploy them much quicker than needing to build repeatedly
* Improve loading time around the app including the list of sites on the Sites Overview page when you first enter the app, and when you view the list of all the sites you've deployed
* Improve the loading speed of individual sites, navigating into a specific site and the tabs within that site

### Bug Fixes

* Fixed user authorization redirect issues. When a user was logged in for more than 30 minutes the page sometimes hard refreshed. Now there is no noticeable authorization redirect or page refresh.
* Editing deploy settings did not save. You can now update and save deploy settings and they will work with the next triggered redeploy.
* Improved branch selection dropdown in the step 3 of adding sites. We also reused that same dropdown in the deploy settings for updating the branch that the site deploys from.
* Leaving a site while it was in the middle of a deploy required a refresh to update the site to the successfully deployed state. Not anymore.
* and many more fixes from our incredible developer team...

We're very excited to be launching the Public Beta soon! In the meantime:

* [Sign up](https://terminalbeta.typeform.com/to/kionHH) for private beta early access
* [Join](https://join.slack.com/t/terminal-public/shared_invite/enQtOTM1MjQ3NTExMDU3LTNkYjU1ZGJhZGUyYjgwN2I3OThjY2U5OThlMGY2MGY0OGYxMDI1OWIwMTMwYzViZGY4ZGU0NDA0YmY4ZjVhOTg) our #community
* [Check out](Https://docs.Fleek.co) our technical documentation
