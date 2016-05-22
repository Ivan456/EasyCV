function saveData(){
    var httpRequest = new XMLHttpRequest(),
        reqObject = {
            email: document.getElementById('loginEmail').value,
            name: document.getElementById('name').innerHTML,
            photo: document.getElementById('photo').innerHTML,
            generalInformation: document.getElementById('generalInformation').innerHTML,
            education: document.getElementById('education').innerHTML,
            desiredPosition: document.getElementById('desiredPosition').innerHTML,
            expirience: document.getElementById('expirience').innerHTML,
            mainSkills: document.getElementById('mainSkills').innerHTML,
            additionalSkills: document.getElementById('additionalSkills').innerHTML,
            languages: document.getElementById('languages').innerHTML,
            aboutMyself: document.getElementById('aboutMyself').innerHTML
        };

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
               alert(httpRequest.responseText);
        }; 
    };
        
    httpRequest.open('POST', '/saveData', true);

    httpRequest.send(JSON.stringify(reqObject));
};