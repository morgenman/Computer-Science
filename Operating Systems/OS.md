# OS
## What does it do?
* Handle physical resources and [[Virtualization|virtualize]] them
* Handle [[Concurrency]]
* Store data with [[Persistence]]

## Components
* Libraries
* File System
* [[System Call]] vs [[Procedure Call]]
	* [[System Call]] transfers control into OS while raising the [[Hardware Privledge Level]] 
		* Runs in [[User Mode]]
		* transfers control to [[trap-handler]] which raises the [[Hardware Privledge Level]] to [[Kernel Mode]]
* A [[Process]] is an abstraction of a running program


* Taking an [[Interrupt]] copies the data in the registers and puts it into the **[[K-Stack]]**
	* What happens to the 


## What Only Hardware Can do:
* [[Interrupt]]
* [[Privilege Bit]]
* [[System Call]]
* [[Address Translation]]

* The CPU [[Status Register]] has a [[Privilege Bit]]:
	* 0 -> [[User Mode]]
	* 1 -> [[Kernel Mode]]

* [[K-Stack]] is in the [[Interrupt Service Vector]]
* In the [[K-Stack]] is a pointer at the [[Interrupt Handler]]

## What is a [[Jump Table]]?
* Outside world provides a number
* Inside we have an array of pointers at code

* A [[Process]] is simply a [[Program]] with context

## Programming, Data Types, etc.
* [[Abstract Data Type|ADT]]: Data structure where you *don't have to understand how it's implemented*
* [[Pointers]]

* A [[Quantum]] is a unit of time for a cpu process to run (think when it switches back and forth, each time it runs is a quantum)

##

#virtualization  