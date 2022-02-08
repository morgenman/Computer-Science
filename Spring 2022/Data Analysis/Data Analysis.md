---
updated: 2022-02-08_13:06:56-05:00
---
# Data Analysis & Visualization
*Capturing your audience and showing them what they want to see in one chart*

Public Data https://archive.ics.uci.edu/ml/index.php


# Information Visualization
appropriate visualization is important...

> What is Data Science?
> Using data to answer questions
> Somebody who combines the skills of software programmer, statistician, and storyteller slash artist



# Big Data
## Volume, Velocity, Variety: Qualities of Big Data
* Volume: Large datasets
* Velocity: Data generated and collected very quickly
* Variety: Different types of data available

What is Data? A set of values of qualitative or quantitative variables.

EMR: Electronic Medical Records (messy data)


## Questions come before data
* Ask a question *before* you start looking at data. Look for data that is relevant


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

```

* <- is assignment operator
* one source file per 
* Everything is an object (by default vector)
## Types of Data
* char (string)
* numeric **AKA Double** (real numbers, double precision)
* integer
* complex
* logical
* vector (only one kind of data)
* list (array), can have more than one kind of data

## Data Attributes
* name
* dimnames
* dimensions
* class
* length
* userdefined

## Objects
