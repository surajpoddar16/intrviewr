var redis = require('redis');

exports.connect = connect;

function connect(callback) {
    global.redisClient = redis.createClient();
    return callback(null);
}
