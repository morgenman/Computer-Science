# Key
* See [[Foreign Key]] and [[Primary Key]]
* let K $\subseteq$ R
	* K is a [[Superkey]] of R if values for K are sufficient to identify a unique tuple of each possible relation r(R)
	* EG: {ID} and {ID,name} are superkeys of instructor
* Superkey K is a [[Candidate Key]] if K is minimal 
* One of the Candidate Keys is chosen to be the [[Primary Key]]
* [[Foreign Key]] constraint: Value in one relation must appear in another:
	* Referencing relation
	* Referenced relation
	* EG: dept_name in instructor is a foreign key from instructor referencing department
