---
layout: post
title:  "Ultimate Beginners Guide to Django"
subtitle: "Web Development with Django using AWS' Elastic Beanstalk"
date:   2016-12-21 22:56:05
categories: [development]
---
*Table of Contents*
1. ordered list
{:toc .toc}


# Intro
{: .intro }

With this article I am going to walk you through my experience with setting up a Django web application with AWS' Elastic Beanstalk.

So it all began recently when I had the need to make a web application. It was to be a mid-sized project with a database, user access and some 
heavy lifting in terms of computations. Now normally when such a need would arrise I would instantly put on the ol' Angular / Node JS hat and get
to work; but it was the holidays, had just been given another round of talks from colleagues saying how great Django is, and I was feeling a bit adventurous... So I decided to give Django a shot... 

And after using Django now for the better half of a month I am super glad that I did! The Django web framework definitly gives the [MEAN stack](http://mean.io) a run for its money and I'm even leaning towards using Django over Angular/Node JS again in the future if ever I need to get a web app up and running quickly!


# Hosting

To host my Django app I chose Amazon's [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) 
>an easy-to-use service for deploying and scaling web applications and services.

## Setup
I followed their deployment documentation for Django found here: [Deploying a Django Application to Elastic Beanstalk](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-django.html) and had my project and environment setup within 10 minutes. The 5 main steps of this tutorial are:

1. Install all dependencies (Python, pip, virtualenv, awsebcli)
2. Setup and activate a Python Virtual Environment
3. Create your Django project
4. Configure your Django application for Elastic Beanstalk
5. Deploy

## Why Elastic Beanstalk
The reason I chose Elastic Beanstalk is because of its ability to automatically scale according to your site's traffic (or other trigger that you setup in the console) as well as because it is quite easy to deploy your code with the [EB Command line tool](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html) When you have changes that you want to deploy to your environment just run the command:
{% highlight python %}
eb deploy
{% endhighlight %}

The other reason I chose Elastic Beanstalk is cause it's apart of AWS' extensive ecosystem of tools that covererd all of my needs for this particular project. Depending on your project needs, you can definitely get setup and running in the same amount of time (or less) with other hosting providers; my next top choice would be [Digital Ocean](https://www.digitalocean.com) due to their straight forward pricing and their [one-click install images](https://www.digitalocean.com/community/tutorials/how-to-use-the-django-one-click-install-image) that are super easy to use!

## Pricing 

The one thing I personally found with AWS is that their pricing scheme is a bit confusing and not clearly laid out for you (which might be why they have just released their new simple & predictable pricing service called [Amazon Lightsail](https://amazonlightsail.com)). 

AWS has an à la carte system for picking and choosing which tools and services you need to use and each comes with their own pricing system. Elastic Beanstalk itself is free to use but the other systems that it ties together for you each have a cost associated to them.

Currently I am paying around **$2 per month** for my setup (with my free tier still active) and it uses:

- EC2 (t2 micro instance)
- ELB (Load balancing)
- RDS (PostgreSQL database)
- SQS (Messaging queue for Celery) 
- S3 Storage (File storage & http redirect!)
- Route 53 (DNS management)

As soon as my free tier has expired I *believe* my costs will go up to around **$40 per month**.

# Django

Once I had my environment and Django project setup I began writing out my application. Some highlights on Django you should know about: Django uses Python, it has its own (awesome) templating engine, certain folders within your project are used for different things such as static files and templates.

## Setup

### Static Files

One of the first hurdles you will overcome with Django is sorting out your application's static files situation. 


### Data Models

Once I had my environment setup on AWS I began to write out my data models. Django has really good documentation when it comes to their framework 


# Database

# Celery