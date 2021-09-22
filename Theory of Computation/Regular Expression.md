# Regular Expression
Using symbols to represent sections of strings

* Examples:
	* Grep
	* awk
	* reg exp
	* PERL

## Notation
`(0,1)0*`
$\Sigma$ -> language of all strings over the alphabet of length 1

## Formal Definition:
* A regular expression R over an alphabet $\Sigma$ is one of the following:
	1. a for some $a\in \Sigma$
	2. $\epsilon$ empty string
	3. $\null$ empty set
	4. R1 Union R2 where R1 and R2 are regular Expressions
	5. R1$.$R2
	6. R1^*


It is possible to concatenate with an empty set
Anything union empty set or epsilon is itself

`{0,e}{1,e}={01,0,1,e}`
