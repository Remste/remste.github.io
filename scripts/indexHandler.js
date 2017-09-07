var Remste = Remste || {};
Remste.GitHub = Remste.GitHub || {};

Remste.GitHub.Index = function () {
    
        return {
    
            // Public functions and variables
    
            initialise: function () {
                
                $("#headerContent").load("https://remste.github.io/_includes/Header.html"); 
                $("#footerContent").load("https://remste.github.io/_includes/Footer.html"); 
                
            }
        };
    
    }();
    

$(document).ready(function () {
    Remste.GitHub.Index.initialise();
});