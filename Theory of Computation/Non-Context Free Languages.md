# Non-Context Free Languages

# [[Pumping Lemma]]
## Introduction and Givens
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

To ensure this repetition we choose w such that $k \geq |v|$
* $\frac{|w|}{b}\geq |v|$
* $|w|\geq b* |v|$
	* Choosing this guarantees a repetition of a variable in the derivation 

$S \stackrel{*}{\Rightarrow} uAz \stackrel{*}{\Rightarrow} vAy\stackrel{*}{\Rightarrow} w$

A is the variable that is repeating

$|w|\geq b* |v|$

```
S{
	u
	A{
		v
		A{
			x
		}
		y
	
	}
	z...

}
```

If you have a grammar like this, we can get no repetitions, one repetitions, or many repetitions

What does this mean?

$uv^{k}xy^{k}z\in L$ for k $\geq$ 0
if k = 0 -> uxz
if k = 1 -> uvxyz
if k = 2 -> uv$^2$xy$^2$z

> We want to come up with a string that has has repeats 

## Theorem
* If L is a CFL, then there is a number P > 0 called pumping length such that if w$\in$L and |w|$\geq$p, then w can be written as uvxyz where:
	1. |vxy| $\leq$ P 
	2. vy $\neq$ e
	3. uv$^{K}$xy$^{K}$z $\in$ L for all k $\geq$ 0




