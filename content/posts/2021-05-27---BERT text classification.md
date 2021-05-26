---
title: An introduction to BERT
date: "2021-05-27T15:00:37.121Z"
template: "post"
draft: false
slug: "introduction-bert"
category: "Data Science"
tags:
    - "Data"
    - "NLP"
    - "Data Science"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
socialImage: "/media/article_images/bert_introduction/bert-google.png"
---

Today we will explore BERT models, explaining on a high level how they work. 
BERT a Natural Language Processing models created in [2018 by Google](https://arxiv.org/abs/1810.04805).
It can be used for tasks such as classification or masked language modelling (MLM).
Upon release it crushed other algorithms at classic NLP task, and it is still a good model to use today. 

# Transformers

BERT models are based on the Transformers architecture released in 2017 by google in a paper called 
[Attention is all you need](https://arxiv.org/abs/1706.03762). 
It's a 6 layer neural network containing so-called "encoders" and "decoders". They are analogue to two pieces of a translator.

Let's say you have two persons, person A speaks French and English, person B speaks English and Dutch. Combining person A and B you are able to translate some content from French to Dutch. Person A will encode your content from French to English, and person B will decode your content from Enligh to Dutch. The Transformers encoders and decoders works the same.

![Transformers architecture](/media/article_images/bert_introduction/The_transformer_encoder_decoder_stack.png)