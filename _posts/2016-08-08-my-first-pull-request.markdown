---
layout: post
title: "My first pull request"
date: 2016-08-08
categories: blog
---

<img src="https://cdn-images-1.medium.com/max/2000/1*JqvfGfy0m6BceOmUOT_8tA.jpeg" alt="Photo from unsplash.com" height="465px" width="700px" class="img-responsive">

## Why do a pull request?

Pull requests are a great way to make some contributions or suggestions to an open source project. What you do is you ‘fork’ the repository which ultimately copies the repository to your username and you can then work on making changes to the code. Once you have finished, you can then submit a pull request which will notify the owner of the original repository the changes that you have made and they can then review it. Where changes have been made, you and the owner can comment to discuss and come to an agreement. Any changes you need to make, you can still do so via git add, commit and push. If the owner is happy with all the changes, they will then merge your pull request with the original!

Last week I submitted my first ever pull request to [WeRockTech](https://github.com/WeRockTech/werocktech.github.io) repository. It was very fun and rewarding and I am so glad I was able to contribute. Through this experience, I decided to write a **guide on how to do a pull request**. There were some problems encountered along the way which I will also share below. I will be using [WeRockTech](https://github.com/WeRockTech/werocktech.github.io) repository as an example.

## How to submit a pull request
1. Go to the main page of the repository at https://github.com/WeRockTech/werocktech.github.io

2. Click on the ‘Fork’ button on the top right-hand corner (note: GitHub layout may change in the future so it may be somewhere else)

3. This then takes you to https://github.com/pinglinh/werocktech.github.io — notice that the copied repo is now under my username

4. On terminal, go to where you want the repo to be (i.e. in my case I always choose Desktop), clone the repo and cd (change directory) into it:

    ```
    $ cd Desktop
    ```

    ```
    $ git clone https://github.com/pinglinh/werocktech.github.io
    ```

    ```
    $ cd werocktech.github.io
    ```

5. Add the upstream (original) repo as a remote so that you can track it and sync it with your forked master branch later:

    ```
    $ git remote add upstream https://github.com/WeRockTech/werocktech.github.io.git
    ```

    (upstream just means the original repo you forked from)

6. Create a new branch where you will be making changes:

    ```
    $ git branch experiment
    ```

    I called my branch ‘experiment’ since i would be experimenting with some of my ideas I had in mind but obviously you can call the new branch how you like it to be. It is advisable to name it something that will help you recognise what it is especially when working with many branches, you want to remember which is which.

    ```
    $ git checkout experiment
    ```

    This command switches to the branch you have just created.

7. In the branch you’ve just created, you can make changes using **add**, **commit** and **push** commands. To find out how to do this [click here](https://medium.com/@pinglinh/how-to-use-git-pull-80ad77a8afc6#.lo0gwag41) to check out my other blog post.

8. Once you are happy with your changes, you will need to update your master branch with the upstream repo:

    ```
    $ git fetch upstream
    ```

    ```
    $ git checkout master
    ```

    ```
    $ git merge upstream/master
    ```

    The **fetch** command pulls up any commits from the upstream repo. The **merge** command will input any new changes from the upstream repo into your forked master branch.

9. Now that the master branch is up-to-date, you can go ahead and merge this with the other branch you created:

    ```$ git checkout experiment```

    Always go to the branch where you want the changes to end up. In this case we want our updated master branch to be reflected in our ‘experiment’ branch.

10. Then merge your master branch:

    ```$ git merge master```

11. At this stage I encountered a conflict which I will explain how to resolve below, otherwise go to number 14 for pull request section.

    My conflict message on terminal:

    ```
    $ git merge master
    Auto-merging css/custom.css
    Auto-merging _includes/navigation.html
    Auto-merging _includes/footer.html
    Auto-merging _includes/banner.html
    CONFLICT (content): Merge conflict in _includes/banner.html
    ```

    The output tells me that the conflict is in the banner.html file in _includes folder.

12. You can also check which files have a conflict or have been modified by running the following command:

    ```
    $ git status -s
    UU _includes/banner.html
    M  _includes/footer.html
    M  _includes/navigation.html
    M  css/custom.css
    ```

    U means conflict and M means modified.

13. In my case, my conflict was in the banner.html file. Opening up the file, this showed up:

    ```
    <<<<<<< 9a636223ace3b636f3dbfbcedcdc1de9f0860871
    <i class="fa fa-youtube-square fa-1x"></i>
    =======
    <i class="fa fa-youtube-play"></i>
    >>>>>>> Unfixed footer and added youtube icon
    >>>>>>>
    ```

    The first section before ===== is what came from the master branch and the bottom section is what was in my experiment branch. In order to resolve the conflict, you delete the whole section between <<<< and >>>> and input what you want. Add and commit your changes with a message saying you have resolved the conflict and state what was the problem, for example in my case it would be ‘git commit -m “Resolved youtube icon conflict”’ and make sure to push your changes to the right branch i.e. experiment in my scenario.
    14. Now that everything is resolved, we can submit a pull request:
    Go onto the forked repo on GitHub and click on ‘**New Pull Request**’

<img src="https://cdn-images-1.medium.com/max/1400/1*oB2we8QJmZOnHrvKveuIxA.png" alt="Forked repository of WeRockTech" height="465px" width="700px" class="img-responsive">

The base fork should be the upstream repo and base master.

Head fork should be your copy of the repo and compare your second branch

Here is how mine looked like:

base fork: WeRockTech/werocktech.github.io
base: master
head fork: pinglinh/werocktech.github.io
compare: experiment

<img src="https://cdn-images-1.medium.com/max/1400/1*lKaGjRDx61yJi00Tal0lmQ.png" alt="Creating pull request" height="465px" width="700px" class="img-responsive">

Clicking on ‘Create pull request’, a markdown section will appear where you can add the type of request, title, description and screenshot. **This is essential as it allows the owner to understand what you did and why. Adding a screenshot is a great way to visually showcase what your code achieved especially if it’s front-end.**

<img src="https://cdn-images-1.medium.com/max/1400/1*3DfiA-KDuWPbjVk0beS3dA.png" alt="Markdown section to add type, title, description and screenshot of the pull request." height="465px" width="700px" class="img-responsive">

<img src="https://cdn-images-1.medium.com/max/800/1*YDaDNe9XTv-flQN_1sg-jg.png" alt="Input and explanation of my pull request." height="465px" width="700px" class="img-responsive">


You can also preview how the markdown will look like by clicking the ‘Preview’ tab.

<img src="https://cdn-images-1.medium.com/max/800/1*aODC4P8fQVU4FiytSSZMPQ.png" alt="Preview your markdown edit." height="465px" width="700px" class="img-responsive">

Once you’re happy with your markdown edit, you can go ahead and click ‘Create pull request’.

<img src="https://cdn-images-1.medium.com/max/800/1*hqSgIgnznwDdPGQFp8QBWw.png" alt="Click on ‘Create pull request’." height="465px" width="700px" class="img-responsive">

You will then be directed to your pull request page:

<img src="https://cdn-images-1.medium.com/max/800/1*YYRdlvCUb9ipl6pS8gR5Uw.png" alt="" height="465px" width="700px" class="img-responsive">

You can also see your commit messages and any comments or changes that you’ve made after creating the pull request e.g. I changed the title therefore it shows as the latest change I have done and saved.
<img src="https://cdn-images-1.medium.com/max/800/1*Nk4NPlvDsKqRZH5-4nZRvg.png" alt="History of changes and commits." height="465px" width="700px" class="img-responsive">

You can also add any comments to your pull request or close it if you no longer want it to be reviewed.
<img src="https://cdn-images-1.medium.com/max/800/1*DMPxlG-rI0KNzKtuBu_f4Q.png" alt="Commenting your pull request." height="465px" width="700px" class="img-responsive">

That’s it! You then wait for the owner to review your request. If they are happy with it, they will merge it into the master branch. Alternatively they may comment on your code and provide other suggestions to which you can then change using the add, commit and push commands — this will automatically be updated for the owner to see and review further.

<p style="text-align: center">- - -</p>

This blog post has also been published on [medium](https://medium.com/@pinglinh/latest).

