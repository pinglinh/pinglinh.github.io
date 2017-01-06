---
layout: post
title: "Part 2 | FizzBuzz TDD"
date: 2016-10-05
categories: blog
---

In this part of the FizzBuzz series I will go over my experience of doing a test-driven development of FizzBuzz.

<img src="https://cdn-images-1.medium.com/max/800/1*OHuHrzDF6_eznBjVOcWNNA.jpeg" alt="Photo from unsplash (as per usual - I just love their initiative and how they became successful from a side project)" class="img-responsive">

Following from [Part 1 of FizzBuzz](https://medium.com/@pinglinh/part-1-fizzbuzz-in-plain-english-bf055cc6e56f#.ajf0jr1as) which I wrote in plain English, I now want to move onto writing the actual program that will meet the following conditions I have set out. I will be following the **Test Driven Development** (TDD) process to help me in writing executable and refactored code.

Here is what TDD is in my own words:

1. Write a test case before the actual code as this drives towards writing better code or code that you actually need

2. Run the tests and see it fail since you haven’t implemented the code yet but this shows that the test is working

3. Then write the code and implement it

4. The tests should render successful if the code has met all the conditions/requirements

5. The code must be cleaned up (refactored) throughout testing and implementation stage to make sure it is readable and it is not repeated - the test made before is there to check that the code is still working even after refactoring

As I will be writing the code in pure Ruby, I will be using RSpec, the testing tool for Ruby.

## Setting Up

First the RSpec gem has to be installed:

{% highlight ruby %}
$ gem install rspec
{% endhighlight %}

Then make a new project directory with **lib, spec directories** which should have the **program** and **spec file** inside respectively.

{% highlight ruby %}
FizzBuzz_rspec
          \_____lib
                  \_____fizzbuzz.rb
          \_____spec
                  \_____fizzbuzz_spec.rb
                  \_____spec_helper.rb
          \_____Gemfile
{% endhighlight %}

Alternatively you can also do the following command to set up the spec directory:

{% highlight ruby %}
$ rspec init
or
$ rspec --init
{% endhighlight %}

Create a Gemfile with the following:

{% highlight ruby %}
source "https://rubygems.org"

gem "rspec"
{% endhighlight %}

Then run the following command in the project directory to install the rspec gem and all its dependencies:

{% highlight ruby %}
$ bundle install
{% endhighlight %}

In the fizzbuzz_spec.rb file we want to input the following code:

{% highlight ruby %}
describe FizzBuzz do
end
{% endhighlight %}

Then when we run the RSpec command which checks our tests with corresponding code/program/method:

{% highlight ruby %}
$ rspec
{% endhighlight %}

The error will be as follows:

{% highlight ruby %}
fizzbuzz_rspec/spec/fizzbuzz_spec.rb:3:in `<top (required)>': uninitialized constant FizzBuzz (NameError)
{% endhighlight %}

This is because we do not yet have a class method called FizzBuzz yet. In fizzbuzz.rb file we need to input:

{% highlight ruby %}
class FizzBuzz do
end
{% endhighlight %}

Require this in our fizzbuzz_spec.rb file:

{% highlight ruby %}
require 'FizzBuzz'

describe FizzBuzz do
end
{% endhighlight %}

Now when we run RSpec, we get:

{% highlight ruby %}
No examples found.


Finished in 0.00006 seconds
0 examples, 0 failures
{% endhighlight %}

This means that the files are now linked and we can start doing our first test.

Extra notes: You can also add the spec_helper.rb file (or it has already been added when you did rspec init command) in your spec directory to configure your command line output:

{% highlight ruby %}
RSpec.configure do |config|
 config.color = true
end
{% endhighlight %}

This will include colours in your terminal. There are other configurations which can be found at RSpec.

## Testing and Coding

The first test I will be writing is to meet the conditions of printing out **Fizz when a number is divisible by 3**:

{% highlight ruby %}
require 'FizzBuzz'

describe FizzBuzz do
  context 'if a number is divisible by' do
    it '3 print Fizz' do
      fizz_buzz = FizzBuzz.new
      result = fizz_buzz.divisible_by_three(3)
      expect(result).to eq("Fizz")
    end
  end
end
{% endhighlight %}

Running Rspec:

<img src="https://cdn-images-1.medium.com/max/800/1*NHS_fi-r30C-ACIFt6gEfg.png" class="img-responsive">

You can see that divisible_by_three method is not defined yet. Therefore we go back into our fizzbuzz.rb file to define this method:

{% highlight ruby %}
class FizzBuzz
  def divisible_by_three(number)
  end
end
{% endhighlight %}

Running RSpec:

<img src="https://cdn-images-1.medium.com/max/800/1*DAYXL21S92Slz3X4PZZ6ww.png" class="img-responsive">

Now RSpec tells us that the expected was “Fizz” however we actually got nil. This is because our method did not return anything. We can now go on to include Fizz into our method:

{% highlight ruby %}
class FizzBuzz
  def divisible_by_three(number)
    "Fizz"
  end
end
{% endhighlight %}

Running RSpec:

<img src="https://cdn-images-1.medium.com/max/800/1*GSQqF2JESJwLVGq9Zok-kA.png" class="img-responsive">

This means our test has now passed!

But of course we know that we don’t just simply want any number to be “Fizz” and it is just for numbers that are divisible by 3. As the test is working up to this point, we can go ahead to write the method and see whether the test is still passing:

{% highlight ruby %}
class FizzBuzz
  def divisible_by_three(number)
    if number % 3 == 0
      "Fizz"
    else
      number
    end
  end
end
{% endhighlight %}

<img src="https://cdn-images-1.medium.com/max/800/1*bv7Jh5eO6y61bJZzGXUDDQ.png" class="img-responsive">

The test has passed! Hooray!

Now we can go ahead to write up the tests for our other conditions:

{% highlight ruby %}
require 'FizzBuzz'
require 'spec_helper'

describe FizzBuzz do
  context 'if a number is divisible by' do
    it '3 print Fizz' do
      fizz_buzz = FizzBuzz.new
      result = fizz_buzz.divisible_by_three(3)
      expect(result).to eq("Fizz")
    end

    it '5 print Buzz' do
      fizz_buzz = FizzBuzz.new
      result = fizz_buzz.divisible_by_five(5)
      expect(result).to eq("Buzz")
    end

    it '15 print FizzBuzz' do
      fizz_buzz = FizzBuzz.new
      result = fizz_buzz.divisible_by_fifteen(15)
      expect(result).to eq("FizzBuzz")
    end

    it 'any other numbers' do
      fizz_buzz = FizzBuzz.new
      result = fizz_buzz.divisible_by_any_number(1)
      expect(result).to eq(1)
    end
  end
end
{% endhighlight %}

Running RSpec

<img src="https://cdn-images-1.medium.com/max/800/1*Nzk9mWGNQFpOJokaAaBakQ.png" class="img-responsive">

As expected, the three new methods we tested are not yet defined in our code. We can go ahead and write them up in our fizzbuzz.rb file:

{% highlight ruby %}
class FizzBuzz
  def divisible_by_three(number)
    if number % 3 == 0
      "Fizz"
    else
      number
    end
  end

  def divisible_by_five(number)
    if number % 5 == 0
      "Buzz"
    else
      number
    end
  end

  def divisible_by_fifteen(number)
    if number % 15 == 0
      "FizzBuzz"
    else
      number
    end
  end

  def divisible_by_any_number(number)
    number
  end
end
{% endhighlight %}

You should usually do the following steps based on failed tests:

1. Undefined method - go and define the method

2. Method returned “nil” - input what you expected in your test

3. Test passed-go ahead and define the next method

As the other methods were pretty much the same I knew it would work but you should follow it step by step as the failed tests in a way guide you to write the next bit of code.

<img src="https://cdn-images-1.medium.com/max/800/1*CeEZAl2mxQB77j7SJBTk-Q.png" class="img-responsive">

You can now see that all tests have passed!

## Refactoring

Although these tests and code work, it’s not following the principles of DRY (**D**on’t **R**epeat **Y**ourself). There are actually a lot of repetitions in this current code therefore we will be refactoring (restructuring/cleaning up the code) it.

In the spec file, I am repeating the instance variable **fizz_buzz = FizzBuzz.new** in all of my tests therefore I can actually refactor this into one line like so:

{% highlight ruby %}
require 'FizzBuzz'
require 'spec_helper'

describe FizzBuzz do
  context 'if a number is divisible by' do
    let(:fizz_buzz) { FizzBuzz.new }

    it '3 print Fizz' do
      result = fizz_buzz.divisible_by_three(3)
      expect(result).to eq("Fizz")
    end

    it '5 print Buzz' do
      result = fizz_buzz.divisible_by_five(5)
      expect(result).to eq("Buzz")
    end

    it '15 print FizzBuzz' do
      result = fizz_buzz.divisible_by_fifteen(15)
      expect(result).to eq("FizzBuzz")
    end

    it 'any other numbers' do
      result = fizz_buzz.divisible_by_any_number(1)
      expect(result).to eq(1)
    end
  end
end
{% endhighlight %}

After running RSpec the test still passes!

Now we can start to refactor our code. Instead of defining a method for each method, I can define one and use control flow.

{% highlight ruby %}
class FizzBuzz
  def divisible_by(number)
    if number % 15 == 0
      "FizzBuzz"
    elsif number % 3 == 0
      "Fizz"
    elsif number % 5 == 0
      "Buzz"
    else
      number
    end
  end
end
{% endhighlight %}

Since I changed the method name, this also needs to reflect in my spec file:

{% highlight ruby %}
require 'FizzBuzz'
require 'spec_helper'

describe FizzBuzz do
  context 'if a number is divisible by' do
  let(:fizz_buzz) { FizzBuzz.new }
    it '3 print Fizz' do
      result = fizz_buzz.divisible_by(3)
      expect(result).to eq("Fizz")
    end

    it '5 print Buzz' do
      result = fizz_buzz.divisible_by(5)
      expect(result).to eq("Buzz")
    end

    it '15 print FizzBuzz' do
      result = fizz_buzz.divisible_by(15)
      expect(result).to eq("FizzBuzz")
    end

    it 'any other numbers' do
      result = fizz_buzz.divisible_by(1)
      expect(result).to eq(1)
    end
  end
end
{% endhighlight %}

I’m sure I can refactor this further however these are the only ways I know of right now. Hopefully as I learn more about Ruby and rspec, I will come across many other ways in which the code can be written.

## EDIT

Ok so after thinking around for a bit, I have changed 2 things:

1. I realised that my tests do not have a test for when a number is not divisible by 3, 5, or 15.

2. Change the wording in my spec file.

3. Refactoring the program code.

How my spec file looks like now:

{% highlight ruby %}
require 'FizzBuzz'
require 'spec_helper'

describe FizzBuzz do
  context 'when given a number' do
  let(:fizz_buzz) { FizzBuzz.new }
    it 'returns Fizz when divisible by 3' do
      result = fizz_buzz.divisible_by(3)
      expect(result).to eq("Fizz")
    end

    it 'returns the number when not divisible by 3' do
      result = fizz_buzz.divisible_by(1)
      expect(result).to eq(1)
    end

    it 'returns Buzz when divisible by 5' do
      result = fizz_buzz.divisible_by(5)
      expect(result).to eq("Buzz")
    end

    it 'returns the number when not divisible by 5' do
      result = fizz_buzz.divisible_by(1)
      expect(result).to eq(1)
    end

    it 'returns FizzBuzz when divisible by 15' do
      result = fizz_buzz.divisible_by(15)
      expect(result).to eq("FizzBuzz")
    end

    it 'returns the number when not divisible by 15' do
      result = fizz_buzz.divisible_by(1)
      expect(result).to eq(1)
    end
  end
end
{% endhighlight %}

As you can see, I am now more explicit in my description of my tests which makes it clearer as to what the tests are testing (and what the code should do).

I also now have a negative test case for when a number is not divisible by each specified number. This means I no longer need to have the ‘returns any other number’ test case.

This is better because I’m being more specific in terms of writing the program. Previously, without having the negative test case, when I wrote this bit of code:

{% highlight ruby %}
def divisible_by_three(number)
  "Fizz"
end
{% endhighlight %}

The test would pass when it shouldn’t because I want my program to have specified the control flow of only printing “Fizz” when divisible by 3.

Now because I have changed my test back to the method names of divisible_by_three/five/fifteen instead of divisible_by, my code no longer works. This was a tricky situation for me as I did not know how I could refactor the code whilst having 3 different method names in my spec file! **However someone pointed out to me that I can call a class method within the class!!!!!!!!!!!!!** 😪 😱 😭

Take a look:

{% highlight ruby %}
class FizzBuzz

  def divisible_by(number)
    if number % 15 == 0
      "FizzBuzz"
    elsif number % 3 == 0
      "Fizz"
    elsif number % 5 == 0
      "Buzz"
    else
      number
    end
  end

  private

  def divisible_by_three(number)
    divisible_by(number)
  end

  def divisible_by_five(number)
    divisible_by(number)
  end

  def divisible_by_fifteen(number)
    divisible_by(number)
  end

end
{% endhighlight %}

Can you see how I am still defining the individual methods but calling the universal method inside them? At the moment I feel like this is the only way to refactor without having to define all the methods! I have made the specific methods private so that they cannot be called outside of the class.

If anybody knows of another way to do this please let me know in the comments! 🤓

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).
