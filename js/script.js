
var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');
body.appendChild(ul);

var input = document.getElementsByTagName('input')[0];
var start_swipe;
var end_swipe;

var global_li_change;
body.addEventListener('mousedown',function(){
    start_swipe = event.clientY;

});


body.addEventListener('mouseup',function(){
if (global_li_change === null){
	return;
}

    end_swipe = event.clientY;
    if (end_swipe > start_swipe){
        var distance = end_swipe - start_swipe;
      	distance = Math.floor(distance / 50); 

      	distance =Number(global_li_change.style.order) - Number(global_li.style.order);

 		if (distance>0){
 		for (i = 0; i < ul.children.length; i++){
 			if (ul.children[i] === global_li){
 			}else{
 				if ( Number(ul.children[i].style.order) <= Number(global_li.style.order)+distance && Number(ul.children[i].style.order) > Number(global_li.style.order) ) {
 					 ul.children[i].style.order = Number(ul.children[i].style.order)-1;
 					 ul.children[i].style.order = ul.children[i].style.order.toString();
 				}
			}
 		}

    	global_li.style.order = Number(global_li.style.order) + distance;
    	global_li.style.order = global_li.style.order.toString();

 		}// end of if
    }

    if (end_swipe < start_swipe){
        var distance = start_swipe - end_swipe;
       	distance = Math.floor(distance / 50); 
       	distance = Number(global_li.style.order) -Number(global_li_change.style.order) ;
 		if (distance>0){
 		for (i = 0; i < ul.children.length; i++){
 			if (ul.children[i] === global_li){
 			}else{
 				if ( Number(ul.children[i].style.order) >= Number(global_li.style.order)-distance && Number(ul.children[i].style.order) < Number(global_li.style.order) ) {
 					 ul.children[i].style.order = Number(ul.children[i].style.order)+1;
 					 ul.children[i].style.order = ul.children[i].style.order.toString();
 				}
			}
 		}

    	global_li.style.order = Number(global_li.style.order) - distance;
    	global_li.style.order = global_li.style.order.toString();

 		}// end of if
    }//end of if

    for (i = 0; i < ul.children.length; i++){
    	ul.children[i].children[0].innerHTML = ul.children[i].style.order;
	}
 
	global_li_change = null;
 });

    var fu_new_list_item = function(){
    
        var new_list_item = document.createElement('li');
        ul.appendChild(new_list_item);
        new_list_item.dataset.li_title= input.value;
        new_list_item.dataset.li_order= ul.children.length-1;
        new_list_item.style.order = ul.children.length-1
        new_list_item.addEventListener('mousedown',function(){
            global_li = this;
        });
        new_list_item.addEventListener('mouseup',function(){
       global_li_change = this;
        });
        new_list_item.addEventListener('mouseover',function(){
        	this.children[0].style.display = 'flex';
        	this.children[2].style.display = 'flex';
        })

         new_list_item.addEventListener('mouseout',function(){
        	this.children[0].style.display = 'none';
        	this.children[2].style.display = 'none';
        })

        var div = document.createElement('div');
        div.classList.add('minus');
        new_list_item.appendChild(div);
        div.innerHTML = '-';
        div.addEventListener('dblclick',function(){
            this.parentNode.remove(this.parentNode)
        });

        div = document.createElement('div');
        div.classList.add('title');
        new_list_item.appendChild(div);
        div.innerHTML = new_list_item.dataset.li_title;

        div = document.createElement('div');
        div.classList.add('rename');
        new_list_item.appendChild(div);
        div.innerHTML = 'rename';
        div.addEventListener('dblclick',function(){
            var new_string = prompt('rename');
            this.parentNode.children[1].innerHTML = new_string;
            this.parentNode.dataset.li_title= new_string;
        });

        input.value = '';

    };

    input.addEventListener('keydown', function(){
        if(event.keyCode == 13) {
            fu_new_list_item();
        }


    });
alert('new3');
 function reqListener () {
  alert(xhr.responseText);
}

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/vinferno/sept22-test/master/js/o.txt",false);
xhr.send(null);
alert(xhr.responseText);
reqListener();

var ray = xhr.responseText.split(",");;

alert(typeof(ray));

alert(ray[1]);