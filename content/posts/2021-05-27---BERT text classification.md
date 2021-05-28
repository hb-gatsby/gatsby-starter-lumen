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
    - "Transformers"
description: "Let's explore BERT models, how they came to be, how they work and how they are trained."
socialImage: "/media/article_images/bert_introduction/bert-google.png"
---

Today we will explore BERT models, explaining on a high level how they work. 
BERT a Natural Language Processing models created in [2018 by Google](https://arxiv.org/abs/1810.04805).
It can be used for tasks such as classification or masked language modelling (MLM).
Upon release, it crushed other algorithms at classic NLP task, and it is still a good model to use today. 

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

In order to compute attention, for each input of the encoder (meaning each word) a Query vector $Q$, a Key vector $K$ and a Value vector $V$ will be created by multiplicating the inputs with trained matrices created during training. You can then compute self-attention with the following formula:

$$
Attention(Q,K,V)=softmax(\frac{QK^T}{\sqrt{d_k}})V
$$

However, Transformers goes further, using **Multi-head Attention**, to do so we will use the self attention 8 times with different trained matrices, so 8 heads. You end up with the following formulas:

$$
MultiHead(Q, K, V)=Concat(head_1,\cdots, head_h)W^O
$$

$$
head_i=Attention(QW_i^Q, KW_i^K, VW_i^V)
$$

Where $W_i^Q \in \R^{d_{model} \times d_k}$, $W_i^K \in \R^{d_{model} \times d_k}$ et $W^O \in \R^{hd_v \times d_{model}}$. With $h=8$, $d_k=d_v=d_{model}/h=64$, $d_k$ being the size of vectors $Q$ and $K$, $d_v$ the one of vector $V$ while $d_{model}$ represents the size of word encodings (here 512).

You can think of this Multi-head attention as the different angles you might take on a text when reading it. Or the fact that when you change just a bit the question, the answer might differ and our comprehension too.

## BERT

BERT is a pre-trained model that can learn a representation of a language based on input texts. BERT stands for:

- Biderectional
- Encoders
- Reprensentation from
- Transformers

One of BERT key advantages when it was created was it's ability to understand context in both direction, meaning that when reading a word it is able to consider the content both before and after that word. 

BERT is a model inspired by Transformers, it is actually a model based on the same architecture only it does not have a decoding step. It's like a translator of some kind, translating your inputs into a language he can understand to make task susch as text classification.

BERT is trained on large corpus of text using 2 main tasks.

### Masked Language Modeling(MLM)

This technique consists of giving an input to a model, and the model will hide a word of the phrase to try to guess that word. What BERT does is that given a text corpus to train itself on, it will hide 15% of the word and try to guess them. When it's wrong, BERT will adapt it's internal weights to try to guess it the next time. *Please note that the actual % of words hidden is a bit different, refer to the [original paper by Devlin et al. in 2018](https://arxiv.org/abs/1810.04805)*.

### Next Sentence Prediction (NSP)

In this step BERT will be given two sentences, in half of the cases the two sentences both come from the same document, hence it is assumed they are linked. In the other half they are not coming from the same document, it is then assumed they are not linked. BERT objective is then to predict wether two phrases are linked or not. 

## RoBERTa and CamemBERT

In 2019 [Liu et al](https://arxiv.org/abs/1907.11692) proposed an improvement of BERT called RoBERTa. It reimplements the same architecture, but modifies the training of BERT.
First of all the training uses much more data, BERT was trained with 16 GB of test, RoBERTa uses 160 GB. In addition to that RoBERTa only uses MLM for training as researchers found that NSP actually reduces the performance of the model. 
They slightly tweaked the MLM training phase so that for each epoch (one epoch is one presentation of the training dataset) of the training, masked words are changed, allowing the model to learn in a better way. They also increased the batch size, which is the number of inputs presented at once to the model, which lead to a better performance.

CamemBERT, named after the famous cheese, is a reimplementation of RoBERTa with a French text corpus named [OSCAR](https://oscar-corpus.com/)

##Conclusion

Today we explored the BERT model and how it has leveraged the Transformers architecture to make a breakthrough in terms of performance in NLP task. 

If you want to actually use BERT for your own project, please go check out the [Hugginface Transformers](https://huggingface.co/transformers/quicktour.html) library. It is really easy to use and well made, and they have a lot of ready to use code to help you get started.
