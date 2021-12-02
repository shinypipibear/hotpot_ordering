/** fetch all the data from server when the window is loading**/
window.onload = function () {
    fetch('http://127.0.0.1:8090/home').then(function(response){
        response.json().then(function(data){
            console.log(data);
            document.getElementById('mainbc').src='images/'+data[0].src;
            var banner_src=data[1].src;
            document.getElementById('banner').style.background='url(images/'+banner_src+') no-repeat';
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/soup').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='soup_base_item';
            soup_base_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/beef').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='beef_item';
            beef_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/pork').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='pork_item';
            pork_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/poultry').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='poultry_item';
            poultry_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/seafood').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='seafood_item';
            seafood_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/vegetable').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='vegetable_item';
            vegetable_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/snacks').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='snacks_item';
            snacks_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/drinks').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='drinks_item';
            drinks_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });

    fetch('http://127.0.0.1:8090/ricennoodles').then(function(response){
        response.json().then(function(data){
            console.log(data);
            var id ='rice_item';
            rice_data=data;
            getCards(data,id);
        });
    }).catch(function(e){
        swal({
            title: "Sorry!",
            text: "Connection failed!",
            icon: "warning",
        }).then(function(){
            location.reload();
        });
        console.log('error: ' + e.toString());
    });


};

var table='abc';
/** hide the welcome page and show the menu**/
async function start(){
    document.getElementById('mainbc').style.display='none';
    document.getElementById('homepage').style.display='none';
    document.getElementById('order').style.display='block';
    table = await swal("Please enter your table number:", {
        content: "input",
    }).then(function(value) {
        value=value.trim();
        if(isNaN(value) || value==null || value===''){
            swal("You need to enter a number");
            start();
        }
        return value;
    });
    document.getElementById('table_num').innerHTML= 'Your table number is ' + table;
    change_menu("soup_base");
}

/** creat food cards dynamically depending on the json **/
function getCards(data,id){
    for(let i in data){
        var div=document.getElementById(id);

        var div_1=document.createElement("div");
        div_1.className='card';
        div_1.style.width='18rem';
        div_1.style.display='inline-block';
        div_1.style.margin='5px';
        div.appendChild(div_1);

        var img = document.createElement("img");
        img.src='images/'+data[i].src;
        img.className='card-img-top';
        img.style.maxHeight='170px';
        div_1.appendChild(img);

        var div_2=document.createElement("div");
        div_2.className='card-body';
        div_1.appendChild(div_2);

        var p=document.createElement("p");
        p.className='card-text';
        p.innerText=data[i].id;
        div_2.appendChild(p);

        var span=document.createElement("span");
        span.innerText='£'+data[i].price;
        div_2.appendChild(span);

        var a=document.createElement("a");
        a.href='#addtocart';
        a.style.verticalAlign='middle';
        a.style.marginLeft='10px';
        a.addEventListener("click",Cart);
        const arr=[];
        arr.push(data[i].id);
        arr.push(data[i].price);
        arr.push(data[i].src);
        a.id=arr;
        div_2.appendChild(a);

        var span_1=document.createElement("span");
        span_1.className='material-icons';
        span_1.innerText='add_circle_outline';
        a.appendChild(span_1);
    }
}

items=[];
items_price=[];
items_num=[];

/** add the food into cart**/
function Cart(e){
    var id=e.currentTarget.id;
    var arr=[];
    arr.push(id.split(","));
    var div=document.getElementById("cart_item");

    var item=arr[0][0];

    if(items.includes(item)){
        addmore(item);
    }
    else{
        items.push(item);
        var name=arr[0][0];
        var div_1=document.createElement("div");
        div_1.className='card';
        div_1.style.width='18rem';
        div_1.style.display='inline-block';
        div_1.style.margin='5px';
        div_1.id=name.split(' ').join('_')+'card';
        div.appendChild(div_1);

        var img = document.createElement("img");
        img.src='images/'+arr[0][2];
        img.className='card-img-top';
        img.style.maxHeight='170px';
        div_1.appendChild(img);

        var div_2=document.createElement("div");
        div_2.className='card-body';
        div_1.appendChild(div_2);

        var p=document.createElement("p");
        p.className='card-text';
        p.innerText=arr[0][0];
        div_2.appendChild(p);

        var span=document.createElement("span");
        span.innerText='£'+arr[0][1];
        span.id=name.split(' ').join('_')+'price';
        div_2.appendChild(span);

        var a=document.createElement("a");
        a.href='#addtocart';
        a.style.verticalAlign='middle';
        a.style.marginLeft='10px';
        a.className=arr[0][0];
        a.addEventListener("click",add);
        div_2.appendChild(a);

        var span_3=document.createElement("span");
        span_3.style.marginLeft='10px';
        num=1;
        span_3.id=name.split(' ').join('_')+'num';
        span_3.innerText=num;
        div_2.appendChild(span_3);

        var a_1=document.createElement("a");
        a_1.href='#addtocart';
        a_1.style.verticalAlign='middle';
        a_1.style.marginLeft='10px';
        a_1.className=arr[0][0];
        a_1.addEventListener("click",minus);
        div_2.appendChild(a_1);

        var span_1=document.createElement("span");
        span_1.className='material-icons';
        span_1.innerText='add_circle_outline';
        a.appendChild(span_1);

        var span_2=document.createElement("span");
        span_2.className='material-icons';
        span_2.innerText='remove_circle_outline';
        a_1.appendChild(span_2);
    }
}
/** if the user click add botton on menu page instead of cart page,
 * add up the quantity on cart page insteadt of creating a new card**/
function addmore(name){
    var id=name.split(' ').join('_')+'num';
    var num_p=parseInt(document.querySelector('#'+id).textContent);
    document.querySelector('#'+id).innerText=num_p+1;
}

/** add up the quantity**/
function add(e){
    var name=e.currentTarget.className;
    var id=name.split(' ').join('_')+'num';
    var num_p=parseInt(document.querySelector('#'+id).textContent);
    document.querySelector('#'+id).innerText=num_p+1;
}

/** decrease the quantity
 * remove the card when it reaches zero**/
function minus(e){
    var name=e.currentTarget.className;
    var id=name.split(' ').join('_')+'num';
    var num_p=parseInt(document.querySelector('#'+id).textContent);
    var num_n=num_p-1;
    if(num_n===0){
        var node=document.getElementById(name.split(' ').join('_')+'card');
        node.innerHTML='';
        node.parentNode.removeChild(node);
        let i = items.indexOf(name);
        items.splice(i,1);
    }
    else{
        document.querySelector("#"+id).innerText=num_n;
    }
}

/** change to different menu**/
function change_menu(id){
    var item=["soup_base","beef","pork","poultry","seafood","vegetable","snacks","drinks","rice","cart"];
    for(let i in item){
        if(item[i]===id){
            document.getElementById(item[i]+'_item').style.display='block';
        }
        else{
            document.getElementById(item[i]+'_item').style.display='none';
        }
    }
}

/** send order information back to server**/
function order(){
    console.log(items);
    for(let i in items){
        var name=items[i];
        var num_id=name.split(' ').join('_')+'num';
        var price_id=name.split(' ').join('_')+'price';
        var num=document.querySelector('#'+num_id).textContent;
        var price=document.querySelector('#'+price_id).textContent;
        items_num.push(num);
        items_price.push(price);
    }
    var order=[];
    for(var i=0,len=items.length; i<len; i++){
        var order_item={};
        order_item.table=table;
        order_item.id=items[i];
        order_item.price=items_price[i];
        order_item.number=items_num[i];
        order.push(order_item);
    }

    var comment_server=[];
    var comment=document.getElementById('comment_content').value;
    var comment_item={};
    comment_item.table=table;
    comment_item.comment=comment;
    comment_server.push(comment_item);

    fetch('http://127.0.0.1:8090/comment', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(comment_server), // data can be `string` or {object}!
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    fetch('http://127.0.0.1:8090/order', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(order), // data can be `string` or {object}!
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    swal({
        title: "Good job!",
        text: "You have successfully ordered!",
        icon: "success",
    }).then(function(){
        location.reload();
    });


}

/**Return to the top button
* @description code source - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp*/
mybutton = document.getElementById("myBtn");

/** @function scrollFunciton
 * @description Show the button when the user scrolls down 20px from the top of the page */
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/** @function topFunction
 * @description Scroll back to the top when the user clicks the button*/
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}