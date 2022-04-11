const ObjectId = require('mongoose').Types.ObjectId;

const idValidator = (req, res, next) => {
    if( !ObjectId.isValid(req.params.id) ){
        return res.status(400).send({ error: "Invalid ID Format." });
    };

    next();
};

const priceValidator = (req, res, next) => {
    if (req.body.price < 0 ){
        return res.status(400).send({ error: "Price must be higher than 0." });
    };

    next();
};

const propertyValidator = (req, res, next) => {
    const unsupportedProperties = []; 

    for (let property in req.body) {
        if ( property !== 'price' && property !== 'name' && property !== 'description' && property !== 'imageUrl' ){
            unsupportedProperties.push(property);
        };
    };

    if(unsupportedProperties.length > 0) {
       return res.status(400).send({ error: `Unsupported properties: ${unsupportedProperties}.` });
    };

    next();
};

const nameValidator = (req, res, next) => {
    if(req.body.name && req.body.name.length > 50){
        return res.status(400).send({ error: "The name is too long." });
    };
    
    next();
}; 

module.exports = { idValidator, priceValidator, propertyValidator, nameValidator };