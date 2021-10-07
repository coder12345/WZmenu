var page = 0;
// 0 - orders screen
//1 menu select
//2 NA drinks
//3 apps
//4 sands
//5 quesa 
//6 entree
//7 sides
//8 Mods
//8 viewer

var workingcolor = null;
var workingorder = null;
var currentOrder = 1;
var orderstring1 = [];
var ordercolor1 = [];
var orderstring2 = [];
var ordercolor2 = [];
var orderstring3 = [];
var ordercolor3 = [];
var orderstring4 = [];
var ordercolor4 = [];
var orderstring5 = [];
var ordercolo5 = [];
var orderstring6 = [];
var ordercolor6 = [];
var addNo = false;

function addToOrder(item, type, side) {
    if (addNo) {
        if  (currentOrder == 1) {
            orderstring1.push("No " + item);
            ordercolor1.push(type);
            console.log(orderstring1);
        }
        if  (currentOrder == 2) {
            orderstring2.push("No " + item);
            ordercolor2.push(type);
            console.log(orderstring2);
        }
        if  (currentOrder == 3) {
            orderstring3.push("No " + item);
            ordercolor3.push(type);
            console.log(orderstring3);
        }
        if  (currentOrder == 4) {
            orderstring4.push("No " + item);
            ordercolor4.push(type);
            console.log(orderstring4);
        }
        if  (currentOrder == 5) {
            orderstring5.push("No " + item);
            ordercolor5.push(type);
            console.log(orderstring5);
        }
        if  (currentOrder == 6) {
            orderstring6.push("No " + item);
            ordercolor6.push(type);
            console.log(orderstring6);
        }
       addNo = false;
    } else {
        if  (currentOrder == 1) {
            orderstring1.push(item);
            ordercolor1.push(type);
            console.log(orderstring1);
        }
        if  (currentOrder == 2) {
            orderstring2.push(item);
            ordercolor2.push(type);
            console.log(orderstring2);
        }
        if  (currentOrder == 3) {
            orderstring3.push(item);
            ordercolor3.push(type);
            console.log(orderstring3);
        }
        if  (currentOrder == 4) {
            orderstring4.push(item);
            ordercolor4.push(type);
            console.log(orderstring4);
        }
        if  (currentOrder == 5) {
            orderstring5.push(item);
            ordercolor5.push(type);
            console.log(orderstring5);
        }
        if  (currentOrder == 6) {
            orderstring6.push(item);
            ordercolor6.push(type);
            console.log(orderstring6);
        }
       
        
        
    }
     if (side) {
            page = 7;
            redraw();
        }
}
//Makes button for menu
function createMenuItem(name, value, type, side) {
    let li = document.createElement('button');
    li.innerHTML = name;
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
    li.onclick = function () {
      addToOrder(value, type, side);
    }
    return li;
}
function createCustomMod() {
    let li = document.createElement('button');
    li.innerHTML = "Custom";
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
    li.onclick = function () {
        let result = window.prompt("Text", "");
        addToOrder(result, 3);
        
    }
    return li;
}
function createNo() {
    let li = document.createElement('button');
    li.innerHTML = "No"
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
    li.onclick = function () {
        if (addNo == true) {
            addNo = false;
             li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
        } else {
            addNo = true;
             li.style = "background-color: red; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
        } 
        
    }
    return li;
}
function createModSideItem(name, value, type) {
    let li = document.createElement('button');
    li.innerHTML = name;
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display:  block; ";
    li.onclick = function () {
      addToOrder(value, type, false);
      if (type == 2) {
          page = 8;
          redraw();
      }
      
    }
    return li;
}
function createDeleteButton(itemnum, length) {
    let li = document.createElement('button');
    li.innerHTML = "Delete";
    li.style = "background-color: #ff0000; border: 1px #ff0000; color: white; padding: 10px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 45%; display: block; "
    li.onclick = function () {
        workingorder.splice(itemnum, length+1);
        workingcolor.splice(itemnum, length+1);
        
        viewOrder();
         if (currentOrder == 1) {
            ordercolor1 = workingcolor;
            orderstring1 = workingorder;
        }  if (currentOrder == 2) {
            ordercolor2 = workingcolor;
            orderstring2 = workingorder;
        }  if (currentOrder == 3) {
            ordercolor3 = workingcolor;
            orderstring3 = workingorder;
        }  if (currentOrder == 4) {
            ordercolor4 = workingcolor;
            orderstring4 = workingorder;
        }  if (currentOrder == 5) {
            ordercolor5 = workingcolor;
            orderstring5 = workingorder;
        }  if (currentOrder == 6) {
            ordercolor6 = workingcolor;
            orderstring6 = workingorder;
        }  
      
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
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display: block; "
    return li;
}
function createMenuBack() {
    let li = document.createElement('button');
    li.innerHTML = "Back";
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display: block; "
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
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display: block; "
    return li;
}
function createOrderLinker(name, nuumber) {
     let li = document.createElement('button');
    li.innerHTML = name;
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%;  display: block; "
    li.onclick = function () {
        page = 1;
        currentOrder = nuumber;
        
        redraw();
    }
    return li;
}
function createViewer()  {
    let li= document.createElement('button');
    li.innerHTML = "View Order";
    li.style = "background-color: #2c2f33; border: 1px solid gray; color: white; padding: 32px 140px; text-align: center; text-decoration: none; font-size: 16px; width: 97%; display: block;"
    
    li.onclick = function () {
        viewOrder();
    }
     return li;
}
   

function viewOrder()
    {
        
        if (currentOrder == 1) {
            workingorder = orderstring1;
            workingcolor = ordercolor1;
            console.log('changed')
        } 
        if (currentOrder == 2) {
            workingorder = orderstring2;
            workingcolor = ordercolor2;
        }
        if (currentOrder == 3) {
            workingorder = orderstring3;
            workingcolor = ordercolor3;
        }
        if (currentOrder == 4) {
            workingorder = orderstring4;
            workingcolor = ordercolor4;
        }
        if (currentOrder == 5) {
            workingorder = orderstring5;
            workingcolor = ordercolor5;
        }
        if (currentOrder == 6) {
            workingorder = orderstring6;
            workingcolor = ordercolor6;
        }
        console.log(workingorder);
        console.log(workingcolor);
        clearScreen();
        let since1 = 0
        for (let i = 0; i < workingorder.length; i++) {
            
          
                let li = document.createTextNode(workingorder[i]);
                let span = document.createElement("span");
                
                
                console.log(li);
            
                if (workingcolor[i] == 1) {
                    span.style =  "color: white; display: block; padding: 18px 80px; font-size: 16px; font-family: Sans-serif";
                    
                        if (i !=  0) {
                        menu.appendChild(createDeleteButton(i-since1,since1));
                        console.log(since1)
                        console.log(i-since1-1)
                        since1 = 0;
                    }
                }
                if (workingcolor[i] == 2) {
                    span.style = "color: cyan; display: block; padding: 18px 100px; font-size: 16px; font-family: Sans-serif";
                    since1++;
                    console.log(since1);
                }
                if (workingcolor[i] == 3) {
                    span.style = "color: red; display: block; padding: 18px 100px; font-size: 16px; font-family: Sans-serif";
                    since1++;
                    console.log(since1);
                }
            span.appendChild(li);
             menu.appendChild(span);
            
            
        }
        console.log(since1);
        if (workingorder.length > 0) {
            menu.appendChild(createDeleteButton(workingorder.length-since1-1, since1))
        }
         menu.appendChild(createMenuBack());
       
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
    menu.appendChild(createViewer());
    menu.appendChild(createOrderBack());
 
}

        
    if (page == 2) {
        menu.appendChild(createMenuItem('Lemonade',"Lemonade",1,false));
        menu.appendChild(createMenuItem('Coke',"Coke",1,false));
        menu.appendChild(createMenuItem('Diet Coke',"Diet Coke",1,false));
        menu.appendChild(createMenuBack());
        
   
}   
     if (page == 4) {
        menu.appendChild(createMenuItem('WZ Classic',"WZ Classic",1,true));
        menu.appendChild(createMenuItem('Royale', "Royale", 1, true));
        
        menu.appendChild(createMenuBack());
        
        
        
   
}   
    
    
    
    
    
    
    
    if (page == 7) {
        menu.appendChild(createModSideItem('S Fries',"Straight Fries",2));
        menu.appendChild(createModSideItem('W Fries',"Wedge Fries",2));
        menu.appendChild(createModSideItem('Swt Pot',"Sweet Potato Fries",2));
        menu.appendChild(createModSideItem('Tots',"Tater Tots",2));
        menu.appendChild(createModSideItem('Mac',"Mac and Cheese",2));
        menu.appendChild(createModSideItem('Veg Med',"Veggie Melody",2));
        menu.appendChild(createModSideItem('Veg of Day',"Veg of Day",2));
        menu.appendChild(createModSideItem('Slaw',"Coleslaw",2));
        menu.appendChild(createModSideItem('KC',"Chips",2));
        menu.appendChild(createModSideItem('Oranges',"Oranges",2));
        menu.appendChild(createModSideItem('Smashed',"Smashed Potato",2));
        menu.appendChild(createModSideItem('Csr sld',"Caesar Salad",2));
        menu.appendChild(createModSideItem('House sld',"House Salad",2));
        
        
    }
    if (page == 8) {
        menu.appendChild(createMenuBack());
        menu.appendChild(createCustomMod());
        menu.appendChild(createNo());
        menu.appendChild(createModSideItem('No bun',"No bun",3));
        menu.appendChild(createModSideItem('Rare',"Rare",3));
        menu.appendChild(createModSideItem('Med Rare',"Meduim  Rare",3));
        menu.appendChild(createModSideItem('Med',"Meduim",3));
        menu.appendChild(createModSideItem('Med Well',"Med Well",3));
        menu.appendChild(createModSideItem('Well Done', "Well Done", 3));
        menu.appendChild(createModSideItem('No  LTO', "No LTO", 3));
        
       
    }


    
    
    
}
redraw();
//removes screen
function clearScreen() {
    while (menu.hasChildNodes()) {  
  menu.removeChild(menu.firstChild);
}
    console.log("cleared")
}