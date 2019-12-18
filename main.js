document.addEventListener('DOMContentLoaded', function () {
  
  const calcbtn = document.querySelector('.btn-primary');
  const resetbtn = document.querySelector('.btn-danger');
  
  calcbtn.addEventListener('click', () => {

    document.getElementById("results").innerHTML = "";
    const dob = document.getElementById('dob').value;
    const futuredate = document.getElementById('futuredate').value;
    
    let millSecBetweenDOBAnd1970 = Date.parse(dob);
    let millSecBetweenNowAnd1970 = Date.parse(futuredate);
    let millSec = millSecBetweenNowAnd1970 - millSecBetweenDOBAnd1970;
    
    let ageInMilliseconds = millSec;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;
    
    let years = Math.round(ageInMilliseconds/year);
    let months = Math.round(ageInMilliseconds / month);
    let days = Math.round(ageInMilliseconds / day);
    let hours = Math.round(ageInMilliseconds/hour);
    let minutes = hours * 60;
    let seconds = minutes * 60;
    
    let p = document.createElement('p');
    p.setAttribute('id', 'ageInDays');
    p.style.padding = "1rem";
    p.innerHTML = ("Age in years: "+years+ 
    "</br> Age in months: "+months+ 
    "</br> Age in Days: "+days+
    "</br> Age in hours: "+hours+ 
    "</br> Age in minutes: "+minutes+ 
    "</br> Age in seconds: "+seconds+ 
    "</br> Age in Milliseconds: " +ageInMilliseconds);
    
    let h3 = document.createElement('h3');
    h3.setAttribute('id', 'result');
    h3.innerHTML = ("RESULT:");
    h3.style.background = "rgb(261,162,60)";
    h3.style.margin = "10px 0";
    h3.style.padding = "1rem";
    let resultBox = document.getElementById("results");
    resultBox.appendChild(h3);
    resultBox.appendChild(p);
    resultBox.style.border = "1px solid black";
    resultBox.style.background = "#bbb";

  });
    

  resetbtn.addEventListener('click', () => {
    document.getElementById('dob').valueAsDate = null;
    document.getElementById('futuredate').valueAsDate = null;
    document.getElementById('ageInDays').remove();
    document.getElementById('result').remove();
  });  

});

  