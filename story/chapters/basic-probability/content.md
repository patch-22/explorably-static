---
title: Basic Probability
description: This chapter is an introduction to the basic concepts of probability theory
---

## Chance Events

Randomness is all around us. Probability theory is the mathematical framework that allows us to analyze chance events in a logically sound manner. The probability of an event is a number indicating how likely that event will occur. This number is always between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.

A classic example of a probabilistic experiment is a fair coin toss, in which the two possible outcomes are heads or tails. In this case, the probability of flipping a head or a tail is 1/2. In an actual series of coin tosses, we may get more or less than exactly 50% heads. But as the number of flips increases, the long-run frequency of heads is bound to get closer and closer to 50%.

For an unfair or weighted coin, the two outcomes are not equally likely. You can change the weight or distribution of the coin by dragging the true probability bars (on the right in blue) up or down. If we assign numbers to the outcomes — say, 1 for heads, 0 for tails — then we have created the mathematical object known as a [random variable](https://seeing-theory.brown.edu/probability-distributions/index.html#section1).

## Expectation

The expectation of a random variable is a number that attempts to capture the center of that random variable's distribution. It can be interpreted as the long-run average of many independent samples from the given distribution. More precisely, it is defined as the probability-weighted sum of all possible values in the random variable's support,

$$
\mathrm { E } [ X ] = \sum _ { x \in \mathcal { X } } x P ( x )
$$

Consider the probabilistic experiment of rolling a fair die and watch as the running sample mean converges to the expectation of 3.5.

Change the distribution of the different faces of the die (thus making the die biased or "unfair") by adjusting the blue bars below and observe how this changes the expectation.

## Variance

Whereas expectation provides a measure of centrality, the variance of a random variable quantifies the spread of that random variable's distribution. The variance is the average value of the squared difference between the random variable and its expectation,

$$
\operatorname { Var } ( X ) = \mathrm { E } \left[ ( X - \mathrm { E } [ X ] ) ^ { 2 } \right]
$$

Draw cards randomly from a deck of ten cards. As you continue drawing cards, observe that the running average of squared differences (in green) begins to resemble the true variance (in blue).

Toggle which cards you want to include in the deck by clicking on them below.