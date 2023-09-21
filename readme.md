# Calendar using HTML, CSS & Javascript

### Tech Stack
HTML, CSS & Javascript

### Features
- Display current month calendar, also highlight current date.
- We can go to previous or next month calendar
- we can manually select any month or year from dropdown.
### Logic
- Main Logic is to find for 1st day (i.e. sunday, monday etc) & last date/no. of days (i.e. 30/31/28 etc) of that month of that year.
- After finding these two we'll start printing date from 1st day till last date. i.e. if 1st day is saturday & no. of days is 30 then 1st date we'll print below of saturday then go on printing till 30. 
- To Find 1st day of any Month of any year:

> `var firstDay=new Date(year,Month_No_0_Based,1).getDay()`

- in 1st day we will get 0 for sunday similarly 1,2,3..6 for mon, tue, ..., saturday

- To Find last date/no. of days in any Month of any year:

> `var lastdate=new Date(year,Month_No_1_Based,0).getDate()`
- in 0 based month 0 will go for january in 1 based month 1 will go for january.