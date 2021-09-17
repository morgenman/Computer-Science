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
# A Computer is...
### CPU
* [[Registers]]
* [[Program Couter]]
* fetch-decode-execute ([[Von Neumann Model of computing]])
### RAM
### I/O devices

## Computing Resources
* CPU *Cycles*
* RAM *address spaces*
* RAM *safe concurrent access*
* Device *interaction*
* Persistent storage *organization*

## Mechanism vs Policy
* Mechanism: a low level capability. **How** the system works
	* How does the OS switch contexts of two processes
* Policy: a high level strategy. **Which** resources go to which process
	* Which process is scheduled to have the CPU after we interrupt the current one?
* **Policies** are implemented by making use of **Mechanisms**

## An OS is a Resource Manager for one or more processes using the computer hardware concurrently
* Concurrent: happening at the same time, overlapping duration
* What services does it offer:
	* Multiprocessing
		* Sharing CPU/RAM
		* Process Management - loading/unloading, starting/pausing/stopping
		* Scheduling based on some criteria
	* Safe Sharing (of resources like RAM)
		* Uncontrolled concurrent access of a single physical resource is inherently unsafe
	* Device Interface
		* Multiple devices attach to the computer
		* a *facade* place in front of all devices raises the level of abstraction at which they are used 
		* Example of a common interface:
			* What is a file?
				* sequence of bytes
	* Persistence (files)
	* Error detection/correction/recovery

#virtualization  