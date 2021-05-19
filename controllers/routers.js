module.exports = app => {

    app.get('/', (req, resp) => {
        resp.send('Servidor ok');
    });
};