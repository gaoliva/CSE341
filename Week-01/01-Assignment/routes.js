const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment Basics</title></head>');
        res.write('<body><form action="/create-user" method="POST"><label for="username">User name:</label><input type="text" name="username"><label for="age">Age:</label><input type="text" name="age"><label for="hair-color">Hair color:</label><input type="text" name="hair-color"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment Basics</title></head>');
        res.write('<body><ul><li>User 1</li></ul><ul><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    // Send a HTML response with some Page not found text
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;