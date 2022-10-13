/*
 * Filename: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment\script15.js
 * Path: c:\Users\karan\Documents\JavaScript assignment\Javascript Assignment
 * Created Date: Thursday, October 13th 2022, 1:50:11 pm
 * Author: KaranBharam27
 * 15) create a screen for accepting Employee information.
 * Copyright (c) 2022 Your Company
 */


function validate()
{ 
   if( document.StudentRegistration.firstname.value == "" )
   {
     alert( "Please Enter First Name!" );
     document.StudentRegistration.firstname.focus() ; // foucs():-set the element as active elelment in current document
     return false;
   }
   if( document.StudentRegistration.lastname.value == "" )
   {
     alert( "Please Enter Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }  
   
   if( document.StudentRegistration.paddress.value == "" )
   {
     alert( "Please Enter Postal Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   
  if( document.StudentRegistration.mobileno.value == "" ||
  isNaN( document.StudentRegistration.mobileno.value) ||
  document.StudentRegistration.mobileno.value.length != 10 )
{
alert( "Please Enter a valid Mobile No in the format 123." );
document.StudentRegistration.mobileno.focus() ;
return false;
} 
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Choose your Gender: Male or Female" );
   return false;
   }       
   return( true ); 
}