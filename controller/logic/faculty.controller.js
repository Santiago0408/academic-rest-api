/** Dto */
const facultydto = require("../../model/dto/faculty.dto");
const config = require("config");

exports.createFaculty = (req, res, next) => {
    let faculty = {
        id: req.body.id,
        name: req.body.name,
        name_dean :req.body.name_dean
    };
    facultydto.create(faculty, (err, data) => {
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


exports.updateFaculty = (req, res, next) => {
    let faculty = {
        id: req.body.id,
        name: req.body.name,
        name_dean: req.body.name_dean
    };
    facultydto.update({ _id: req.body.id }, faculty, (err, data) => {
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
    facultydto.getAll({}, (err, data) => {
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
exports.getByid = (req, res, next) => {

    facultydto.getByid({ id: req.params.id }, (err, data) => {
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

exports.deleteFaculty = () => {
    facultydto.delete({ _id: req.body.id }, (err, data) => {
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