// This would be much better if we used redis (or similar)
// but for simplicity, we'll just keep things in memory.
// The good news is that this could be swapped out for redis
// quite easily if we wanted to
const memoryCache = require('memory-cache');

const cache = (duration) => {
    return (req, res, next) => {
        const key = '__express__' + req.originalUrl || req.url;
        const cachedBody = memoryCache.get(key)
        if (cachedBody) {
            console.log('Loading from cache...');
            res.setHeader('Content-Type', 'application/json');
            res.send(cachedBody);
            return;
        } else {
            // Capture resulting res.send calls
            res.sendResponse = res.send;
            res.send = (body) => {
                // Convert ms to s
                memoryCache.put(key, body, duration * 1000);
                res.sendResponse(body)
            };
            next();
        }
    };
};

module.exports = cache;