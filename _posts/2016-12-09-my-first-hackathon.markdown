---
layout: post
title: "My First Hackathon"
date: 2016-12-09
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/800/1*T8cvpTJXJLHxEaL4xLyUvQ.jpeg" alt="" height="465px" width="700px" class="img-responsive">

<img src="https://cdn-images-1.medium.com/max/800/1*YPyYkfx98LvujNU8uamQSA.jpeg" alt="From left: Kayla, Me, Shana (Lukasz and Shah came later so they weren’t in the photo!)" height="465px" width="700px" class="img-responsive">

Last Saturday (edit: 26/11/16) I attended my first ever hackathon at [Google Campus](https://www.campus.co/london/en) in London. The GDG (Google Developer Groups) Hackathon is for developers by developers meaning you get stuck right in and start creating whatever you want! They use the [Google Google Cloud Platform](https://cloud.google.com/) (GCP) for deployment. When I first came I didn’t know what to expect, there weren’t a lot of us but we quickly formed teams. I sat down with Kayla and we then had 1..2..3 people join us!

Our team were:

* Kayla
* Shana
* Lukasz
* Shah
* Myself

We first started off by doing a few GCP tutorials by [Chris Parsons](https://www.youtube.com/channel/UC3qMHSSmpzARiAJ-g9aPiYg) - he was one of the organisers there too. The idea was to create whatever we wanted and have it deployed to GCP.

After discussing what we should base our mini project on, we decided to use Google Maps API [Geocode](https://developers.google.com/maps/documentation/geocoding/start) and [Twitter](http://www.tweepy.org/) API Tweepy to map the most popular hashtag in a given city. We divided our group into 2: Shana, Shah and myself worked on the Google Maps API and Lukasz and Kayla worked on the Twitter API. We used Python for the back-end as most team members were familiar with the language (except me haha, it’s okay as it is similar to Ruby…somewhat 🤔). For the front-end we used HTML, CSS and JavaScript.

I began to feel helpless when we were just starting off as I was still confused in the world of API and finding JavaScript very daunting. I was about to leave but my group was super kind and encouraged me to stay! I can honestly say that I am so glad I did! All we needed was just a bit of help starting out with what Google Maps API to use. Once that was introduced to us by the lovely organisers, we got stuck right in!

You can visit our repo here [GDGHackathon2016](https://github.com/kaylashapiro/GDGHackathon2016/tree/develop).

Along the way we bumped into many issues such as:

1. With the Tweepy API, when we made too many requests we would have to wait a while before making another run of requests.

2. We could not get the back-end Python code to communicate with the front-end JavaScript to display the hashtags.

3. Clicking on coordinates could not load city specific hashtags.

We are hoping to fix all of these issues and have a working app soon! At the end of the hackathon we presented it to other teams and organisers. We had a really fun time getting together and hacking away!

I already can’t wait for the next hackathon! Check out the video below on the day’s hightlights!

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/hW7bmi2F3jI" frameborder="0" allowfullscreen></iframe></div>

Follow their [Twitter](https://twitter.com/gdghackathon) page for updates on the next hackathon!

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).

