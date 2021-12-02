const express = require('express');
const app = express();
var http = require('http');
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fs = require('fs');
//CORS policy
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method === "OPTIONS") res.send(200);
    else next();
});

app.get('/home', function (req, resp){
    var img_home=[
        {"id":"mainbc","src":"hotpot_home.jpg"},
        {"id":"banner","src":"banner.png"}];
    var img_home_js = JSON.stringify(img_home);
    resp.status(200).send(img_home_js);
});

app.get('/soup', function (req, resp){
    var img_soup=[
        {"id":"Spicy soup base", "price":"3.00","src":"spicy.jpg"},
        {"id":"Tomato soup base", "price":"3.00","src":"tomato.jpeg"},
        {"id":"Mushroom soup base", "price":"3.00","src":"mushroom.jpeg"},
        {"id":"Broth soup base", "price":"3.00","src":"broth.jpeg"},
        {"id":"Dipping sauce", "price":"1.00","src":"dippingsauce.png"}];
    var img_soup_js = JSON.stringify(img_soup);
    resp.status(200).send(img_soup_js);
});

app.get('/beef', function (req, resp){
    var img_beef=[
        {"id":"Beef slices", "price":"8.00","src":"beefslices.jpeg"},
        {"id":"Spicy beef slices", "price":"8.00","src":"spicybeefslices.jpeg"},
        {"id":"Tripes", "price":"6.00","src":"tripes.jpeg"},
        {"id":"Beef balls", "price":"7.00","src":"beefballs.jpeg"},
        {"id":"Beef aorta", "price":"6.00","src":"beefaorta.jpeg"},
        {"id":"Beef tendons", "price":"6.00","src":"beeftendons.jpeg"}];
    var img_beef_js = JSON.stringify(img_beef);
    resp.status(200).send(img_beef_js);
});

app.get('/pork', function (req, resp){
    var img_pork=[
        {"id":"Spam meat", "price":"5.00","src":"spam.png"},
        {"id":"Pork balls with dried ballon flower", "price":"8.00","src":"driedballonflower.png"},
        {"id":"Pork balls with coriander ", "price":"8.00","src":"corianderporkballs.jpeg"},
        {"id":"Pork aorta", "price":"6.00","src":"porkaorta.jpeg"}];
    var img_pork_js = JSON.stringify(img_pork);
    resp.status(200).send(img_pork_js);
});

app.get('/poultry', function (req, resp){
    var img_poultry=[
        {"id":"Duck intestine", "price":"5.00","src":"duckintestine.jpeg"},
        {"id":"Goose intestine", "price":"5.00","src":"gooseintestine.jpeg"},
        {"id":"Duck blood ", "price":"4.00","src":"duckblood.jpeg"},
        {"id":"Quail eggs", "price":"4.00","src":"quaileggs.jpeg"},
        {"id":"Boneless chicken feet", "price":"5.00","src":"bonelesschickenfeet.png"}];
    var img_poultry_js = JSON.stringify(img_poultry);
    resp.status(200).send(img_poultry_js);
});

app.get('/seafood', function (req, resp){
    var img_seafood=[
        {"id":"Fish balls", "price":"6.00","src":"fishballs.jpeg"},
        {"id":"Shrimp balls", "price":"6.00","src":"shrimpballs.jpg"},
        {"id":"Squid tentacles ", "price":"6.00","src":"squidtentacles.jpeg"},
        {"id":"Crab meat sticks", "price":"6.00","src":"crabmeatsticks.jpeg"},
        {"id":"Leatherjacket fish", "price":"7.00","src":"leatherjacketfish.jpeg"},
        {"id":"Kelp", "price":"3.00","src":"Kelp.jpeg"}];
    var img_seafood_js = JSON.stringify(img_seafood);
    resp.status(200).send(img_seafood_js);
});

app.get('/vegetable', function (req, resp){
    var img_vegetable=[
        {"id":"Potato slices", "price":"2.00","src":"potatoslices.png"},
        {"id":"Lotus slices", "price":"2.00","src":"lotusslices.jpeg"},
        {"id":"Chinese leaf ", "price":"2.00","src":"chineseleaf.png"},
        {"id":"Bean sprout", "price":"2.00","src":"beansprout.jpeg"},
        {"id":"Tofu skin", "price":"2.00","src":"tofuskin.jpeg"},
        {"id":"Enoki mushrrom", "price":"2.00","src":"enokimushroom.jpeg"}];
    var img_vegetable_js = JSON.stringify(img_vegetable);
    resp.status(200).send(img_vegetable_js);
});

app.get('/snacks', function (req, resp){
    var img_snacks=[
        {"id":"Crispy pork strip", "price":"7.00","src":"crispyporkstrip.jpeg"},
        {"id":"Glutinous rice cake", "price":"4.00","src":"glutinousricecake.jpeg"},
        {"id":"Bingfen icejelly ", "price":"2.00","src":"bingfen.jpeg"},];
    var img_snacks_js = JSON.stringify(img_snacks);
    resp.status(200).send(img_snacks_js);
});

app.get('/drinks', function (req, resp){
    var img_drinks=[
        {"id":"Water", "price":"0.00","src":"water.jpeg"},
        {"id":"Bubble tea", "price":"4.00","src":"boba.jpeg"},
        {"id":"Juice ", "price":"3.00","src":"juice.jpeg"},];
    var img_drinks_js = JSON.stringify(img_drinks);
    resp.status(200).send(img_drinks_js);
});

app.get('/ricennoodles', function (req, resp){
    var img_ricennoodles=[
        {"id":"Egg fried rice", "price":"3.00","src":"eggfriedrice.png"},
        {"id":"Chongqing xiaomian", "price":"4.00","src":"xiaomian.jpeg"}];
    var img_ricennoodles_js = JSON.stringify(img_ricennoodles);
    resp.status(200).send(img_ricennoodles_js);
});

app.get('/admin/order', function (req, resp){
    var order = fs.readFileSync('./admin/order.json');
    resp.status(200).send(order);
});

app.get('/admin/comment', function (req, resp){
    var comment = fs.readFileSync('./admin/comment.json');
    resp.status(200).send(comment);
});

app.post('/order', function(req, resp) {
    var order_data=req.body;
    var order_data_str = JSON.stringify(order_data);
    fs.writeFile("./admin/order.json", order_data_str,function (err){
        if (err) throw err;
    });
    resp.status(200).send(order_data_str);
});

app.post('/comment', function(req, resp) {
    var comment_data=req.body;
    var comment_data_str = JSON.stringify(comment_data);
    fs.writeFile("./admin/comment.json", comment_data_str,function (err){
        if (err) throw err;
    });
    resp.status(200).send(comment_data_str);
});
module.exports = app;
