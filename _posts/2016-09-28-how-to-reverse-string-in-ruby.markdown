---
layout: post
title: "How to reverse a string in Ruby without using the reverse! method"
date: 2016-09-26
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/800/1*0jIqGNvljubRfmmRjHPdng.jpeg" alt="Rope — string same thing? (unsplash.com)" height="465px" width="700px" class="img-responsive">

A string is one of the data type in Ruby. This is usually a bit of text that you wrap around double/single quotation marks which you want to display to someone.

In this blog post, I will attempt to explain how to reverse a string e.g. from “hello” to “olleh” **without using Ruby’s reverse! method**.

First let’s define a method like so:

{% highlight ruby %}
def reverse_string(string)
end
{% endhighlight %}

My method is called **reverse_string** with a parameter **string**.

To test and see whether our method is working we can just return the string in our method, then call this method outside of our method using terminal:

{% highlight ruby %}
def reverse_string(string)
  string
end

puts reverse_string("hello")
{% endhighlight %}

You know the program is working when you see the output as “hello” in your terminal.

Now we can start defining our method. We can call a split method on the string in our reverse_string method and assign this to a variable → we can then call the variable instead of writing out the string and split method:

{% highlight ruby %}
def reverse_string(string)
  split_string = string.split("")
end

puts reverse_string("hello")

Terminal:
["h", "e", "l", "l", "o"]
{% endhighlight %}

The parenthesis and quotation marks next to split tell the method how the string should be split up. When you do not add any spaces between quotation marks (“”), the string will be split up between individual characters as you are specifying that the characters themselves are the separators. However if you were to add a space to this such as (“ ”), this would mean that the split method would only split the string where there’s a space e.g.:

{% highlight ruby %}
def reverse_string(string)
  split_string = string.split(" ")
end

puts reverse_string("Hello, my name is PINGLINH.")

Terminal output:
["Hello,", "my", "name", "is", "PINGLINH."]
{% endhighlight %}

Note that the .split method automatically adds the split up string into an array.

We can then create an empty array so that later on we can use the push and pop methods.

{% highlight ruby %}
def reverse_string(string)
  split_str = string.split("")
  reversed = []
end

puts reverse_string("hello")
{% endhighlight %}

Now what we want to do is to know the size of our string so that we can then repeat our push and pop method the same number of times as our string e.g. if my string’s is “hello”, the size is 5 and therefore the methods should be repeated 5 times to return the same number of characters.

{% highlight ruby %}
def reverse_string(string)
  split_string = string.split("")
  reversed = []
  string.size.times
end

puts reverse_string("hello")
{% endhighlight %}

We can now go ahead to define our push and pop method:

{% highlight ruby %}
def reverse_string(string)
  split_string = string.split("")
  reversed = []
  string.size.times { reversed << split_string.pop }
end

puts reverse_string("hello")
{% endhighlight %}

As the method is short, you don’t need to do ‘do’ and ‘end’ and use curly brackets instead. The << is the same as **push**. So what you are saying here is that from the array of split up strings, remove the last element in the array. Then the push method will append this to the reversed array. Below I have provided a more visual way of representing this:

{% highlight ruby %}
split_string = ["h", "e", "l", "l", "o"]
reversed = []

split_string = ["h", "e", "l", "l"]
reversed = ["o"]

split_string = ["h", "e", "l"]
reversed = ["o", "l"]

split_string = ["h", "e"]
reversed = ["o", "l", "l"]

split_string = ["h"]
reversed = ["o", "l", "l", "e"]

split_string = []
reversed = ["o", "l", "l", "e", "h"]
{% endhighlight %}

The last we need to do is to join the string elements back together. We can use the join method which returns a string created by converting each element of the array to a string.

{% highlight ruby %}
def reverse_string(string)
  split_string = string.split("")
  reversed = []
  string.size.times { reversed << split_string.pop }
  reversed.join
end

puts reverse_string("hello")
{% endhighlight %}

And that my friends, is how you reverse a string in Ruby without using the reverse! method…jk

There are plenty of other ways to do this but for now this is the simplest way that I understand. If anyone knows of other methods, please post the code in the comments below! I would love to know but please do explain what you are doing because I’m still a beginner and struggle to understand sometimes. Thanks!

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest) .
