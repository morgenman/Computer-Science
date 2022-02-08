---
updated: 2022-02-08_13:12:25-05:00
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
* matrix()
