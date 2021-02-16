const highestUsage = require('../utils/highestUsage');

module.exports = function(app, database) {
    // Get the operators usage of a user.
    app.get('/operator/usage', async (req, res) => {
        const userId = req.body.userId;

        if(!userId){
            res.status(400);
            res.json({message: "Bad Request", details: "You need to pass correct body containing the userId"});
        }

        const query = {
            userId: userId
        };
        var document = await database.collection('operatorTracking').findOne(query);
        var highestUsedOperator = null; // By default
        if (document != null && document.usage != null) {
            highestUsedOperator = highestUsage(document.usage);
        }

        res.status(200);
        res.json({
            operator: highestUsedOperator
        });
    });
}
