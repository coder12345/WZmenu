var page = 0;
// 0 - orders screen
//1 menu select
//2 NA drinks
//3 apps
//4 sands
//5 quesa 
//6 entree
//7 sides
var currentOrder = 1;
var orderstring1 = [];
var orderstring2 = [];
var orderstring3 = [];
var orderstring4 = [];
var orderstring5 = [];
var orderstring6 = [];
 

function addToOrder(item) {
    
    if  (currentOrder == 1) {
        orderstring1.push(item);
        console.log(orderstring1);
    }
    if  (currentOrder == 2) {
        orderstring2.push(item);
        console.log(orderstring2);
    }
    if  (currentOrder == 3) {
        orderstring3.push(item);
        console.log(orderstring3);
    }
    if  (currentOrder == 4) {
        orderstring4.push(item);
        console.log(orderstring4);
    }
    if  (currentOrder == 5) {
        orderstring5.push(item);
        console.log(orderstring5);
    }
    if  (currentOrder == 6) {
        orderstring6.push(item);
        console.log(orderstring6);
    }
}
//Makes button for menu
function createMenuItem(name, value) {
    let li = document.createElement('button');
    li.innerHTML = name;
    li.onclick = function () {
      addToOrder(value);
    }
    return li;
}
//Back to order selector
function createOrderBack() {
    let li = document.createElement('button');
    li.innerHTML = "Back";
    li.onclick = function () {
        page = 0;
        redraw();
    }
    return li;
}
function createMenuBack() {
    let li = document.createElement('button');
    li.innerHTML = "Back";
    li.onclick = function () {
        page = 1;
        redraw();
    }
    return li;
}


function createLinker(name, gopage) {
    let li = document.createElement('button');
    li.innerHTML = name;
    li.onclick = function () {
        page = gopage;
        redraw();
    }
    return li;
}
function createOrderLinker(name, nuumber) {
     let li = document.createElement('button');
    li.innerHTML = name;
    li.style = "background-color: #4CAF50; /* Green */ border: 1px solid green; color: white; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer; width: 150px; display: block; "
    li.onclick = function () {
        page = 1;
        currentOrder = nuumber;
        redraw();
    }
    
    return li;
}
// get the ul#menu
const menu = document.querySelector('#screen');



//adds to screen
function redraw() {
    clearScreen();
if (page == 0) {
    menu.appendChild(createOrderLinker('1',1));
    menu.appendChild(createOrderLinker('2',2));
    menu.appendChild(createOrderLinker('3',3));
    menu.appendChild(createOrderLinker('4',4));
    menu.appendChild(createOrderLinker('5',5));
    menu.appendChild(createOrderLinker('6',6));
} 
if (page == 1) {
    menu.appendChild(createLinker('NA Drinks',2));
    menu.appendChild(createLinker('Apps',3));
    menu.appendChild(createLinker('Sand',4));
    menu.appendChild(createLinker('Qeusa',5));
    menu.appendChild(createLinker('Entrees',6));
    menu.appendChild(createOrderBack());
 
}

        
    if (page == 2) {
    menu.appendChild(createMenuItem('Lemonade',"Lemonade"));
        menu.appendChild(createMenuItem('Coke',"Coke"));
        menu.appendChild(createMenuItem('Diet Coke'," Diet Coke"));
        menu.appendChild(createMenuItem('Lemonade',"Lemonade"));
        menu.appendChild(createMenuItem('Lemonade',"Lemonade"));
        menu.appendChild(createMenuBack());
   
}   


    
    
    
}
redraw();
//removes screen
function clearScreen() {
    while (menu.hasChildNodes()) {  
  menu.removeChild(menu.firstChild);
}
}