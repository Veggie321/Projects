

function pButtons(){

for(i=1;i<=40;i++){
var btn = document.createElement("BUTTON");
btn.innerHTML = "Problem "+ i;
btn.setAttribute("onclick", "pFunc("+ i+")");
document.getElementById("Buttons").appendChild(btn);

}


}


var questions=["Calculate the sum of two numbers from the input",
 "The heron's formula is calculated here and the area is displayed as the output", 
"The roots of the quadratic equation is outputted", 
"The output is whether the equation has 2 distinct roots, no roots or its roots are identical",
"Outputs the corresponding letter grade entered within the range of 0 to a 100", 
"Receives a positive number (in base 10) and output its binary representation (in base 2)",
"Receives a postive number and checks whether the number is a power of 2 or not", 
"Output yes or no if the input is divisible by 6, but when a 0 is inputted, the total count of numbers will be outputted",
"The input will be splitted and displayed in the form of a list",
"Outputs the number of 7s in the input", 
"The sum of the digits entered will be calculated and outputted",
"A yes or no is outputted when the reverse of the number and the number entered are equal", 
"The factorial of the input is calculated and outputted", 
"Displays the output of the first n values of the Fibonacco sequence",
"Outputs the n rows in pairs of XX",
"Outputs whether the number is positive or negative until 0 is received, where it will disable the button so function cannot be exectuted anymore",
"Outputs the total number of postive and negative numbers entered when a 0 is inputted", 
"Receives 3 numbers and outputs them in non-ascending order",
 "Counts if the first 4 digits entered have the same amount of postive and negative numbers as the last",
"Outputs if the input is a prime number or not",
"Each time the button is clicked, your myFunction() code should call a sub-algorithm that generates a random number between 0 and 1 (including 0 and excluding 1). If the random number is less than 0.5, then it outputs “HEADS”, otherwise “TAILS.” ",
"When a button is pressed, it should pass the value shown in the button (e.g., 10, 20, 30, or 40) to a function. In your JavaScript code, your function should call a sub-algorithm that generates a random whole number between 1 and the passed value, inclusively.",
"Write a function in JavaScript that has one parameter. When each button is pressed, it should pass the value shown in the button (e.g., 10, 20, 30, or 40).", 
"Each time you click, have your JavaScript function compute two random numbers from 1 to 6. These represent dice.",
"The current time and date are shown in an array with a format with each of the variables organized in a specific structure.",
"Each time your button is clicked, you should reduce the global variable by 1 and show the result. When the variable gets less than 0, the output changes to BOOM!",
"Output the sum of numbers from 10 to 30, inclusively.",
"Outputs a*b without using multiplication.",
"Receives two positive whole numbers and compute their Greatest Common Divisor using the following Euclidean technique.",
"Output the modulus of a and b without using the modulo operation.",
"Outputs all the prime numbers that is less than or equal to the input.",
"Outputs if the sum of 4 numbers are the same.",
"Devise a program to receive a positive whole number and output its binary representation",
"Output an upside down Triangle using a nested loop.",
"Output the multiplication table of n tables.",
"Output the sum of values stored in an array of 5 elements.",
"Using arrays, the characters are outputted in rearranged order.",
"factorial without using multiplication.",
"The multiplication of 2 matrices.",
"The multiplication of 2 matrices." 

]





function pFunc(num) {
  

 document.getElementById("problem").innerHTML=questions[num-1]+"</p>";
 
   
  

  document.getElementById("flowchart").setAttribute("src","Images/Problem"+[num]+"_Flowchart.jpg");


  


 document.getElementById("flowchart").style.display="none";
  
  



 document.getElementById("js").setAttribute("src","Images/Problem"+[num]+"_Javascript.jpg");
 document.getElementById("js").style.display = "none";



 
 
 
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}





function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
   document.getElementById("flowchart").style.display="inline"; 

	 
  }
  else {
   document.getElementById("flowchart").style.display="none";
	  
	  
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
   document.getElementById("js").style.display="inline";	 
	 
	 
  }
  else {
   document.getElementById("js").style.display="none";	 
	  
	  
  }
}

function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
    document.getElementById("another").style.display="inline";	 
     
     
   }
   else {
    document.getElementById("another").style.display="none";	 
      
      
   }
 }




function zoomIn() {
   document.getElementById("flowchart").style.width="200%";
}

function zoomOut() {
   document.getElementById("flowchart").style.width="100%";
}
