const jimp = require('jimp');
const fs = require('fs');

let masPic = [];
let directoryPath = "test"; // !!!path to directory where images are located!!!

function cropper(dir, cropW, cropH, x, y) {
	x = (!x)? 0 : x;
	y = (!y)? 0 : y;

	let readDirectory = fs.readdirSync(dir, (err, files) => {
	let mas = []
	files.forEach(file => {
		mas.push(file);
	});
	return mas;
});

	for(let elem of readDirectory) {
		jimp
			.read(dir + "/" + elem)
			.then(img => {
				return img
					.crop(x, y, (img.bitmap.width - cropW), (img.bitmap.height - cropH))
					.write(elem);
			})
			.catch(err => {console.log(err)});
		}
	}

cropper(directoryPath, 0, 64);
