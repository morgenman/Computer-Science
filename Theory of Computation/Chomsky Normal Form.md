# Chomsky Normal Form

## Guarantied to resolve a [[Push Down Automata]] in `(2n-1)` steps 

For some ambiguous grammar we can find unambiguous grammar that generates the same language (ie trompsky normal)

Some [[Context Free Language]]s can only be generated using ambiguous grammar. Such languages are called *Inherently ambiguous* and cannot be put in trompsky form


## CNF:
A grammar is in CNF if every rule is of the form:
 	A->BC
 	A->a
	
Where a is any terminal and A B & C are any variable
also, s->e is permitted where s is the start variable

# Four steps to converting:
1. Add a new start variable $S_0$
	and a new rule $S_0 \rightarrow S$ where S is the original start variable
	This guarantees that the start variable is not on RHS
	
2. Eliminate e rules
	Remove an e rule $A\rightarrow$e where A is not the start variable
	If $R \rightarrow UAV$ where U and V are strings of variables and terminals 
	we add the rule $R\rightarrow UV$ 
	We do this for every occurance of A
	
	Eg: R -> uAvAw so we add...
	R -> uvAw
	R -> uAvw
	R -> uvw
	
3. Remove unit rules $A \rightarrow B$ 
	Remove unit rule then whenever rule $B\rightarrow u$ appears, add $A\rightarrow u$
	where u is a string of variables and terminals
	**Unit rules is a variable going to a variable (not a terminal)**
	
4. Convert all remaining rules to proper form
