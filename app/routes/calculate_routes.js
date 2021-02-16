const postfixCalculator = require('postfix-calculator');
const infixToPostfix = require('../conversions/infixToPostfix');
const usageOfOperators = require('../usage/usageOfOperators');
const trackOperators = require('../utils/trackOperators');

module.exports = function(app, database) {
    // Route for calculating mathematical expression - limit to addition, subtraction, multiplication and division for positive integers.
    app.post('/calculate', async (req, res) => {
        const expression = req.body.expression;
        const userId = req.body.userId;

        if(!expression || !userId){
            res.status(400);
            res.json({message: "Bad Request", details: "You need to pass correct body containing the expression and userId"});
        }

        var operatorsUsage = usageOfOperators(expression);

        var postfixFormat = infixToPostfix(expression);
        if (postfixFormat === "Invalid") {
            res.status(400);
            res.json({message: "Bad Request", details: "You need to pass correct expression, please check the expression."});
        }

        var result = postfixCalculator(postfixFormat);

        const query = {
            userId: userId
        };
        const options = {
            upsert: true
        };

        var record = {
            ...query,
            usage: operatorsUsage
        }

        // If exists then get the data from database and override on existing document
        var document = await database.collection('operatorTracking').findOne(query);
        if (document != null && document.usage != null) {
            record.usage = trackOperators(record.usage, document.usage);
        }

        database.collection('operatorTracking').updateOne(query, record, options);
        res.status(200);
        res.json({result});
    });
}
