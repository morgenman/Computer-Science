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
* 

