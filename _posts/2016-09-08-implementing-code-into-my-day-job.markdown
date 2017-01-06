---
layout: post
title: "Implementing code into my day job"
date: 2016-09-08
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/800/1*Fq8IzVxeUrl3t-Mr7rf7VQ.jpeg" alt="Photo from unsplash.com" class="img-responsive">

Now this may seem simple to some people but I had a **eureka moment** today.

Without going into too much detail, one of my tasks is to produce letters to students confirming their degree award. There is a letter template for this on the system but not in terms of the sentence which includes award confirmation. Therefore I have to manually copy and paste student’s award information into a word document and input that in a sentence, then copy and paste that into the letter template.

The more efficient way to do this would be to have macro fields imbedded in the letter template which would take required information and form the sentence/letter on preview. Alas it does take a while to implement new ideas/procedures therefore this will probably have to wait till the next meeting and even then that’s not something that can be implemented right away.

However, as I have been on [codecademy](http://www.codecademy.com/) recently doing the Ruby course for the 3rd time, I realised I could use Ruby string interpolation! Yes I will still have to copy and paste the information into my assigned variables and copy the rendered sentence but at least I don’t have to worry about the order of my sentence!

I searched for an online Ruby console and found [repl](https://repl.it/).

Here is the code I have written:

{% highlight ruby%}
award = "Bachelor of Laws Honours"
classification = "Second Class (Upper Division)"
degree = "Law (LLB)"
award_date = "12/Aug/2016"
print "I can also confirm that you were awarded a #{classification} for your #{award} in #{degree} on #{award_date}."
{% endhighlight %}

When I click run I get the full sentence which I can then simply copy and paste onto my letter template!

```
> I can also confirm that you were awarded a Second Class (Upper Division) for your Bachelor of Laws Honours in Law (LLB) on 12/Aug/2016.>
```

I know this is so simple, but it is definitely helping to increase my work efficiency. Perhaps you know of another way which may solve my problem? Let me know in the comments :)

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).


