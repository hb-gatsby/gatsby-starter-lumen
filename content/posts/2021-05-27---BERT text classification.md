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

## Transformers

BERT models are based on the Transformers architecture released in 2017 by google in a paper called 
[Attention is all you need](https://arxiv.org/abs/1706.03762). 
It's a 6 layer neural network containing so-called "encoders" and "decoders". They are analogue to two pieces of a translator.

Let's say you have two persons, person A speaks French and English, person B speaks English and Dutch. Combining person A and B you are able to translate some content from French to Dutch. Person A will encode your content from French to English, and person B will decode your content from Enligh to Dutch. The Transformers encoders and decoders works the same.

![Transformers architecture](/media/article_images/bert_introduction/The_transformer_encoder_decoder_stack.png "Transformers architecture. Source: [The Illustrated Transfomers](https://jalammar.github.io/illustrated-transformer/)")

### Layers
The transformers model is composed of 6 layers as shown in the image above. In each encoder you have two sub-layers:

- A "multi-head" attention layer
- A Feed forward neural network

In each decoder you have 3 sub-layers:

- A "multi-head" attention layer
- Another "multi-head" attention layer to interpret the encoder input
- A feed forward neural network.

![Decoder architecture](/media/article_images/bert_introduction/decoder_architecture.png "The full architectures of an encoder and a decoder layer. Source:[Attention is all you need](https://arxiv.org/abs/1706.03762)")

### Attention
You may wonder what is "attention" and you would be right as it is the heart of the model. 
Attention is a mechanism allowing the encoder or decoder to understand a sentence in its context. 

Thanks to attention, when looking at a specific word, the encoder or decoder can look at the other words of the sentence, knowing which words are relevant or not relative to the current word. 

How it works is not straightforward, but bear with me for a minute to understand the key ideas.

In order to compute attention, for each input of the encoder (meaning each word) a Query vector Q, a Key vector K and a Value vector V will be created by multiplicating the inputs with pre-trained matrices. You can then compute attention with the following formula:

$$
Attention(Q,K,V)=softmax()
$$

