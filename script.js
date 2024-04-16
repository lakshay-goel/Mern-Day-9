const express = require('express');
const fs = require('fs');
const app = express();
const fsPromises = require("fs/promises");  

app.use(express.json());    
app.get('/api/product', (req, res) => {
    const data = fs.readFileSync('./data.json', "utf8");
    const obj = JSON.parse(data).products;
    res.json({
        status : 'success',
        results: arr.length,
        data:{
            products: arr
        }
    })
    // res.send('<h2>Hello!</h2><h3>hi!!</h3>');
});


app.post('/api/product',async (req, res) => {
    // console.log(req.body);
    const data = req.body;
    data.id = 123;
    // console.log(data);

    const db = await fsPromises.readFile("./data.json","utf8");
    const  arr=JSON.parse(db);
    const len=arr.length;
    const newProduct = data;
    if (len== 0) {
        // const newProduct = data;
    newProduct.id=1;
    // console.log(arr);
    // fsPromises.writeFile("./data.json",JSON.stringify(arr));
    // console.log(arr);
}

else {
    // const newProduct = data;
    newProduct.id= (arr[len-1].id)+1;
    // console.log(newProduct);
}
        arr.push(newProduct);
        fsPromises.writeFile("./data.json",JSON.stringify(arr));

        res.json(
            {
                status :'success',
                results: 1,
                data:{
                    newProduct: newProduct,
                }
            }
        )
});


app.put('./api/products',(req, res) =>{
    console.log(req);
    res.send("work in progress");
    const data = req.body;
    console.log(data);
})
app.listen(1400);




//splice and flapmap and reduced

