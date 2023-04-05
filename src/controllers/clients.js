import ClientRepository from "../../models/clientsModel.js";

function findAll(req, res) {
  ClientRepository.findAll().then((result) => res.json(result));
}

function addClient(req, res) {
  ClientRepository.create({
    nome: req.body.nome,
    email: req.body.email,
  }).then((result) => res.json(result));
}


export default { findAll, addClient };
