const calculateRoutes = require('./calculate_routes');
const usageRoutes = require('./usage_routes');

module.exports = function(app, db) {
    calculateRoutes(app, db);
    usageRoutes(app, db);
};