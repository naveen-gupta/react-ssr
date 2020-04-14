const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    const html = `
    <html>
        <head>
        </head>
        <body>
            <div id="root">
                ${content}
            </div>
        </body>
        <script src="bundle.js"></script>
    </html>
    `;
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});