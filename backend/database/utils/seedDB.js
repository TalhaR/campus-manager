const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "1",
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "12",
	});

	const dummy_student = await Student.create({
		firstname: "Jane",
      	lastname: "Shmo",
		email: "test@gmail.com",
		gpa: 0.4
	});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;