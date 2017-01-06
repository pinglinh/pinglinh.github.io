---
layout: post
title: "Jekyll | Highlighting Navigation Solution"
date: 2016-08-22
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/2000/1*7VCbs_tTA5tGgMdssqiglw.jpeg" alt="Photo from unsplash.com" height="465px" width="700px" class="img-responsive">

Two days ago I tried to set my [website](www.pinglinh.com) navigation in a way where the current tab would be highlighted to show where the user is at. It seemed to be pretty straightforward but alas this was not the case.

My code:

{% highlight html %}
{% raw %}
HTML

<a class="page-link" href="{{ site.baseurl }}/aboutme/" {% if page.url == '/aboutme' %} class="current" {% endif %}>About Me</a>
{% endraw %}
{% endhighlight %}

{% raw %}
The `{% if page.url == ‘/aboutme’ %} class=”current” {% endif %}` is Jekyll’s way of saying ‘if the page url renders /aboutme then apply the current class' and then you end your if statement with `{% endif %}`.
{% endraw %}

{% highlight css %}
CSS

.current {
   color: #45ADA8;
   background-color: #FFFFFF;
}
{% endhighlight %}

Pretty simple right?

However this did not work and my current class was not applied. Even when trying other combinations with the inspect tool, nothing would work.

Turning to [Eddie](https://twitter.com/eddiejaoude), he realised that I had 2 class attributes in the same html element:

```
class="page-link" and class="current"
```

You can have many classes but they need to be under **one class attribute per html element**.

```
e.g. class="page-link current"
```

When he said this I was literally like ‘oooooooooooooooooohs’ and quickly amended my code to this:

{% highlight html %}
<a class="page-link {% if page.url == '/aboutme/' %} current {% endif %}" href="{{ site.baseurl }}/aboutme/">About Me</a>
{% endhighlight %}

And it worked!!!!!!!!!!!!!!

I was sooooooooooo thrilled!!! Such a simple yet very important rule 😄

Things to note:

1. My ‘current’ class had to be nested inside ‘page-link’ for it to be active and work.
2. The page.url has to be precise — I tried to do ‘/aboutme’ but it required a forward slash at the end ‘/aboutme/’ as this is the link that Jekyll renders and therefore has to be exactly the same.

That’s it! If you have also came across this problem, I hope I have been able to shed some light 💡.

Massive thank you to [Eddie](https://twitter.com/eddiejaoude) who saw where the issue was in my code. He also came across this before but has now learned how to do it using Jekyll. We both learned something new 🤓.

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).
