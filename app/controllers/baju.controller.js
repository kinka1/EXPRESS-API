const db = require('../models');
const Baju = db.baju

//create
exports.create = (req, res) => {
    req.body.id_penjual = new Number(req.body.id_penjual);
    
    Baju.create(req.body)
        .then(() => {
            res.send({ message: "Data baju berhasil disimpan" });
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error menginputkan data baju."
            });
        });
}

//find
exports.findAll = (req, res) => {
    Baju.find()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error mendapatkan data Baju."
            });
        });
}

//update
exports.update = (req, res) => {
    const id = req.params.id;
    req.body.id_penjual = new Number(req.body.id_penjual);

    Baju.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Baju tidak ditemukan dengan id" + id
                });
            } else {
                res.send({ message: "Data baju berhasil diupdate" });
            }
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error memperbarui data Baju dengan id" + id
            });
        });
}

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Baju.findByIdAndDelete(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Baju tidak ditemukan dengan id" + id
                });
            }
            res.send({ message: "Baju berhasil dihapus!" });
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Gagal menghapus Baju dengan id" + id
            });
        });
}

//show
exports.show = (req, res) => {
    const id = req.params.id;
    Baju.findById(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Baju tidak ditemukan dengan id" + id
                });
            }
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error mendapatkan Baju dengan id " + id
            });
        });
}