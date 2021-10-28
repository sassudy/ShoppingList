const Shopping = require('../models/shopping')

exports.getMainPage = (request, response)=>{
    Shopping.fetchAllShopping(shoppingFromFile =>{
        response.render('index.ejs', {shopping: shoppingFromFile});
    
    })
    
};

exports.addShopping = (request, response)=>{
    let userShopping={
        asi:request.body.asi,
        hind:request.body.hind
    };

    let newThing = new Shopping(userShopping);
    newThing.saveItem();
    response.redirect('/');
}