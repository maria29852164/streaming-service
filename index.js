
import ffmpeg from 'ffmpeg'

const path=require('path')
const dir=path.join(__dirname,'video.mp4')

try {
	new ffmpeg(dir, function (err, video) {
		if (!err) {
			console.log('The video is ready to be processed');
			return video
		} else {
			console.log('Error: ' + err);
		}
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}


