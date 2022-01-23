---
updated: 2022-01-23_12:32:31-05:00
---
# Interrupt
* Interrupt gives control to the operating system


## Taking an Interrupt:
* Before fetch: check for pending interrupt
* With highest priority pending interrupt
	* Set [[Privilege Bit]]
	* Save context of user program on [[K-Stack]]
	* Use the **interrupt number** as index into ISV: jump to address
	* Run **Interrupt service routine** ...
	* Ensure the context of appropriate user process is on [[K-Stack]]
	* Unset [[Privilege Bit]]
	* Restore context from [[K-Stack]]
* Restart instruction pointed to by [[Program Couter]] for user code

