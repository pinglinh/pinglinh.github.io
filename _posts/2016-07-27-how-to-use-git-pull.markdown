---
layout: post
title: "How to use git pull"
date: 2016-07-27
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/1000/1*jQpgV4UVWxJx80RtI86ejg.jpeg" alt="Photo from unsplash.com" height="465px" width="700px" class="img-responsive">

How to use git pull function? Let me tell you how I would usually push my first initial commit onto [GitHub](https://github.com) **IF** I already had some files on my local directory i.e. laptop.

1. I’d create a **new repository** on [GitHub](https://github.com) and initialize it with a **README file**.

2. I would then proceed to **clone** this onto my local directory (most of the time my desktop — make sure to cd into that folder):

    ```
    $ cd Desktop
    $ git clone https://github.com/USERNAME/REPOSITORY_NAME.git FOLDER_NAME
    ```

    * The link above is the remote URL which you can find in your GitHub repository by clicking the green button that says ‘Clone or Download’.

    * FOLDER_NAME is the name I want to give to my local folder; if I left this blank, it will automatically give the folder name the actual repository name I gave it on GitHub

    * This command also automatically sets your remote URL as the origin

3. This will create a local copy of the repository on my local machine and will contain the README file.

4. Then I would copy/cut all the files that I want to push to GitHub and paste them into the new folder containing the README file.

There is nothing wrong with doing it this way but I knew there was a way to do this without copying and pasting files and just using the command line.

<p style="text-align: center">- - -</p>

## How to do it with just the command line

1. Create a new repository on GitHub and initialize it with a README file

2. Create a folder on your local machine

3. Open terminal and move to that folder

    ```
    $ cd FOLDER
    ```

4. Add the remote URL as origin

    ```
    $ git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
    ```

5. Now using the pull command, you can ‘pull’ down the README file onto the local folder

    ```
    $ git pull origin master
    ```

6. Add your current files in the local folder to the staging area

    ```
    $ git add –-all
    ```

7. Commit your changes

    ```
    $ git commit -m "your commit message e.g. First commit"
    ```

8. Push your changes to the master branch

    ```
    $ git push origin master
    ```

So happy I can finally do it with the command line as oppose to faffing around with copying and pasting my files onto a cloned repository.

Hopefully this will also help those who are new to using **Git** and **GitHub**!

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).

