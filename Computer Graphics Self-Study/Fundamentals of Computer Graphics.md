---
updated: 2025-01-10_14:21:43-05:00
---

Using the following book as a base:
* [[Fundamentals_of_Computer_Graphics_5th.epub]]

# Basics
* z-buffer essential to proper back to front border 
* Geometric manipulation used in graphics pipeline largely accomplished in 4d coordinate space with fourth *homogeneous* coordinate that helps with perspective
	* manipulated using matrices and vectors
## IEEE Floating point standards
* $\infty$, $-\infty$, $NaN$
* ![[Pasted image 20250110133251.png]]
* ![[Pasted image 20250110133327.png]]
* NaN arithmetic = NaN, boolean = false
* ![[Pasted image 20250110134725.png]]

## Design Considerations
* Efficiency: memory access more important than operation counts now
* Some essential classes:
	* vector2 (x,y)
	* vector3 (x,y,z)
	* hvector (homogeneous vector with four components)
	* rgb
	* transform (4x4 matrix) 
	* image (2d array of rgb)