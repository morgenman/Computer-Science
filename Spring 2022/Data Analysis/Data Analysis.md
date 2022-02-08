---
updated: 2022-02-08_13:30:36-05:00
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




```

* <- is assignment operator
* one source file per 
* Everything is an object (by default vector)
* factors are usually for categorical data
* ![[Pasted image 20220208132128.png]]
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


