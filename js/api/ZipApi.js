import 'whatwg-fetch';
import axios from 'axios';

class ZipApi {
	static sendZip(zipAndEmail){
		return fetch('/api/zips', {
			method: 'POST',
			body: JSON.stringify(zipAndEmail),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
			return res.json();
		})
		.catch(err => {
			console.log(err);
		})
	};
}


export default ZipApi;