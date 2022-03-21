---
updated: 2022-03-21_11:06:05-04:00
---
# Software Engineering
* Process course
* Tools
	* Git
	* Trello
	* Python
	* Django
	* Docker
	* Selenium
* What is Agile?
	* (values)
	* **individuals and interactions** over processes and tools
	* **working software** over comprehensive documentation
	* **customer collaboration** over contract negotiation
	* **responding to change** over following a plan
	* (principles)
	* deliver valuable software early and often
	* welcome changing requirements
		* even late in dev. process
	* business & dev ppl must work together daily
	* build projects around motivated individuals
		* give them environment and support they need
		* trust them to get the job done
	* communicate face-to-face
	* **working software is the primary measure of progress**
	* sustainable development 
	* continuous attention to technical excellence and good design enhances agility
	* simplicity & efficiency 
* What is Scrum?
	* implementation of agile
	* (name is a reference to rugby)
	* team moves as a unit not as a relay
	* Steps:
		* Stories - gathering requirements 
			* non-technical
			* eg: when I check equipment I want to know all the information about it
		* Tasks - technical requirements needed for stories
			* technical
			* eg: host a db of equipment, track equipment with barcodes, barcodes to sql queries, display results to user
		* Sprints - working code at fixed intervals
			* sets a pace for the project
			* 1-4 weeks per sprint
		* Post-Sprint
			* demo software to customer
			* discuss direction of the project
			* adjust as needed
	* All team members should meet face-to-face 
	* Cost of scrum is difficulty with remote workers
	* SCRUM board is a visualization of the state of the project
	* burndown chart
* Time
	* 3-4h outside of class for every credit the course is
	* 9-12h a week for this class
		* Meetings
			* Sprint Planning (30m)
			* Daily Scrum (15m)
			* Backlog Refinement (30m max)
			* Sprint R&R planning (15m)
		* Work Sessions (as a team)
			* regularly scheduled or on the fly
		* Individual Development Time


* Team Repo on Gitea with Dr. Grabowski


* Sprint Planning Meeting
* Daily Scrum
* Backlog Refinement
* Sprint R&R Planning
* Every Friday is R&R (review & retrospective)
* What is check-in deadline?

1:10pm Friday - Backlog Refinement & Sprint Planning
M-F Work Days

Daily Scrum
M  - 1pm (Virtual)  Daily Scrum
Tu - 9am (Virtual)  Daily Scrum
W  - 10:50 am-11:10 am (In person in 208) Daily Scrum
Th - 5:30pm-(7pm latest) Daily Scrum and R&R planning (Virtual)
F  - 1:10pm Backlog Refinement & Sprint Planning(In person in Lounge or other location)

Prod & Builds

# Scrum
## Roles
1. Product Owner
	* responsible for what will be developed, in what order
	* define features, release date
	* responsible for profitability of product (ROI)
	* prioritize features according to market value
	* adjust features and priority every iteration, as needed
	* accept or reject work results
2. Scrum Master
	* represent management to the project
	* responsible for enacting scrum values & practices
	* shield the team from external interferences
	* remove impediments
	* ensure team is fully functional and productive
	* enable close cooperation across all roles and functions
3. Development Team
	* usually 5-9
	* cross functional:
		* programmers, testers, ux designers
	* full time

## Product Backlog
* Prioritized list of work to be done
* Most valuable work done first
* Product owner responsible for determining and managing the sequence of work
* Reprioritized at start of sprint
* Each item has value to users or customers
* User centered view (sprint backlog has technical requirements)
* *Grooming*: creating/refining product backlog
* each item is sized, relative sizes
	* 'story points' vs 'ideal days'
		* real days needed vs best case days needed
## Sprints
* typically 2-4 weeks
* constant duration, better rhythm
* designed, coded, tested during sprint
* timeboxed
* no goal altering changes, or personnel changes during sprint
### Sprint goal
* a short statement of what the work will be focused on during the sprint
	* "support sql server in addition to oracle"
	* "support more technical indicators than company ABC with realtime data"

```nomnoml
[Engine| [Database | User Login | SaveGames | Statistics] | [Game Logic | isValid() | isWon() | decodeGameState()] | [Server| player & AI connection | Authentication | PlayerLobby ]] <-> [AI Client | Simple Rule Set | ML Option]
[Engine] <-> [Frontend Implementation | decodeGameState() | drawBoard() | Observe Running Games Page]

```

```nomnoml
[Docker-Compose Group |[web| web server 80:80]|[api|Game Logic | Server]|[db| database]|[AI Client| probably a python image]]
```
TODO: Write User Stories

Friday: demo of docker+django project. Working tutorial site.

# TDD
* Test driven development
* Agile: class of dev. approaches that help developers handle uncertainty through ability to adapt to change
* Test constantly and keep code simple
* **Testing is part of design**
* tests are written *before* implementation
```
REPEAT
	write a test (failing)
	make test pass by writing some code
	refactor code
UNTIL (product complete)
```
* provides implementation feedback (does it work?)
	* Adds to a **regression suite**: set of tests designed to ensure that software is accurate and correct
* provides design feedback (is it well structured?)

## Acceptance test
* implement a feature by writing an acceptance test
	* exercises the functionality of a particular feature
## Walking Skeleton
* working implementation of thinnest possible slice of real functionality

# Problems in Software Engineering
* *Failure*: any deviation of observed behavior from the specified behavior
* *Erroneous state (error)*: the state in which further processing by the system can lead to a failure
* *Fault (bug)*: the mechanical or algorithmic cause of a behavior
* *Validation*: the activity of checking for deviations between the observed behavior of a system and it's specification
## Common Problems:
* Interface Specification Faults
	* mismatch between client & server
	* mismatch between requirements and implementation
* Algorithmic Faults
	* missing initialization
	* incorrect branching condition
	* missing test for null
* Mechanical Faults
	* operating temps out of spec
## Handling Problems:
* *Modular Redundancy*: Building redundant infrastructure to handle a mechanical fault without going into an error state
* *Fault Avoidance*
	* Methodology to reduce complexity
	* Configuration management to prevent inconsistency
	* Apply verification to prevent algorithmic faults
	* Use reviews
* *Fault Detection*
	* Testing to provoke failures in a planned way
	* Debugging to find and remove faults of an observed failure
	* Monitoring to deliver info about state (used in debugging)
* *Fault Tolerance*
	* exception handling
	* modular redundancy
	
> "testing can only show the presence of bugs, not their absence" - Dijkstra

* Testing is not free...
	* overhead & practical limitations
	* we should try and automate it as much as possible

## Our Approach to Minimizing Software Failures
* use methodology
* follow good practices
* adhere to ethical standards
* code review?


# Technical Debt
* Time spent on not-quite-right code counts as interest on debt
* Way of talking about development to the business people