require('dotenv').config();
const Parser = require('rss-parser');
const parser = new Parser();
const nodemailer = require('nodemailer');

function main() {
	/*
		Requirements:
			- Disable your 2FA requirements for your gMail account
			- Allow running less secure apps
	*/

	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.SENDING_EMAIL_ADDRESS,
			pass: process.env.SENDING_EMAIL_PASSWORD,
		},
	});

	transporter.sendMail(
		{
			from: process.env.SENDING_EMAIL_ADDRESS,
			to: process.env.TO_EMAIL,
			subject: 'Economic Times News',
		},
		(err, info) => {
			if(err) console.log(err);
			else console.log(info);
		}
	);
}

function parseRSS() {}
main();