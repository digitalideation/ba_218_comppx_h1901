---
layout: default
title: "Intro" 
---


# Computer Perception Extended - Winter 2019

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/webslides/webslides.svg?style=social)](https://twitter.com/digideation)


## Intro

In this module we will explore different applications of ML/AI/DL with a particular focus on design and art. We will first learn how neural networks work with simple code examples, then we will experiment with different techniques of Deep Learning: 

* DL applied to Computer Vision (image classification, objects detection, pose estimation...) 
* Generative Deep Learning (DeepDream, style transfer, Pix2Pix / CycleGAN...) 
* etc... 

Once we get a good grasp of the different techniques, we will experiment further by building our own ‘AI’ project. :space_invader:


## Schedule

#### Week 01: [Content](./content/week01.html) - [Slides](./slides/week01.html)
+ Intro: General 
+ ML / AI / DL: History & Example
+ Tools: Keras, TFJS, ML5JS, etc...

#### Week 02: [Content](./content/week02.html) - [Slides](./slides/week02.html)
+ Students intro
+ Inner working of a Neural Network
+ Training a NN: Intro to tools (Keras, ML5js, Paperspace)

#### Week 03: [Content](./content/week03.html) - [Slides](./slides/week03.html)
+ Machine Learning Project Checklist
+ Creating a dataset

#### Week 04: [Content](./content/week04.html) - [Slides](./slides/week04.html)
+ Machine Learning for computer vision (ConvNets)

#### Week 05
+ Testing RunwayML

#### Week 06 [Content](./content/week06.html) - [Slides](./slides/week06.html)
+ Projects dicussion
+ Machine Learning for computer vision (ConvNets)
+ Generative models: LSTM, RNN

#### Week 07
+ Machine Learning Project Checklist
+ Remote GPU
+ Deploying your models
  + Runway API
  + Tensorflow.js
  + Python API

#### Week 08 [Content](./content/week08.html) - [Slides](./slides/week08.html)
+ Generative models: Deep Dream, Style Transfer, VAE, GAN.


## Tools

#### System requirement
Modern machine with decent hardware and sufficient space on the hard drive (20+ Gb)

#### Runway
We are using [__Runway__](https://runwayapp.ai), a tool which makes deploying ML models easy, as middleware to build the interactive experiments. All participants to the workshop should have received an invitations with some GPU credits :tada:. For those who have not installed it prior to the workshop, we will go through the [installation process](https://docs.runwayml.com/#/getting-started/installation) together.

#### Docker
[__Docker__](https://www.docker.com/) is needed in order to deploy some of the models locally. This will give us some flexibility when running experiments. It will also allow us to _chain_ models (at the moment a user can only run one model instance using the provided cloud GPU in Runway). A guide to getting started is [available](https://docs.runwayml.com/#/getting-started/installation?id=download-docker). For linux users, those [post install steps](https://docs.docker.com/install/linux/linux-postinstall/) could be useful as well.

> Docker for Windows requires Microsoft Hyper-V, which is supported only in the Pro, Enterprise or Education editions of Windows. If you don't have a Pro, Enterprise or Education Windows edition you will not be able to install Docker and you will be able to only run some models using cloud GPU.

#### Conda
[__Conda__](https://conda.io) is an open source package management system and environment management system that runs on Windows, macOS and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

#### Code editor
If you don’t have a code editor, please install one. Some suggestions (in no particular order)
- [Sublime Text](https://www.sublimetext.com)
- [Visual Studio](https://code.visualstudio.com)
- [Atom](https://atom.io) 

#### Web server
We need a simple web server to run the experiments locally. Some suggestions 
- If you have node.js/npm installed you can use _live-server_: `npm install -g live-server`
- [Other recommended options](https://github.com/processing/p5.js/wiki/Local-server)

#### Tensorflow.js
A **JavaScript** library with a more advanced set of options, also for the web.
- [Getting Started](https://js.tensorflow.org/#getting-started)
- [Tutorials](https://js.tensorflow.org/tutorials/)
- [Keynote](https://www.youtube.com/watch?v=YB-kfeNIPCE)
- [Examples](https://github.com/tensorflow/tfjs-examples)
- [Video Tutorials](https://github.com/tensorflow/tfjs/blob/master/GALLERY.md#video-tutorials)

#### Keras
Keras is a high-level neural networks API, written in **Python** and capable of running on top of **TensorFlow, CNTK, or Theano**. It was developed with a focus on enabling fast experimentation
- [Getting Started](https://keras.io/#getting-started-30-seconds-to-keras)
- [Tutorials](https://blog.keras.io/index.html)

#### ML5.js
ML5.js is a simple **JavaScript** ML library for the web based on tensorflow.js. 
- [Getting started](https://ml5js.org/docs/getting-started)
- [Experiments](https://ml5js.org/en/experiments)
- [Git source](https://github.com/ml5js)

#### P5.js
[__p5.js__ ](https://p5js.org/) is a high level creative programming framework with an [intuitive API](https://p5js.org/reference/). If some of you have used Processing before you should be confortable using p5.js. To get familiar with p5 you can go through this list of tutorials / guides:
- [P5 Learn](https://p5js.org/learn/)
- [P5 Wiki](https://github.com/processing/p5.js/wiki/)
- [Creative Coding](https://creative-coding.decontextualize.com/)
- [Shiffman's Foundation of programming in js](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [P5js reference](https://p5js.org/reference/)

#### Magenta.js
Magenta.js is a collection of **TypeScript** libraries for doing inference with pre-trained Magenta models. All libraries are published as npm packages.
- [Demos](https://magenta.tensorflow.org/demos)
- [Blog](https://magenta.tensorflow.org)


## Samples

TBA


## References / Reading list

* History:
  + [History - Longer history of Machine Learning](http://www.andreykurenkov.com/writing/ai/a-brief-history-of-neural-nets-and-deep-learning/)
  + [History - History of Machine Learning](https://cloud.withgoogle.com/build/data-analytics/explore-history-machine-learning/)
* Intro:
  + [Neural Networks - Intro videos](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
  + [Neural Networks - Intro text](https://ml4a.github.io/ml4a/neural_networks/)
  + [Machine Learning - Getting started](https://www.youtube.com/watch?v=I74ymkoNTnw)
  + [Machine Learning is fun (series)](https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471)
* Books:
  + [Deep Learning with Python](https://www.manning.com/books/deep-learning-with-python)
  + [Grokking Deep Learning](https://www.manning.com/books/grokking-deep-learning)
  + [Intelligence Artificielles, Miroirs de nos vies (BD) ](http://www.sceneario.com/bande-dessinee/intelligences-artificielles/miroirs-de-nos-vies/29059.html)
* Programming languages:
  + [Learn Python the hard way][ref-learn-python-the-hardway]: to (re)learn your basic in Python
  + [Google's Python Class][ref-google-python]: concise and clear
  + [CodeAcademy Python][ref-ca-python]: Code Academy Python class
  + [W3School js][ref-w3s-js]: JS simple tutorials
  + [CodeAcademy JS][ref-ca-js]: Code Academy JS class
  + [Eloquent JS][ref-el-js]: Eloquent JS


## Repository structure

```
├── docs
│   ├── _layouts
│   ├── assets            (img, etc.. for content)
│   │   ├── css
│   │   └── images
│   └── slides            (slides of the presentations)
│       ├── demos
│       └── static        (img, etc.. for slides)
├── samples               (code samples) 
└── utilities             (scripts and notes)
```


[ref-learn-python-the-hardway]: https://www.learnpythonthehardway.org
[ref-google-python]: https://developers.google.com/edu/python/ 
[ref-ca-python]: https://www.codecademy.com/learn/learn-python 
[ref-w3s-js]: https://www.w3schools.com/js/default.asp 
[ref-ca-js]: https://www.codecademy.com/learn/introduction-to-javascript 
[ref-el-js]: https://eloquentjavascript.net 