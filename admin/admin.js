fetch('comment.json').then(function (response){
    response.json().then(function (data){
        console.log(data);
        var table=data[0].table;
        var comment=data[0].comment;
        var div=document.getElementById('comment');
        var li=document.createElement("li");
        li.style.listStyle='none';
        li.innerText='Table number: '+table+' '+'Comment: '+comment;
        div.appendChild(li);
    });
});

fetch('order.json').then(function(response){
    response.json().then(function(data){
        console.log(data);
        var t_price=[];
        for(var i = 0; i<data.length; i++){
            var table=data[i].table;
            var food_name=data[i].id;
            var food_price=data[i].price;
            var price=parseInt(food_price.substring(1));
            var food_num=data[i].number;
            var num=parseInt(food_num);
            t_price.push(price*num);
            console.log(table,food_name,food_num,food_price);
            var div=document.getElementById('order');
            var li=document.createElement("li");
            li.style.listStyle='none';
            li.innerText=table+' '+food_name+' '+food_price+' '+food_num;
            div.appendChild(li);
        }
        var total=0;
        for(var j =0; j<t_price.length; j++ ){
            total=total+=t_price[j];
        }
        var span=document.createElement("span");
        span.innerText='The total price is '+total;
        div.appendChild(span);
    });
}).catch(function(e){
    console.log('error: ' + e.toString());
});
