---
layout: inner
title: "Week 04" 
---


## Intro

This week we start looking into Convolutional Neural Networks (ConvNets or CNN). We will work with Keras and/or ML5js. Example with Wekinators and tfjs can be provided during next week session. 


## Resources

+ [CNN - Intro from ML is Fun](https://medium.com/@ageitgey/machine-learning-is-fun-part-3-deep-learning-and-convolutional-neural-networks-f40359318721)
+ [CNN - An Intuitive Explanation of Convolutional Neural Networks](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/)
+ CNN - DL with Python - Chapter 5 (please refer to the link shared on Slack)


## Weekly task

### In Class

Read the articles above in [resources](#resources), and complete the 4 notebooks for week 04 in `ba_218_comppx_h1801/samples/notebooks`:

```
...
├── week04-05-introduction-to-convnets.ipynb
├── week04-06-using-convnets-with-small-datasets.ipynb
├── week04-07-using-a-pretrained-convnet.ipynb
└── week04-08-visualizing-what-convnets-learn.ipynb
```

Those notebooks are taken from the book DeepLearning with Python, (please refer to the link shared on Slack). You should be able to run most of the examples with your local instances of TF / Keras running on the CPU. At the meantime I will try to setup some machine on [Paperspace](https://www.paperspace.com) so that you can use their GPU for training :stuck_out_tongue_winking_eye: I'll share the link with you on Slack if / when this is done.

Convnets are a cornerstone of Deeplearning and you are going to learn a few very useful techniques this week. Namely: _'data augmentation'_ and _'feature extraction'_ for _'transfer learning'_ . 

### Assignment

For _developers_ your assignment is to use a CNN to build a classifier of your choice (either trained from scratch or using a pre-trained model). You can follow the techniques detailed in the notebooks. You will find some examples of datasets in the section [going further/tools](#tools) on this page. For those of you who worked with the shape classifier with the toy NN it might be interesting to try to use CNN as a comparison (see the Kaggle dataset in [tools](#tools)). 

Both _designers_ and _developers_ should start looking a bit more in details into their personal project (that we will start to work on after week 06) Which means:

1) Make some research on similar projects (models architecture, datasets, tutorials, blog posts, etc...), please __share__ your research on Slack if you think they could help some teammates.
2) For _designers_ you should start sketching some ideas either in the form of prototypes (high or low level), UI sketches, or even code experiment (P5, ML5).

By __next week__ (week 05) you should:

1) Have a __solid understanding__ of  Keras at a basic functions _(Developers)_
2) Be able to __train / retrain__ your own __CNN__ with Keras _(Developers)_


## Going further

### CNN 

+ [CNN - Visualizing what ConvNets learn](https://cs231n.github.io/understanding-cnn/)
+ [CNN - Understanding convolutions](http://colah.github.io/posts/2014-07-Understanding-Convolutions/)
+ [CNN - Visualisation](http://scs.ryerson.ca/~aharley/vis/conv/flat.html)

### Tools 

+ [Datasets - Awesome datasets](https://github.com/awesomedata/awesome-public-datasets)
+ [Datasets - Misc datasets](https://www.kdnuggets.com/datasets/index.html)
+ [Datasets - Kaggle](https://www.kaggle.com/datasets)
+ [Datasets - Kaggle (shape classification)](https://www.kaggle.com/smeschke/four-shapes/home)
+ [JS ml5js - Classification](https://ml5js.org/docs/image-classification-example)
+ [JS ml5js - YOLO](https://ml5js.org/docs/yolo-webcam)
+ [JS tfjs - Tutorials](https://js.tensorflow.org/tutorials/)
+ [JS tfjs - Examples](https://github.com/tensorflow/tfjs-examples)
+ [JS tfjs - Video Tutorials](https://github.com/tensorflow/tfjs/blob/master/GALLERY.md#video-tutorials)
