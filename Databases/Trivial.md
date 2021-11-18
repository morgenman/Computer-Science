---
updated: 2021-11-18_05:45:47-05:00
---
Trivial Functional Dependency
FD: A1,A2...An -> B1, B2 ... Bm
if B1, B2... $\subseteq$ A1, A2 ... An 
then the above FD is called a trivial FD

* RHS attributes of a trivial FD are a subset  of LHS's attributes 
* title,year -> title
* title -> title

### Nontrivial Functional Dependency
A1 ... An -> C1 ... Ck
| A1  | ... | An  | C1  | ... | Ck  |
| --- | --- | --- | --- | --- | --- |
| a   | a   | a   | c   | c   | c   |
|     | b   | b   | b   | b   | b   |
|     | \*   | \*   | #   | #   | #   |

* '\*' is trivial attributes, '#' is non trivial attributes for b

{AB}$^+$={ABCDE}
trivial:
AB 	-> AB
nontrivial:
AB	-> CDE