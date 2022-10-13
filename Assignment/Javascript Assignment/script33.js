<html>
   /*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script33.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Wednesday, October 12th 2022, 2:05:16 pm
 * Author: karan
 * Queswtion-- concatenate two string

 * Copyright (c) 2022 Your Company
 */

<head>
</head>
<body>
   <h2>Concatenate multiple string variables.</h2>
   <h4>Concatenating the "Welcome " "To " "The " "Javascript ", using the <i> + </i> operator.</h4>
   <div id = "string1"> </div>
   <h4>Concatenate the strings "Hello " "Programmers! " using the <i> $ </i> operator.</h4>
   <div id = "string2"> </div>
</body>
   <script>
      var string1 = document.getElementById("string1");
      var string2 = document.getElementById("string2");
      let str1 = "Welcome ";
      let str2 = "To ";
      let str3 = "The ";
      let finalString = str1 + str2 + str3 + "Javascript. ";
      string1.innerHTML = finalString;
      str1 = "Hello ";
      str2 = "Programmers! ";
      string2.innerHTML = `${str1} ${str2}`;
   </script>
</html>