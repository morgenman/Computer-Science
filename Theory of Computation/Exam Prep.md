# Exam Prep

# Pumping Lemma: HW Problems

## A = {www|w \i\n {ab}\*}; prove A is not regular
suppose A is regular
$w = a^{p}ba^{p}ba^{p}b$, |w| $\ge$ p

1. |xy| $\le$ p 
2. y $\ne$ e
3. xy$^{k}$z $\in$ L $\forall$ k $\geq$ 0

### 1: clear that xy are all a's 
* so for k = 0 => xy$^{0}$z
	* xy = a$^{p-|y|}ba^{p}ba^{p}b\notin A$
	* same for k = 2, p+y

## Y = {w|w=x1#x2#x3...xk}
> ERROR FAILURE
$\Sigma$ = {1, #}
for k $\geq$ 0 xi $\in$ 1$^{*}$, xi $\neq$ xj for i $\ne$ j

let w = 1#1$^{p}$#1$^{2p}$ 
xy is 1#1$^{p}$ 
y can be 1#
* 1#1#1$^{p}$#1$^{2p}$ (fail)

y can be # 
* 1##... (fail)

y can be 1#1$^{g}$ where g < p
* 1#1$^{g}$ 
* she's getting a bit confused here
* assumption is x is empty
	* we can't assume that
* 	 forget about it
* do w = 1^p, 1^p+1, 
* then pump up, p+y will be equal to another element from 1->p

## ADD = {x = y + 2 | x,y,z are all binary}
w =   10$^{p}$= 1$^{p}+1$
k = 0; xy^0z => 

--- 
# take home hw:

(from book)
2.30: 
a) {0$^n$ 1$^n$ 0$^n$ 1$^n$  | n $\ge$ 0} is not a CFL
d) {t$_1$ # t$_2$ # ... # t$_k$ | k $\ge$ 2, each t$_i$ $\in$ {a,b}$^{*}$ and t$_i$ = t$_j$ for some i $\ne$ j}
2.33:
show that f = {a$^{i}$ b$^{j}$ | i = kj for some positive integer k} is not a CFL


## let's do 2.33:

show that f = {a$^{i}$ b$^{j}$ | i = kj for some positive integer k} is not a CFL

let w = $a^{2p^{2}}b^{2p}$ (k = p)

$uvxyz$
1. |vxy|$\le$p
2. vy $\ne$ 0
3. $uv^{k}xy^{z}\in L \forall k \ge 0$

### v or y contain more than one kind of symbol
let k = 2
$uv^{2}xy^{2}\notin L$
when we repeat them, out of order:
### v & y contain a's 
let k = 2
$uv^{2}xy^{2}\notin L$
| v y | = l 
l < p < 2p
$a^{2p^{2}+l}$
