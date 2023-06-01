---
title: "What is Git and Github?"
date: 2023-02-12 21:21:00 +/-0530
categories: [Git, Guide, Github]
pin : false
tags: [Guide, Git]
img_path: /assets/img/

image:
  path: /Git/head.png
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: Github
---
Everything you need to know about Git, from getting started to advanced commands and workflows.

# What is Git?

Git is distributed version control software. Version control is a way to save changes over time without overwriting previous versions. Being distributed means that every developer working with a Git repository has a copy of that entire repository - every commit, every branch, every file. If you're used to working with centralized version control systems, this is a big difference!

Whether or not you've worked with version control before, there are a few things you should know before getting started with Git:

Branches are lightweight and cheap, so it's OK to have many of them
Git stores changes in SHA hashes, which work by compressing text files. That makes Git a very good version control system (VCS) for software programming, but not so good for binary files like images or videos.
Git repositories can be connected, so you can work on one locally on your own machine, and connect it to a shared repository. This way, you can push and pull changes to a repository and easily collaborate with others.

## Why Use Git?

Version control is very important - without it, you risk losing your work. With Git, you can make a "commit", or a save point, as often as you'd like. You can also go back to previous commits. This takes the pressure off of you while you're working. Commit often and commit early, and you'll never have that gut sinking feeling of overwriting or losing changes.

There are many version control systems out there - but Git has some major advantages.
## Speed

Like we mentioned above, Git uses SHA compression, which makes it very fast.

## Ease of roll back

If you make a mistake, it's OK! Commits are immutable, meaning they can't be changed. (Note: You can change history, but it will create new replacement commits instead of editing the existing commits. More on that later!) This means that if you do make a mistake, even on an important branch like main, it's OK. You can easily revert that change, or roll back the branch pointer to the commit where everything was fine.

The benefits of this can't be overstated. Not only does it create a safer environment for the project and code, but it fosters a development environment where developers can be braver, trusting that Git has their back.


# Getting Started With Git

Depending on your operating system, you may already have Git installed. But, getting started means more than having the software! To get started, it's important to know the basics of how Git works. You may choose to do the actual work within a terminal, an app like GitHub Desktop, or through GitHub.com. (Note: while you can interact with Git through GitHub.com, your experience may be limited. Many local tools can give you access to the most widely used Git functionalities, though only the terminal will give you access to them all.)

There are many ways to use Git, which doesn't necessarily make it easier! But, the fundamental Git workflow has a few main steps. You can practice all of these in the Introduction to GitHub course.
## Create a branch

The main branch is usually called main. We want to work on another branch, so we can make a pull request and make changes safely. To get started, create a branch off of main. Name it however you'd like - but we recommend naming branches based on the function or feature that will be the focus of this branch. One person may have several branches, and one branch may have several people collaborate on it - branches are for a purpose, not a person. Wherever you currently "are" (wherever HEAD is pointing, or whatever branch you're currently "checked out" to) will be the parent of the branch you create. That means you can create branches from other branches, tags, or any commit! But, the most typical workflow is to create a branch from main - which represents the most current production code.
## Make change (and make a commit)

Once you've created a branch, and moved the HEAD pointer to it by "checking out" to that branch, you're ready to get to work. Make the changes in your repository using your favorite text editor or IDE.

Next, save your changes. You're ready to start the commit!

To start your commit, you need to let Git know what changes you'd like to include with git add [file].

Once you've saved and staged the changes, you're ready to make the commit with ``` git commit -m "descriptive commit message" ```

# GitHub:
 GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. 