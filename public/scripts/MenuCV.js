function MenuCV (id) {
    this.id = id;
};

MenuCV.prototype.initialization = function(){
    document.getElementById(this.id).className = "body__menu-nav_active";
    this.addButton(".PDF", this.savePDF);
    this.addButton("color", this.changeColor);
    this.addButton("hide", this.hideMenu);
    this.addButton("edit", this.editContent);
    this.addButton("add", this.addRow);
    this.addButton("delete", this.deleteField);  
    this.addButton("login", this.login);  
    this.addButton("registration", this.registration);
};


MenuCV.prototype.addButton = function(text, funcOnClick){
    var button = document.createElement("input");
    var place = document.getElementById(this.id);

    button.value = text;
    button.id = text;
    button.type = "button";
    button.addEventListener('click', funcOnClick);
    place.appendChild(button);
};

MenuCV.prototype.savePDF = function(){
    var pdf = new jsPDF('p', 'mm', [297, 210]);
    
    pdf.addHTML(document.getElementById("CV"),  function() {
        pdf.save('CV.pdf');
    });
};

MenuCV.prototype.changeColor = function(){
    var r, g, b;
    r = Math.round(255 - 255*0.3*Math.random());
    g = Math.round(255 - 255*0.3*Math.random());
    b = Math.round(255 - 255*0.3*Math.random());
    document.getElementById("CV").style.background = "rgb("+r+","+g+","+b+")";
};
    
MenuCV.prototype.editContent = function(){
    var thArray = document.getElementsByTagName("th");
    for (var i = 0; i < thArray.length; i++) {
        thArray[i].contentEditable = true;
        thArray[i].style.border = "2px solid #0000FF";
    };
    var editButton = document.getElementById("edit");
    editButton.value = "apply";
    editButton.addEventListener('click', MenuCV.prototype.applyContent);
    editButton.removeEventListener('click', MenuCV.prototype.editContent)
};

MenuCV.prototype.applyContent = function(){
    var thArray = document.getElementsByTagName("th");
    for (var i = 0; i < thArray.length; i++) {
        thArray[i].contentEditable = false;
        thArray[i].style.border = "0px none #0000FF";
    };
    var editButton = document.getElementById("edit");
    editButton.value = "edit";
    editButton.addEventListener('click', MenuCV.prototype.editContent);
    editButton.removeEventListener('click', MenuCV.prototype.applyContent)
    saveData();
};

MenuCV.prototype.addRow = function(){
    var eventAddRow = new Event('addRow');
    document.dispatchEvent(eventAddRow);
};

MenuCV.prototype.deleteField = function(){
    var tdArray = document.getElementsByTagName("tr");
    var arrayLength = tdArray.length;
    document.getElementById("CV").removeChild(tdArray[arrayLength - 1]);
    document.getElementById("CV").removeChild(tdArray[arrayLength - 2]);
};

MenuCV.prototype.hideMenu = function(){
    document.getElementById("menu").className = "body__menu-nav_hide";
    document.getElementById("CV").className = "body__CV-table_hide-menu";
    document.getElementById("CV").addEventListener('click', MenuCV.prototype.showMenu);
};

MenuCV.prototype.showMenu = function(){
    document.getElementById("menu").className = "body__menu-nav_active";
    document.getElementById("CV").className = "body__CV-table_active-menu";
    document.getElementById("CV").removeEventListener('click', MenuCV.prototype.showMenu);
};

MenuCV.prototype.registration = function(){
    var registrationForm = document.getElementById("registrationForm");
    registrationForm.className = "body__registration-form_active";
};

MenuCV.prototype.login = function(){
    var loginButton = document.getElementById("login");
    loginButton.value = "logout";
    loginButton.removeEventListener('click', MenuCV.prototype.login);
    loginButton.addEventListener('click', MenuCV.prototype.logout);
    loginForm.className = "body__login-form_active";
};

MenuCV.prototype.logout = function(){
    var loginButton = document.getElementById("login");
    loginButton.value = "login";
    loginButton.addEventListener('click', MenuCV.prototype.login);
    loginButton.removeEventListener('click', MenuCV.prototype.logout);
};
