   var num_1 = parseFloat(prompt("Enter the first number"));
   var num_2 = parseFloat(prompt("Enter the second number"));
   var operator = prompt("Enter the operator");

   let result;

   if(operator == "+") {
       result = num_1 + num_2;
   }
   else if(operator == "-") {
       result == num_1 - num_2;
   }
   else if(operator == "*") {
       result == num_1 * num_2;
   }
   else if(operator == "/") {
       result == num_1 / num_2;
   } 
   else {
       result = "Invalid Input"
   }
   console.log(result)
