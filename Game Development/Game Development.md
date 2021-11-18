# Game Development
* Building text-adventure games (3 of them)
* Lots of twine programming
* Final DS Game
* [[Game Loop]]
* Suggestion for Lecture:
	* Go over Semiotics and how it relates to game design. 
 

## Meaning: Descriptive vs Evaluative 
* Descriptive: 
* Evaluative:
* Meaningful play does not necessarily mean meaningful choices

# 3d Graphics
* vector vs array
* 2d vs 3d
* Vertex:
	* [x y z]
* Matrix
	* [a b c]c
	   [d e f]
	   [g h i]
	* How a vector changes...

```
while(t) 
    read input
	update state
	show state
```

# Compression: reducing redundancy

# [[Twine Pitches]]

## Actor?

# ![[Teamwork Agile]]

# Decision Making
## We could use min/max tree
This is a decision space. We try and 

*What is a cellular automata*
* A grid of automata...
* group of states of people in neighborhood is my view?

Eg: Game of Life 
[[https://processing.org/examples/gameoflife.html]]

|     |     |     |
| --- | --- | --- |
| X   |     |     |
|     |     |     |
|     |     |     |

if there's 3 or more neighbors, you turn on
if there's less than 2 neighbors, you are lonely and turn off

So lines of three flip
walking skeleton

# C++ Stuff
* No garbage collection
	* make sure to deallocate memory
* if new is called for an array, before the array is the size stored


# Design Patterns
> Example, Inheritance:
> I need to keep track of espresso and coffee
> Class called espresso, and a class called coffee
> What if people want flavor in their coffee?
> vanilla espresso? milk espresso? vanilla milk espresso?
> bazillion classes, will never be complete
> What is the solution? fields in classes (Not using inheritance)
> New class called Special(flavor,baseDrink);
> drink is parent type

```nomnoml
[drink] -> [special|flavor|baseDrink|0.25*baseDrink.price]
[drink] -> [espresso|1.00]
[drink] -> [coffee|0.5]
```
## Decorator Pattern
[[https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm]]
* One of your subtypes can contain a list of base types. 

```nomnoml
#direction: down
[widget] - [panel|list<widget>]
[widget] - [window]
```

## Flyweight Pattern
[[https://www.tutorialspoint.com/design_pattern/flyweight_pattern.htm]]
![[Pasted image 20211027111206.png]]
* Basically instancing

# Turing Machines
* Pre-Turing machines
* Hilbert came up with 'Century' problems
	* Come up with a way for giving steps to problems that look like: a$^n$+b$^n$=c$^n$
	* an algorithm for solving this
* Turing came up with the idea of a nominal machine
* There are only as many programs as there are integers, and ^^ requires real numbers, real > int $\therefore$ impossible
* Established linguistics to talk about computing

# STD Lib
## Data structures and the like
* ArrayList <Integer.> (java) - typing has to be object
* `vector <int> v;` // (c++) - typing can be data/object
* `v.push_back(1);`
* allows overloading operators
	* v[0] instead of v.at(0);
* Associative Array
	* Map
	* `map<string,string> m;`
	* m["cat"];
		* this is operator overloading
* imagine you make a vector

```c++
vec3 v{1,2.5,3}, w{0,1,2},u;
u = v+w;s
```
	
Post-increment makes a copy of whatever you are using:
i++ makes a copy of i to return. 

empty overload = ++i, if int is in the overload it's i++
```c++
vec3 operator++(); // ++i
vec3 operator++(int x); // i++
```

## Constructors:
* return this()

# 3d graphics?
## Three spaces:
1. model space
2. world space
3. view space


# Pathfinding
## Graph...
* nodes with weights

Shortest Single Source Path
Dijkstra's algorithm

destination nodes are called: horizon

sorted by distance

breadth first, all 1st level nodes

## A star algorithm
for walking in game?

# Polymorphism
*Polymorphism*: relationship between classes; the idea that 


# Networking
Peer to peer vs server client

## Distributed Trust Algorithms

Encryption without latency?