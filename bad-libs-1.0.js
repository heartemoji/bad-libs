/*
    Bad-libs script source
    April 4th, 2018
    Tom '<3' Amaral
*/

var entries = []; //Array that stores the user entries

var form; //the JSON form to be received from the template JSON file


$(document).ready(function(){
    var fieldContainer = $("#inputs");
    var fields;
    
    
    fetch("bad-libs-forms.json")
        .then((resp) => resp.json())
        .then(function(json){
            //grab a random bad-lib form
            form = json.templates[Math.floor(Math.random()*json.templates.length)];
            fields = form.elements;
            
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

$("#element-form").submit(function(e){
    e.preventDefault();
    var form = document.getElementById("element-form");
    
    for(var i = 0; i < form.elements.length - 1; i++){
        entries.push(form.elements[i].value);
    }
    
    while(form.firstChild){
        form.removeChild(form.firstChild);
    }
    
    document.getElementById("form-header").innerHTML = "Here is your Bad-lib!";
    
    var p = document.createElement("p");
    p.innerHTML = "test";
    
    form.append(p);
    
    console.log(entries);
    //form.submit();
});
