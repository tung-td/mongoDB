const Student = require('../models/Student')
const students2 = [
    {
        id: '1',
        name: "Dinh",
        address: "Hue"
    },
    {
        id: '2',
        name: "Nam",
        address: "quang nam"
    },
    {
        id: '3',
        name: "Tan",
        address: "da nang"
    },
    {
        id: '4',
        name: "Hung",
        address: "hue"
    },
    {
        id: '5',
        name: "Tri",
        address: "quang tri"
    },
    {
        id: '6',
        name: "Anh",
        address: "hue"
    },
    {
        id: '7',
        name: "Binh",
        address: "da nang"
    }
]
class StudentsController {

    //[GET] /
    async listStudents(req, res) {
        // res.send(students)
        try {
            const listStudents = await Student.find();
            res.status(200).send(listStudents);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }

    //[POST] -- student
    async postStudent(req, res) {
        // students.push(req.body);
        // res.send('OK');

        try {
            const { id, name, address } = req.body
            await Student.create({
                id,
                name,
                address
            })
            res.status(200).send('OK');
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }

    //[GET] -- Student by id
    async studentById(req, res) {
        // var id = req.params.id;
        // var studentId = students.find(function (st) {
        //     return st.id === id;
        // });
        // res.send(studentId);

        try {
            var id = req.params.id;
            const studentById = await Student.findOne({ id })
            console.log(studentById)

            res.status(200).send(studentById);
        } catch (err) {

            console.log(err);
            res.status(500).send(err);
        }
    }

    //[PUT] -- Edit student
    async editStudent(req, res) {
        // var id = req.params.id;
        // var idx = students.findIndex(function (st) {
        //     return st.id === id;
        // });
        // students.splice(idx, 1, req.body);
        // res.send('OK');

        try {
            var id = req.params.id;
            const editStudent = await Student.findOneAndUpdate({ id }, req.body);
            res.status(200).send(editStudent);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }

    //[DELETE] - Delete student
    async deleteStudent(req, res) {
        // var id = req.params.id;
        // var idx = students.findIndex(function (st) {
        //     return st.id === id;
        // });
        // students.splice(idx, 1);
        // res.send('OK');

        try {
            var id = req.params.id;
            Student.findOneAndDelete({ id });
            console.log(id)
            res.send("OK");
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }

}

module.exports = new StudentsController