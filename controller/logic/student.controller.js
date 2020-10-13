/** Dto */
console.log("student controller");
const studentdto = require("../../model/dto/student.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

/**Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");


exports.createProgram = (req, res, next) => {
    facultydto.getByid({ id: req.body.program_id }, (err, data) => {
        if (data.length == 0) {
            return res.status(400).json(
                {
                    error: "no existe id de programa"
                }
            );

        }
        let std = {
            code: req.body.code,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            carrer: req.body.carrer,
            program_id: data[0]._id
        };
        studentdto.create(std, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            let r = config.get("roles").student;
            let user = {
                name: std.name,
                lastname: std.lastname,
                username: std.code,
                password: helper.EncrypPassword(req.body.password),
                role: r
            }
            userDto.create(user, (err, u) => {
                if (err) {
                    studentdto.delete({ _id: data._id }, (e, data) => {
                        return res.status(400).json(
                            {
                                error: err
                            }
                        );
                    });
                }
                notHelper.sendSMS(std.phone);
                res.status(201).json(
                    {
                        info: data
                    }
                );
            });
        });
    });

};



exports.updateStudent = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.bodyphone,
        carrer: req.body.carrer
    };
    studentdto.update({ _id: req.body.id }, std, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {

    studentdto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByCode = (req, res, next) => {

    studentdto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteStudent = () => {

    studentdto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(204).json(
            {
                info: data
            }
        );
    });
};