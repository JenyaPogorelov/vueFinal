let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

const app = express();

let jsonParser = bodyParser.json();

app.use(express.static('./dist'));

app.get('/api/good', (req, res) => {
    fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/cart', jsonParser, (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {

        const cart = JSON.parse(data);
        const item = req.body;
        if (!cart.find(element => element.id === req.body.id)) {
            cart.push(item);
        } else {
            cart.find(element => element.id === req.body.id).quantity++;
        }
        console.log(item);
        console.log(cart);
        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.send('ok')
        });

    });
});

app.delete('/api/cart', jsonParser, (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        if (cart.find(element => element.id === +item.id).quantity > 1) {
            cart.find(element => element.id === +item.id).quantity--;
         } else {
            let delIndex = cart.indexOf(cart.find(element => element.id === +item.id));
            cart.splice(delIndex, 1);
        }
        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.send('ok')
        });
    });
});



app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
