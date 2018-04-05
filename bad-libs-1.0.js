/*
    Bad-libs script source
    April 4th, 2018
    Tom '<3' Amaral
*/
$(document).ready(function(){
    var fieldContainer = $("#inputs");
    var fieldStyle = $(".field");
    var form;
    var fields;
    
    fetch("bad-libs-forms.json")
        .then((resp) => resp.json())
        .then(function(json){
            //grab a random bad-lib form
            form = json.templates[Math.floor(Math.random()*json.templates.length)];
            fields = form.elements;
            console.log(fields);
            
            //populate page with fields for each element
            fields.forEach(function(element){
                var input = document.createElement("input");
                input.placeholder = element;
                input.classList.add("field");
                input.required = true;
                fieldContainer.append(input);
            });
        
    });

});

