---
updated: 2022-02-15_12:07:44-05:00
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
* closed-source
	* data derived from own research and analysis 
	* Fire Eye
* open-source
	* able to use without subscription
	* reputation lists
	* EG:
		* US-CERT (computer emergency readiness team)
		* UK NCSC (national cyber security center)
		* AT&T OTX
		* MISP (malware information sharing project)
		* VirusTotal
		* Spamhaus
		* SANS ISC Suspicious Domains

> Threat feeds are a form of *explicit* knowledge, but *implicit* knowledge from experienced practitioners is also useful

**Explicit Knowledge:** knowledge you can write down, see, feel, and touch
**Implicit**: 'more of a feeling based on experience'

**OSINT:** Open source intelligence

## Threat Hunting
* finding threats not discovered by monitoring (proactive, not reactive)
* less disruptive than penetration 
* Process:
	* establish a hypothesis (focusing on likelihood and impact)
	* profiling threat actors and activities (what TTPs might they use, who might they be, what is their objective)
	* hunting
		* logs, filesystem changes etc etc
* need to assume the existing rules have **failed** when hunting

## Attack Framework
* lockheed martin kill chain
	* 7 step
	* ![[Pasted image 20220214190209.png]]
	* C2: weaponized code establishes an outbound channel to a remote server
	* 
* mitre att&ck framework
* diamond model
# Malware
## Virus
* Malicious code that runs without a user's knowledge
* Requires *user action*
* Ten Types:
	* Boot Sector
		* first sector of hdd, loaded into memory on bootup
	* Macro virus
		* embedded into a document
	* Program
		* infect executable programs
	* Multipartite
		* combines boot sector and program virus
		* persistent, could reinstall into os
	* Encrypted
		* encrypts contents to evade antivirus
	* Polymorphic
		* advanced form of encryption
		* every time executed alters decryption module
	* Metamorphic
		* advanced form of polymorphic
		* rewrites entire code before infecting a file
	* Stealth
		* category which includes encrypted, polymorphic, metamorphic
	* Armored
		* layer of protection to cause confusion
	* Hoax
		* Not a virus, more of an attempt to put a virus on their machine

## Worm
* virus with self replication

## Trojans
* Malicious program that performs both desired functionality *and* malicious code.  

### RAT (Remote Access Trojan)

## Ransomware
* most of the time you do not get your data back

## Spyware
* malicious software that gathers user information
* **Adware is a type of spyware**
* Grayware (jokeware)
	* benign nor malicious, but causes weird behavior
	* (crazymouse)

## Rootkit
* software designed to gain admin level control over a system without permission
* Trying to get to Ring 0 ([[Kernel Mode]])
* Admin permissions is probably Ring 1
* Often if they gain access they can hide their existence
* **Shim:** software between two components that intercepts calls and redirects them. 
* Very hard to detect, reimage or reinstall

### DLL Injection
	* loaded at runtime
### Kernel-mode device drivers

## Spam
* abuse of messaging systems

### Open Mail Relay
* email servers have the ability to send mail on behalf of other email servers
#### CAN-SPAM
* established first national standards for sending commercial emails
* You are liable for your server to the FTC if it's being used to send spam

### SPIM (Spam Over Instant Messaging)
## Common Delivery Methods
* Software, messaging, media
* Watering Hole
	* When sites/apps that users use daily gets compromised
*  Typosquatting
	* Buying 'similar' urls and putting malware on it
* Phishing
	* PhishInsight (test your users)

## Botnet & Zombie
* C2: Control node or command node
* most common: ddos
* bitcoin mining

## Active Interception
* basically man in the middle attack

## Privilege Escalation
* exploit to gain access to resources that a normal user isn't able to access

![[Pasted image 20220215112447.png]]
MS17-010: 10th patch by ms in 2017 (wannacry fix)

## Backdoor
* Used to bypass security functions
* Created in 80s by manufacturers & programmers to update and do maintenance 
* Very bad

## Remote Access Trojan (RAT)
* hostile backdoor placed by malware

## Easter Egg
* non-malicious code as a joke
* Could be bad

## Logic Bomb
* malicious code inserted into a program to run when certain conditions are met
* ie: disgruntled employee

## Steps to deal with malware
0. Backup
1. Identify symptoms to identify malware
2. Quarantine to stop malware from spreading
3. Disable System Restore if using Windows
4. Remove malware using software, safe mode etc.
5. Schedule automatic updates and scans (weekly)
6. Enable system restore and create new restore point
7. Provide user security awareness training

If a boot sector virus is suspected, reboot computer from external device

Or put the drive on a new machine and scan from there

## Malware prevention
* Virus protection
* Updates w/ patches
* Good host-based firewall
* Encrypted websites (ssl)
* Worms, Trojans, and Ransomware detected best with anti-malware solutions 
* anti-spyware software
	* symptom: homepage is different

## Exploit Technique
* We used to have malware that would modify executable so when file is run virus is loaded
	* Worm Malware infected memory and RPC over network to hit other hosts
* Modern Malware usually tries to avoid files to prevent detection from security based systems
* APTs are going to use a *dropper*/downloader
	* fileless shellcode (stage 1 dropper)
	* wants to maintain access
	* install a downloader (stage 2 downloader)
	* install remote access trojan 
	* trying to find systems of higher values
		* servers/domain controllers
	* lateral movement to increase footprint
	* Actions on Objectives (whatever they want to do)
	* Concealment

*Dropper*: Malware designed to install or run other types of malware embedded in a payload on an infected host

*Downloader*: Piece of code that downloads other tools

*Shellcode*: Any lightweight code designed to run an exploit on a target (not just shell on target system, as defined by PenTest+)

*Code Injection*: Exploit technique that runs malicious code  with the identification number of a legitimate process
* Masquerading (dropper replaces genuine executable with malicious)
* DLL injection (forces a process to load as part of DLL)
* DLL sideloading (exploit a vulnerability in legitimate program's manifest to load a malicious dll at runtime)
* Process Hollowing (Starts a process in suspended state and rewrites memory locations)

*Anti-forensics Techniques*: encryption, compression, obfuscation

*Living off the Land*: Using standard system tools and packages to perform intrusions (ie using powershell to attack)

# Security Tools
## Firewalls
* Host based firewalls
	* personal firewalls based on software that protect a single computer or server from unwanted internet traffic