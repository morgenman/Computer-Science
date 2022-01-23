---
updated: 2022-01-23_12:32:31-05:00
---
# Process
* an abstraction of a running program
* Described by [[State]]
* [[Process API]]
* Exist in one of many different [[Process States]]
	* Running
	* Ready to run
	* Blocked
* Events transition between these states
* [[Process List]] contains information about all processes in a system
	* Entries in this are contained in a [[Process Control Block|PCB]]
		* Structure that conains information about a specific process
* A [[Program]] with context

