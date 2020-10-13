/** Dto */
const programdto = require("../../model/dto/program.dto");
const facultydto = require("../../model/dto/faculty.dto");
const config = require("config");

exports.createProgram = (req, res, next) => {

    facultydto.getByid({ id: req.body.faculty_id }, (err, data) => {
        if (data.length == 0) {
            return res.status(400).json(
                {
                    error: "no existe id de la facultad"
                }
            );

        }
        let program = {
            code: req.body.code,
            name: req.body.name,
            name_director: req.body.name_director,
            faculty_id :data[0]._id
        };
        programdto.create(program, (err, data) => {
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
    });

};


exports.updateProgram = (req, res, next) => {
    let program = {
        code: req.body.code,
        name: req.body.name
    };
    programdto.update({ _id: req.body.id }, program, (err, data) => {
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
    programdto.getAll({}, (err, data) => {
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

    programdto.getByCode({ code: req.params.code }, (err, data) => {
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



exports.deleteProgram = () => {
    programdto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(204).json();
    });
};