var str = "Grade 7 has ended, uggcf://vzthe.pbz/n/LFuW[(cot(pi/4)*4)]nH";                                                                                            
var printedstr = "";
var n = 0;
var speed = 20;
setInterval(myTimer, speed);

function myTimer() {
  const d = new Date();
  if(str[n]!=undefined){
      printedstr = printedstr.concat(str[n]);
      document.getElementById("demo").innerHTML = printedstr;
      n++;
  }
}

