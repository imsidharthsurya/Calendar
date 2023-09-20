var tdd=new Date();
var mnt=tdd.getMonth();
var yrrs=tdd.getFullYear();
//will bring current to the top of dropdown
var optns=new Option(yrrs,yrrs);
document.getElementById("year").add(optns,undefined);

//bring current month to the front
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var objSelect = document.getElementById("month"); 
//Set selected
setSelectedValue(objSelect, months[mnt]);

function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}

//add option using js
var yrs=1900;
for(;yrs<=2050;yrs++){
    var newOption = new Option(yrs,yrs);
    document.getElementById("year").add(newOption,undefined);
}




//get first day of any month give month in 0 based indexing and return day in 0 based indexing as well
function getFirstDayOfMonth(year, month) {
  return (new Date(year, month, 1)).getDay();
}
//how many days are there in that month pass month in 1 based indexing
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
var today=new Date();
var currentMonth=today.getMonth();
var currentYear=today.getFullYear();
var selectMonth=document.getElementById("month");
var selectYear=document.getElementById("year");


showCalendar(currentMonth,currentYear);

//when go to the next month
function next(){
    currentYear=(currentMonth===11)?currentYear+1:currentYear;
    currentMonth=(currentMonth+1)%12;       //since after 11 0th month will start since 0 based indexing
    showCalendar(currentMonth,currentYear);
}


//when go the previous month
function previous(){
    currentYear=(currentMonth===0)?currentYear-1:currentYear;
    currentMonth=(currentMonth===0)?11:currentMonth-1;
    showCalendar(currentMonth,currentYear);
}


//when go to a specific year and month
function jump(){
    currentYear=parseInt(selectYear.value);
    currentMonth=parseInt(selectMonth.value);
    showCalendar(currentMonth,currentYear);
}


//show calendar for a particular date
function showCalendar(month,year){
    //find 1st day of the month and last date of month(i.e. no. of days in the month).
    var firstday=getFirstDayOfMonth(year,month);
    var md=month;
    var monthfortotaldays=++md;
    var totaldays=getDaysInMonth(year,monthfortotaldays);     //since month in 1 based index

    //select table body where we will be creating rows and cols and adding dates
    var tbdy=document.getElementById("calendar-body");


    //clearing all previous cells or data in case of date change or differs
    tbdy.innerHTML="";

    //add month and year to card header
    document.getElementById("monthandyear").innerText=months[month]+" "+year;

    var tempHtml="";
    var date=1;         //for every month and year during show calendar date will start from 1.
    //now creating table rows and add dates
    for(var i=0;i<6;i++)        //max 6 rows in calendar to shows dates
    {
        //create row
        //tbdy.innerHTML="<tr>";
        tempHtml="";
        tempHtml+="<tr>";
        for(var j=0;j<7;j++)        //max 7 cols since only 7 days
        {
            //creating cols and filling dates
            if(i==0 && j<firstday)      //only in 1st row we are gonna skip and only if the staring day is later than sunday
            {
                tempHtml+="<td></td>";
            }
            else if(date>totaldays)
            {
                break;
            }
            else{
                
                if(date==today.getDate() && year==today.getFullYear() && month==today.getMonth())
                {
                    tempHtml+="<td class='bg-info'>"+date+"</td>";
                }
                else{
                    tempHtml+="<td>"+date+"</td>";
                }
                date++;
            }
        }
        tempHtml+="</tr>";
        tbdy.innerHTML+=tempHtml;
    }
    
}
