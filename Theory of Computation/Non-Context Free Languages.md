# Non-Context Free Languages

# [[Pumping Lemma]]
let G be a CFG for a CFL L
let b be the maximum number of terminals on the RHS of a rule 
let w be the string derived by G
let v be the number of variables

w = w1, w2, w3...

S => ... => ... => ... => w
^ length (number of derivations) is k steps long

At every step in derivation, we can get at most b new terminals

> Example
> S > aTb
> T > aU
> U > bV
> V > baV | e
> S => aTb => aaUb => aabVb => aabbaVb => aabbab
> Number of derivations is 5. 5 is more than 4 (variables)
> $\therefore$ one variable must loop

length of w for derivation of length k:
	$|w|\leq kb$
	$kb\geq |w|$
	$k \geq \frac{|w|}{b}$

A derivation of length k contains 
1. How many variables if repetition is allowed?
2. How many variables if repetition is not allowed?

If we pick **k > |v|** then at least two intermediate steps will contain a variable 
i.e. A variable will be repeated in derivation

To ensure this repitition 
	
