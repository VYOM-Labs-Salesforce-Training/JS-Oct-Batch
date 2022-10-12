function validate()
{ 
   if( document.StudentRegistration.firstname.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.StudentRegistration.firstname.focus() ; // foucs():-set the element as active elelment in current document
     return false;
   }
   if( document.StudentRegistration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }  
   
   if( document.StudentRegistration.paddress.value == "" )
   {
     alert( "Please provide your Postal Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   
  if( document.StudentRegistration.mobileno.value == "" ||
  isNaN( document.StudentRegistration.mobileno.value) ||
  document.StudentRegistration.mobileno.value.length != 10 )
{
alert( "Please provide a Mobile No in the format 123." );
document.StudentRegistration.mobileno.focus() ;
return false;
} 
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }       
   return( true ); 
}