const fs = require ('fs');
const path = require('path');

const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'shopping.json');

module.exports = class Shopping{

    constructor(shopping){
        this.shopping = shopping;
    }
    saveItem(){
        fs.readFile(pathToFile,(error, fileContent) =>{
        let items = [];
        if (!error) {
         items = JSON.parse(fileContent);
        } else{
            console.log(error);
        };

        items.push(this);

        fs.writeFile(pathToFile, JSON.stringify(items), (error) => {
            console.log('Error', error);
        });
        });
    }
    static fetchAllShopping(callBack){
        fs.readFile(pathToFile,(error, fileContent) => {
            if (error) {
                callBack([]);
            };
            callBack(JSON.parse(fileContent));
        })

    }
}