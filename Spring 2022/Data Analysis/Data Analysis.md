---
updated: 2022-04-14_13:22:33-04:00
---

# Data Analysis & Visualization

_Capturing your audience and showing them what they want to see in one chart_

Public Data https://archive.ics.uci.edu/ml/index.php

# Information Visualization

appropriate visualization is important...

> What is Data Science?
> Using data to answer questions
> Somebody who combines the skills of software programmer, statistician, and storyteller slash artist

# Big Data

## Volume, Velocity, Variety: Qualities of Big Data

- Volume: Large datasets
- Velocity: Data generated and collected very quickly
- Variety: Different types of data available

What is Data? A set of values of qualitative or quantitative variables.

EMR: Electronic Medical Records (messy data)

## Questions come before data

- Ask a question _before_ you start looking at data. Look for data that is relevant

# R

```R
getwd() # Pwd
myfunction <- function(){
	x <- rnorm(100) # 100 random numbers
	mean(x) # return the mean
}

source("mean.r") # source file, replaces previous source file
x # print x
print(x) # print x

msg <- "hello"

x <- 1:30 # x now holds 1 2 3 4 ... 30

x <- 20 # x is Numeric
x <- 20L # x is integer

typeof(x) # returns type, class seems to do the same thing

x <- NaN # not a number

x <- c('a', 'b', 'c') # concatination, replace x with a b c

x <- 5 # x is a double
x <- as.integer(x) # x is now an integer

m <- matrix(nrow=2, ncol=3) # matrix initialized with NA
dim(m) # print rows,columns

attributes(m) # also prints rows and columns?

n <- matrix( 1:25 ,5 ,5 ) # fills columns then rows
# Output:
#      [,1] [,2] [,3] [,4] [,5]
# [1,]    1    6   11   16   21
# [2,]    2    7   12   17   22
# [3,]    3    8   13   18   23
# [4,]    4    9   14   19   24
# [5,]    5   10   15   20   25

m <- 1:10
# [1] 1 2 3 4 5 6 7 8 9 10
dim(m) <- c(2,5) # change dimension of m
#      [,1] [,2] [,3] [,4] [,5]
# [1,]    1    3    5    7    9
# [2,]    2    4    6    8   10

x <- 1:3
y <- 10:12
cbind(x,y) # Column bind
#      x  y
# [1,] 1 10
# [2,] 2 11
# [3,] 3 12
rbind(x,y) # Row bind
#   [,1] [,2] [,3]
# x    1    2    3
# y   10   11   12

x <- list(1, "a", TRUE) # Stores values as vectors of vectors
# [[1]]
# [1] 1
#
# [[2]]
# [1] "a"
#
# [[3]]
# [1] TRUE

x <- factor(c("yes","yes","no","yes","no")) # Levels will become labels?
# [1] yes yes no  yes no
# Levels: no yes

class(x) # Check the class
# "factor"

unclass(x) # basically categorize
# [1] 2 2 1 2 1
# attr(,"levels")
# [1] "no"  "yes"

factor (c(...), levels = c("yes","no")) # manually defining levels

is.na(x) # is value empty?
is.nan(x) # is it NaN

x <- data.frame (foo=1:4, bar=c(T,T,F,T)) # Matrix with labels
#   foo   bar
# 1   1  TRUE
# 2   2  TRUE
# 3   3 FALSE
# 4   4  TRUE

data <- read.csv("input.csv") # data from csv into data.frame

sal <- max(data$salary) # calculate the max value from the data  dataframe from column salary

help("read.csv") # pull up a help document

x <- 1:3
names(x) <- c("foo","bar","xyz") # name columns of x

list(a=1,b=2) #name them right off the bet

dimnames(x) <- list(c("a","b"), c("c","d")) # name rows then columns

dput(x,file = "y.R") # text form of R object
y <- deget("y.R") # R object from text

x <- "foo"
y <- data.frame(a=1, b="a")
dump(c("x","y"),file = "data.R")
rm(x,y)
source("data.R")

con <- file("input.txt","r") # read
data <- read.csv(con)

con <- url("https://swirlstats.com/students.html","r")
x <- readLines(con,10)


```

- <- is assignment operator
- one source file per
- Everything is an object (by default vector)
- factors are usually for categorical data
- ![[Pasted image 20220208132128.png]]

## Types of Data

- char (string)
- numeric **AKA Double** (real numbers, double precision)
- integer
- complex
- logical
- vector (only one kind of data)
- list (array), can have more than one kind of data

## Data Attributes

- name
- dimnames
- dimensions
- class
- length
- userdefined

## Notation

- double square brackets \[\[\]\] always returns a list
- Single brackets, you can put a range in
- You can also put in a condition ie:

```R
x <- c("a","b","c","a","e","a")
x[x>"a"]
# [1] "b" "c" "e"
u <- x >"a"
# [1] FALSE TRUE TRUE FALSE TRUE FALSE
x[u]
# [1] "b" "c" "e"

complete.cases(x,y) # truth table



```

- I think a list is a collection of vectors
- x _ y vs x % _ % y
- ![[Pasted image 20220210133755.png]]

Scope:

- ls(environment(cube))
- like scheme: functional programming
- if it cannot find a variable locally, it will look globally etc higher and higher up

date/time

# Data Preprocessing

- This comes before data analysis

Raw -> Preprocessing -> clean data -> data analysis -> presentation

Data: A set of values of qualitative or quantitative variables, belonging to a set of items

Need to document the process for processing

Raw: No manipulation, at all

- Make sure there's only one measured variable per column
- one observation of said variable per row
- one variable per table
- one table per file

# Project

- Choose a dataset
- Come up with hypothesis/questions
  13th

Report of project:

1. Where is data coming from? (public)
2. 1 paragraph what is it about?
3. 5+ questions you want to answer with data.

Going to be a class presentation with an R file (well documented)

# Regression Algorithms

- Machine Learning regression algorith:

  - Trying to draw conclusions from data

- midterm: for every activity, for each

# Clustering

- Sentiment analysis

1. Close? -> distance
2. group
3. visualize groups
4. interpret

> How do we measure distance?
> Euclidian: traditional
> Manhattan

## Hierarchical Clustering

- automatic, dendogram

## K Means Clustering

- partitioning approach
  - centroids of each cluster

# Principal Compound Analysis (Singular value decomposition)

- Matrix can only hold one kind of data, Frame can store different types
- demensionality reduction
- X is a matrix
  - when you apply the SVD function you get 3 vectors
  - U: left singular
  - D: diagonal
  - V$^T$: (t is transpose, rows to columns...) right singular

# iiD

- independent identical distribution
- P(A$\cap$B)= P(A) \* P(B)
- Don't multiply probabilities if not an iid

# PDF

- Probability Density Function
- Area under PDFs corresponds to the probabilities for that random variable

To be a valid PDF:

1. It must be larger than or equal to zero everywhere
2. The total area under it must be 1

Area under a chunk of curve is the probability that something is in that chunk

Eg:
The proportion of help calls addressed in a random day:
f(x) = {2x for 0 < x < 1; 0 otherwise}
is this a valid PDF? (yes, area is 1)

## Cumulative Distribution Function

A CDF of a random variable C, returns the probability that a random variable X is less than or equal to a value x
F(x)= P(X<=x)

## Survival Function

A SF of a random variable C, returns the probability that a random variable X is greater than a value x

S(x)= P(X>x)
S(x) = 1 - F(x)

CDF
F(x)= P(X<=x)
= 1/2 _ base _ height
= 1/2 _ x _ 2x
= x^2

So probability of 40% or fewer calls answered in a single day is answered by CDF
x = 0.4
CDF = 0.4^2 = 0.16, or 16%

probably of one given roll is odd on a 6 sided die is P(A/B) = P(A$\Cap$B)/P(B)= 1/3

# Regular

- P(A|B)= P(A$\cap$B)/P(B)

# Baye's Rule

P(B/A)

- Probability of b given a (reverse)
- $\frac{P(A|B)P(B)}{P(A|B)P(B) + P(A|B^{c})P(B^{c})}$

1. - and - are the events that are the result of a diagnostic test (positive and negative)
2. D and D$^c$ are the events that the subject of the test has or does not have the disease respectively
3. Sensitivity is the probability of getting a positive result given that the subject has the disease
   P(+|D)
4. Specificity is the probability of getting a negative result given that the subject does not have the disease
   P(-|D$^c$)
5. Positive predictive value is the probability of the subject having the disease given that the test is true
   P(D | +)
6. Negative predictive value is the probability of the subject not having the disease given that the test is false
   P(D$^c$ | -)
7. Prevalence of the disease is the marginal probability of the disease
   P(D)

P(D|+), P(+|D), P(-|D$^c$)

if a subject from a population with 0.1010 prevalence receives a test, what is the positive predictive value?
P(D) = 0.01
P(D|+) = $\frac{P(+|D)P(D)}{P(+|D)P(D)+ P(+|D^c)P(D^c)}$

...

6.2% that the subject has the disease

# Independence

Two events A and B are independent if P(A$\cap$B) = P(A)P(B)
equivalency if P(A|B)=P(A)

Two random variables, x and y are independent for two sets A and B
P([x $\subset$ A]$\cap$[y $\subset$ B]) = P(x$\subset$A)P(y$\subset$B)

if A is independent of B the probability that the test is true
A$^c$ is independent of B
A is independent of B$^c$
A$^c$ is independent of B$^c$


# Expected Values
* Looking at the characteristics of expected values
	* How much of entire population does this sample represent?

*The Process of making conclusions about a general population from sample data (from the general population)*

Making conclusions: characteristics of the distribution

Mean is characterized as the center
Variance and SD are characterization of how spread out the distribution is

## Population Mean
* x -> random variable
* PMF (probability mean function) -> P(x)
* E[x] = SUM xP(x)

So for a fair coin:

| x   | P(x) |
| --- | ---- |
| 0   | 0.5  |
| 1   | 0.5  |
E(x)= 0 * 0.5 + 1 * 0.4 = 0.5

## Sample Mean
* $\bar{x}$ = $\sum\limits_{x=1}^{n}x_{i}P(x_{i})$
* if we have n points that are equally likely:
	* $P(x_{i})$ = $\frac{1}{n}$
	* eg: a die

## Biased
| x   | P(x) |
| --- | ---- |
| 0   | P    |
| 1   | 1-P
E(x) = 0 * P + 1 * (1-P) = P

## Expected value
Exactly the center of mass for the density function


![[Pasted image 20220412131110.png]]



1. Expected values are properties of distributions
2. The population mean is the center of mass of population
3. The sample mean is the center of mass of the sample/observed data
4. The sample mean is an estimate of the population mean
5. The Sample mean is unbiased
6. The more data that goes into the sample mean, the more concentrated its density/mass function

Density: continuous
Mass: discrete

## Variance
* How spread out or clustered data points are
* X is a random variable with mean $\mu$ 
	* variance of x = E\[(x-$\mu$)$^2$\]= E\[$x^2$]-E\[x]$^2$

| x^2 | x   | P   |
| --- | --- | --- |
| 4   | 2   | 0.1 |
| 9   | 3   | 0.2 |
| 16  | 4   | 0.3 |
| 25  | 5   | 0.4 |

E\[x^2] = 4 * 0.1 + 9 * 0.2 + 16 * 0.3 + 25 * 0.4
E\[x] = 2 * 0.1 + 3 * 0.2 + 4 * 0.3 + 5 * 0.4

Variance = E\[x^2]- E(x)$^2$ = 1


Variance of d6
E(x) =3.5

| x^2 | x   | P   |
| --- | --- | --- |
| 1   | 1   | 1/6 |
| 4   | 2   | 1/6 |
| 9   | 3   | 1/6 |
| 16  | 4   | 1/6 |
| 25  | 5   | 1/6 |
| 36  | 6   | 1/6 |
E(x^2)= 1 * 1/6 + 4 * 1/6 ...36 * 1/6 
E(x^2)-E(x)^2


should equal something like 2.92


Unbiased coin:
E(x) = P
E(x^2)=P
Variance should be P-P^2

P(1-P)


### Sample Variance 
If **Population Mean** is the center of mass of the population, the **Sample Mean** is the center of mass for observed data

The **Population Variance** is the expected squared distance of a random variable. 

$\sigma^2$ is population variance 

The **Sample Variance** is the average squared distance of the observed observations minus the sample mean

$s^2$ = $\sum_{i=1}(x_i-\bar{x})^2/n-1$

* Sample variance is a function of data
	* it is also a random variable 
	* it is also a population distribution
	* that distribution has an expected value
	* that expected value is the population variance
	* that is what the sample variance is trying to estimate
* As you collect more and more data, the sample variance gets more concentrated around the population variance

## STD (sqrt variance)

* Sample variance s^2 estimates the population variance $\sigma^2$ 
* Distribution of sample variance is centered around $\sigma^2$ 
* The variance of sample mean s^2/n
* standard error is s/sqrt(n)
* s is STD


> But what is the standard error?
> It talks about how variable averages of random samples of size n are from the population



If variance is 1, STD = sqrt(1) = 1


## Poisson
* s^2 = variance = 4
* means of random samples of n
* s/sqrt(n) = 2/sqrt(n)


Variance of faircoin:
s^2 = 0.25
means of random samples of n = s/sqrt n = 1/2sqrt(n)


variance is squared, so if we are looking for a range it would be the mean +- the STD


# Distributions
## Bernoulli Distribution
Binary Outcomes

Bernoulli random variables takes the values 1 and 0
with probability p and 1-p

Probability Mean Function (PMF) for a Bernoulli Random Variable:

$P(X=x)=p^x(1-p)^{1-x}$

