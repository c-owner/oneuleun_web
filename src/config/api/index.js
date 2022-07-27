import axios from 'axios';

exports.get = async (url, data) => {
	await axios.get(url, data);
}
