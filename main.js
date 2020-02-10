document.addEventListener('DOMContentLoaded', function () {

  const calcbtn = document.querySelector('.btn-primary');
  const resetbtn = document.querySelector('.btn-danger');

  calcbtn.addEventListener('click', () => {

    document.getElementById("results").innerHTML = "";
    document.getElementById("warnings").innerHTML = "";
    const dob = document.getElementById('dob').value;
    const futuredate = document.getElementById('futuredate').value;

    if (!dob || !futuredate) {
        let p = document.createElement('p');
        p.setAttribute('id', 'warning');
        p.innerHTML = "Please Enter a Date to Calculate!";
        p.style.margin = "0px";
        p.style.backgroundColor = "#bbb";
        p.style.borderBottom = "1px solid black";
        p.style.color = "#ff0000";
        p.style.padding = "1rem";
        let warningsBox = document.getElementById("warnings");
        warningsBox.appendChild(p);

    } else if (dob > futuredate) {
      let p = document.createElement('p');
      p.setAttribute('id', 'warning');
      p.innerHTML = "Date of birth needs to be earlier than the age at date!";
      p.style.margin = "0px";
      p.style.backgroundColor = "#bbb";
      p.style.borderBottom = "1px solid black";
      p.style.color = "#ff0000";
      p.style.padding = "1rem";
      let warningsBox = document.getElementById("warnings");
      warningsBox.appendChild(p);

    } else if (futuredate >= dob) {

      let millSecBetweenDOBAnd1970 = Date.parse(dob);
      let millSecBetweenNowAnd1970 = Date.parse(futuredate);
      let millSec = millSecBetweenNowAnd1970 - millSecBetweenDOBAnd1970;

      let ageInMilliseconds = millSec;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;
      let week = day * 7;
      let month = day * 30;
      let year = day * 365;

      let years = Math.floor(ageInMilliseconds/year);
      let months = Math.floor(ageInMilliseconds/month);
      let weeks = Math.floor(ageInMilliseconds/week);
      let days = Math.floor(ageInMilliseconds/day);
      let hours = Math.floor(ageInMilliseconds/hour);
      let minutes = hours * 60;
      let seconds = minutes * 60;

      let p = document.createElement('p');
      p.setAttribute('id', 'ageCalResults');
      p.style.padding = "1rem";
      p.style.fontSize = "1.3rem";
      p.innerHTML = ("AGE: " +
      "</br> Years: " +years+
      "</br> Months: "+months+
      "</br> Days: "+days+
      "</br> Weeks: "+weeks+
      "</br> Hours: "+hours+
      "</br> Minutes: "+minutes+
      "</br> Seconds: "+seconds+
      "</br> Milliseconds: " +ageInMilliseconds);


      let h3 = document.createElement('h3');
      h3.setAttribute('id', 'result');
      h3.innerHTML = ("RESULT:");
      h3.style.background = "rgb(261,162,60)";
      h3.style.margin = "10px 0";
      h3.style.padding = "1rem";
      let resultBox = document.getElementById("results");
      resultBox.appendChild(h3);
      resultBox.appendChild(p);
      resultBox.style.borderTop = "1px solid black";
      resultBox.style.marginBottom = "2rem";
      resultBox.style.background = "#bbb";

    } else {
      let p = document.createElement('p');
      p.setAttribute('id', 'warning');
      p.innerHTML = "Please Enter a Valid Date!";
      p.style.margin = "0px";
      p.style.backgroundColor = "#bbb";
      p.style.borderBottom = "1px solid black";
      p.style.color = "#ff0000";
      p.style.padding = "1rem";
      let warningsBox = document.getElementById("warnings");
      warningsBox.appendChild(p);

    }
  });


  resetbtn.addEventListener('click', () => {
    document.getElementById('dob').valueAsDate = null;
    document.getElementById('futuredate').valueAsDate = null;
    // let footer = document.getElementById('footer');
    // footer.style.position = "absolute";
    let ageCalResults = document.getElementById('ageCalResults');
    let ans = document.getElementById('result');
    let warningSign = document.getElementById('warning');

    if (ageCalResults && ans) {
      ageCalResults.remove();
      ans.remove();
    } else if (warningSign) {
      warningSign.remove();
    }
  });

});

