# Dithered Drawing
* Direct data link to monitor
	* Monitor has double buffer system in place
	* two storage arrays for image, flip flop pointer
* Separate chipset on monitor which pseudorandomly changes pixels
	* Pixels with more of a change get higher priority
	* run out of time, or dropped frame?
* Use freesync like protocol to only redraw when needed
* Chipset 