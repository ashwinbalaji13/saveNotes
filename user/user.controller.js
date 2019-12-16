let { User } = require("./user.model");
let jwt = require("jsonwebtoken");

let HttpServerCodes = require("http-status-codes");
module.exports = {
    async createUser(req, res) {
        // force: true will drop the table if it already exists'
        console.log(req.body, " params ", req.query);
        let { notes, name } = req.body;
        // console.log(req.query);
        try {
            // User.sync({ force: false }).then(async () => {
            //     //   // Table created
            //     let result = await User.create({
            //         user: user,;
            //         notes: notes
            //     });\
            User
                .findOrCreate({ where: { username: name }, attributes: ['id', 'username'] })
                .then(([user, created]) => {
                    let result = user.get({
                        plain: true
                    })
                    console.log(created);
                    const token = jwt.sign({ id: result.id }, "ahgd123", { expiresIn: "1d" });
                    return res.status(HttpServerCodes.OK).json({ message: "success", token });
                    // return res.status(HttpServerCodes.OK).send("success");
                });
        } catch (err) {
            res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send(err);
        }
    },
    async getNotes(req, res) {
        console.log("inside getnotes");
        User.findAll({ where: {}, raw: true }).then(
            users => {
                res.status(HttpServerCodes.OK).json(users);
            },
            err => {
                res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send(err);
            }
        );
    },
    async deleteNotes(req, res) {
        console.log("delete notes", req.query);
        User.destroy({
            where: {
                id: req.query.id
            }
        }).then((result) => {
            if (result == 1) {
                res.status(HttpServerCodes.OK).send({ mes: "success", status: 200 });
            } else {
                res.status(HttpServerCodes.NOT_FOUND).send({ mes: "Notes not found", status: HttpServerCodes.NOT_FOUND });
            }
        }, (err) => {
            res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send({ mes: "Query error", status: HttpServerCodes.INTERNAL_SERVER_ERROR });

        })
    },
    async getNotesById(req, res) {
        console.log("find notes by id", req.query);
        User.findById(req.query.id).then((result) => {
            if (result) {
                res.status(HttpServerCodes.OK).send(result);
            } else {
                res.status(HttpServerCodes.NOT_FOUND).send({ mes: "Notes not found", status: HttpServerCodes.NOT_FOUND });
            }
        }, (err) => {
            res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send({ mes: "Query error", status: HttpServerCodes.INTERNAL_SERVER_ERROR });

        })
    }


};
