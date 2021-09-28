# SQL
* Most widely used commercial language
* NOT Turing machine equivalent language
* has lots of extensions and APIs which work with it

## Commands
* `SELECT` - extracts data from a database
* `UPDATE` - updates data in a database
* `DELETE` - deletes data from a database
* `INSERT INTO` - inserts new data into a database
* `CREATE DATABASE` - creates a new database
* `ALTER DATABASE` - modifies a database
* `CREATE TABLE` - creates a new table
* `ALTER TABLE` - modifies a table
* `DROP TABLE` - deletes a table
* `CREATE INDEX` - creates an index (search key)
* `DROP INDEX` - deletes an index

### Examples:
* `create table r(ID char(5),name varchar(20)) `
* `insert into instructor values('10211','Smith', 'Biology',66000)
* `delete from student` (removes every row)
* `drop table r` (delete the actual table)
* `alter table r add A D` 
	* where A is the name of the attribute to be added to r and d is the domain
* `alter table r drop A`
	* attribute of relation r 

## Domain Types
* char(n)
* varchar(n)
	* variable length
* int
* smallint
* numeric(p,d) precision and digits to the right of point (3,1)=0.32
* real, double precision (floating point and double)
* float(n) with precision of at least n digits

## Integrity Constraints
* primary key
* foreign key references r
* not null
* 
## Query Structure:
* Typically of this form:
	* **select** $A_1, A_2, A_3...$
	* **from** table 
	* **where** P

## String Operations
* %: wildcard
	* %dar%  finds dar in any string
* \_: matches any character
* Escape character: \
* Order by:   etc
* between X and Y

## Set Operations
* [Select] Union [Select]
* [Select] intersect [Select]
* [Select] Except [Select]
* Add "all" to the end when retaining duplicates
* any operation with null is null
* Unknown is different to null
* comparisons between something and null it returns unknown
* Aggregate Functions:
	* Count
	* average
	* min
	* max
	* sum
* Group By: Average salary of instructors in each department:

```mysql
select dept_name, avg(salary) as avg_salary
from instructor
group by dept_name;```

* Having, filters output
* not in ('option a', 'option b')

## Nested subquery
* where P can be 

If you pull out a value, and want to use as a value, put all command in

* select distinct X from Y where Z not in (select X1 from Y1 where Z1)
* where (X, Y,Z) in (select X, Y, Z from ....)
* 

## 'some' clause
* select name from instructor where salary > some (select salary from instructor where dept name = 'biology')
* Example: 
	0,5,6 : 5 < some = true (6)


## 'all' clause
* find names of instructors where salary is greater than all instructors in biology
	* where salary > all (other table)

## 'exists' clause
* if value found in subtable, accept
* select course_id where exists (bigger table)
* exists(some command returning a table)
	* if table has any rows, it will be true
	* otherwise not

## 'unique' clause
* tests if subquery contains duplicates

## 'distinct' clause is for select clause (but similar to unique)
 
 ^^ A lot of these can be used in the from clause too
 
 ## 'with' clause
* defining a temporary table ...


## Scalar Subquery
* one which is used where a single value is expected

!! Need to review select !!


## delete removes rows
* `delete from instructor` (removes all rows)

## insert
* insert into X values (xyz)
* insert into X select * from Y (assuming attributes match)

**Select from where** in a subquery is evaluated first

## Update
* update instructor set salary = salary * 1.05

## Case.. else
```MySQL
case
	when
	when
	else
end
```

