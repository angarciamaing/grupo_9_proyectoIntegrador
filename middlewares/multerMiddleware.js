const path = require('path');
const multer = require('multer');

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log(file);
		let profilePicturePath = path.join(__dirname, '../public/img/profilePictures');
		cb(null, profilePicturePath);
	},
	filename: (req, file, cb) => {
		let userName = req.body.userName.replace(/ /g, '-').toLowerCase();
		let finalName = userName + '-' + Date.now() + path.extname(file.originalname);
		cb(null, finalName);
	}
});

const upload = multer({ 
	storage: diskStorage, 
	fileFilter: (req, file, cb) => {
		let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
		let fileExtension = path.extname(file.originalname);
		let extensionIsOk = acceptedExtensions.includes(fileExtension);
		if (extensionIsOk) {
			cb(null, true);
		} else {
	
			cb(null, false);
		}
	}
});

const uploadFile = multer({ storage: diskStorage });
//min 32

module.exports = uploadFile