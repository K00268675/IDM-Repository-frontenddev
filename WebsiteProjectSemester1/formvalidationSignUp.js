"use strict";
$(document).ready( () => {

    // move focus to first text box
    $(".email").focus();
    
    // the handler for the click event of the submit button
    $(".member_form").submit( event => {
        let isValid = true;
        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $(".email").val().trim();
        if (email == "") { 
            $(".email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $(".email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $(".email").next().text("");
        }
        $(".email").val(email);
            
        // validate the password entry
        const password = $(".firstpass").val().trim();
        if ( password.length < 6) {
            $(".firstpass").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $(".firstpass").next().text("");
        }
        $(".firstpass").val(password);
        
        // validate the verify entry
        const verify = $(".Passwordretry").val().trim();
        if (verify == "") { 
            $(".Passwordretry").next().text("This field is required.");
            isValid = false; 
        } else if (verify !== password) { 
            $(".Passwordretry").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $(".Passwordretry").next().text("");
        }
        $(".Passwordretry").val(verify);
      
        // validate the first name entry
        const Username = $(".Username").val().trim();
        if (Username == "") {
            $(".Username").next().text("This field is required.");
            isValid = false;
        } else {
            $(".Username").next().text("");
        }
        $(".Username").val(firstName);
                    
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});


