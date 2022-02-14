---
updated: 2022-02-14_15:29:51-05:00
---
# CompTIA Security + Overview
[[601_study_guide.pdf]]
## CIA Triad
![[Pasted image 20220209113213.png]]
1. Confidentiality
	* information must not be shared with other people
	* encryption
2. Integrity 
	* ensuring information has not been modified or altered
	* hashing helps verify this
3. Availability
	* information is available to be accessed, stored, and protected at all time
	* information without availability is useless 

## Three A's of security
### Authentication
* when a person's identity is established with proof and confirmed by system
* Five methods of authentication:
	1. Something you know
	2. Something you are
	3. Something you have
	4. Something you do
	5. Somewhere you are
	
### Authorization
* when a user is given access to a certain piece of data or certain areas of a building

### Accounting
* ensures tracking of data, computer usage, and network resources are maintained
* log file
* [[Non-repudiation]] occurs when you have proof that someone has taken an action

## Security Threats
### Malware
* short-hand term for malicious software

### Unauthorized Access
* when access to computer resources & data happens without the consent of the owner

### System Failure
* when a computer crashes or an application fails

### Social Engineering
* manipulating users into revealing confidential information or performing other detrimental actions

## Mitigating Threats
* **User training is the most cost effective security control to use**
### Physical Controls
* alarms, locks, cameras, id cards, security guards
### Technical Controls
* smart cards, encryption, access control lists (ACLs), intrusion detection systems, network authentication
### Administrative Controls (managerial)
* Policies, procedures, security awareness training, contingency planning, disaster recovery plans
* Two types: internal policy and legal policy
## Hackers (ethicality)
* **White**: non-malicious, at their request. Paid by company. AKA penetration testers
* **Black**: malicious
* **Grey**: no malicious intent, but not authorized or paid by company
* **Blue**: permission by company, but not employed by company
	* hacker one: centralized bug bounty program
* **Elite**: find and exploit vulnerabilities before anyone else. Can be white/black/grey..
	* 1/10,000
	* very rare
	* who actually makes exploits
* **Script kiddies**: limited skill, using other peoples exploits and tools
## Thread Actors (motivation)
* Script Kiddies
* Hacktivist
	* eg: Anonymous
* Organized Crime
	* well funded
	* sophisticated
* Advanced Persistent Threats (APTs)
	* highly trained & funded groups with covert & open-source intelligence
	* often funded by nation states
	* very good at staying quiet
## Threat Intelligence - Sources
* Timeliness: up to date
* Relevancy: relevant to your situation?
* Accuracy: valid and true
* Confidence level: grading quality of info
	* MISP project - uses **admiralty scale** for grading data and estimative language
		* Source reliability [A-F] (how trustworthy)
		* Information content [1-6] (confirmed & logical)
### Sources
* proprietary
	* threat intelligence as a commercial service provided with subscription fee
* closed-sour