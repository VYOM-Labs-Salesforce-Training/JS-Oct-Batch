/*
 * Filename: Untitled-1
 * Path: <<projectpath>>
 * Created Date: Wednesday, October 12th 2022, 9:54:29 pm
 * Author: Pooja Parab
 * 
 * Copyright (c) 2022 Your Company
 Write a JavaScript program to get the length of a JavaScript object.
 */
<!DOCTYPE html>
<html>
<body>

<p>Click the button to create an array, then display its length.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
  document.getElementById("demo").innerHTML = fruits.length;
}
</script>

</body>
</html> 