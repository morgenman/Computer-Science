---
updated: 2022-02-01_10:14:55-05:00
---
# Algorithms
Thursdays one minute before midnight
25% off monday

# Introduction
Three Goals:
1. learn how to measure, test, and analyze the effectiveness of algorithm, program, or data structure
2. present commonly used data structures
3. reinforce the idea of tradeoffs

## Efficiency
* an **efficient** solution is one that solves the problem within the stated resource constraints
* the **cost** of a solution is the amount of resources consumed (space and time)

## Problem
* a **problem** is a task to be performed subject to resource constraints
* the problem definition should not contain any constraints on how the problem should be solved
* problems can be viewed as a specification of inputs and outputs like a math function
* a specific set of inputs is an **instance** of the problem

## Algorithm
* an **algorithm** is a process followed to solve a problem
* Properties:

1. **Correctness**: the algorithm implements the intended function
2. It is composed of **concrete steps**. *concrete: each step is well defined and doable*
3. The determination of the next step is **unambiguous**
4. The number of steps is **finite**
5. It must **terminate**


## Program
* a **program** is an instantiation of an algorithm

## Data Structure
* a **data structure** is a collection of data items with a particular organization and operations
* it is always possible to process data in structure
* using a suitable one can mean the difference between seconds and days in processing
* in order to choose one we need to analyze the problem to determine performance goals

1. Analyze the problem to determine the operations that must be supported (add/delete/search)
2. Quantify resource constraints for each operation
3. Select the data structure that meets the constraints

* How often will the data be searched?
* Can data be deleted