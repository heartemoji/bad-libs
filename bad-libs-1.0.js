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
    var inputform = document.getElementById("element-form");
    
    
    for(var i = 0; i < inputform.elements.length - 1; i++){
        entries.push(inputform.elements[i].value);
    }
    
    while(inputform.firstChild){
        inputform.removeChild(inputform.firstChild);
    }
    
    document.getElementById("form-header").innerHTML = "Here is your Bad-lib!";
    
    var fullText = [];
    
    form.text.forEach(function(e){
        if(e == "0"){
            fullText.push(entries.shift());
        }
        else{
            fullText.push(e);
        }
        
        console.log(e); 
    });

    
    
    var p = document.createElement("p");
    p.innerHTML = fullText.join("");
    inputform.append(p);
    
    var newBadlib = document.createElement("input");
    newBadlib.setAttribute("type","submit");
    newBadlib.classList.add("btn");
    newBadlib.classList.add("submit-button");
    newBadlib.value = "New Bad-lib!";
    newBadlib.onclick = function(){
        
        $("output").remove("input-form");
        inputform.submit();
        location.reload();
    };

    inputform.append(newBadlib);
    
});
