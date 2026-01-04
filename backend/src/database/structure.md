# Database Structure

I want to store my fitness progress in a database.

Fitness progress must be some type of goal I want to achieve by next year

A goal consists of a title, description, a number that is worked towards, a goal has multiple records in a database (snapshot)

A snapshot contains a date and the value of what i had achieved at that point in time

The way a goal is measured could be different (min (this needs to be hit), average of all records)
    - By the end of next year i want to be able to lift 300kg minimum on my second working set
    - By the end of next year i want to have lifted a total amount of 1.000.000kg :O 

## Example

resolution = I want to lift 500 (kg) in total in the first working set for a certain exercise
snapshot (02/01/2026) 350 (kg)



**Models**:
- Goal
    - title
    - description
    - value (kg)
- Snapshot
    - date
    - goal (id)
    - value

A goal could have multiple snapshots (1:N, minimum 0:N)



## Ideas for later

Change current google sheet file, and merge it with this project

You should be able to add sets (warmup, working, failure)

A type of exercise should be easy to add (just a name, and that should do it)


