const Student = require('../model/student');
const Teacher = require('../model/teacher');
exports.student = async(req, res) => {
    try{
        const {name, email} = req.body;
        const existingUser = await Student.findOne({email: email});
        if(existingUser){
            res.status(400).json({
                success: false,
                message: "User already exists"
            })
        };
        const student = await Student.create({
            name,
            email: email.toLowerCase()
        });
        await student.save();
        res.status(200).json({
            name,
            email: student.email,
            success: true,
            message: "student successfully registered"
        }); 
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server side error");
    }
}

exports.teacher = async(req, res) => {
    try{
        const {name, email} = req.body;
        const existingUser = await Teacher.findOne({email: email});
        if(existingUser){
            res.status(400).json({
                success: false,
                message: "User already exists"
            })
        };
        const teacher = await Teacher.create({
            name,
            email: email.toLowerCase()
        });
        await teacher.save();
        res.status(200).json({
            name,
            email: teacher.email,
            success: true,
            message: "teacher successfully registered"
        }); 
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server side error");
    }
}

exports.list = async(req, res) => {
    try{
        const students = await Student.find().select('name');
        const teachers = await Teacher.find().select('name');

        res.status(200).json({
            students,
            teachers
        });
        console.log(students);
        console.log(teachers);
    }catch(error){
        console.log(error);
        res.status(500).send("Server side error");
    }
}