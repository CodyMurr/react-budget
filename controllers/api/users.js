const User = require('../../models/user');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
	create,
	login,
};

async function create(req, res) {
	try {
		// Add the user to the database
		const user = await User.create(req.body);
		const token = createJWT(user);
		// Yes, we can use res.json to send back just a string
		// The client code needs to take this into consideration
		res.json(token);
	} catch (err) {
		// Client will check for non-2xx status code
		// 400 = Bad Request
		res.status(400).json(err);
	}
}

async function login(req, res) {
	try {
		// Find the user by their email address
		const user = await User.findOne({ email: req.body.email });
		if (!user) throw new Error();
		// Check if the password matches
		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) throw new Error();
		// res.json(user);
		res.json(createJWT(user));
	} catch (err) {
		res.status(400).json(err);
	}
}

function createJWT(user) {
	return JWT.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '12h' },
	);
}
