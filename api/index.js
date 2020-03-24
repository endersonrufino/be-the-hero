const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        nome: 'Enderson',
        dev: true,
    });
});

app.listen(3333);