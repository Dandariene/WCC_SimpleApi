const Agendamento = require('../models/Agendamento');

module.exports = app => {

    app.get('/agendamentos', (req, resp) => {
        Agendamento.listagem(resp); 
        Agendamento.buscaPorId(id, resp)

    });

    app.get('/agendamentos:id', (req, resp) => {
        const id = parseInt(req.params.id)
    })

    app.post('/agendamentos', (req, resp) => {
        const agendamento = req.body;

        Agendamento.inserir(agendamento, resp);
    });
};