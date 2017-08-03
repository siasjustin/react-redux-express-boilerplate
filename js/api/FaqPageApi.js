import 'whatwg-fetch';

class FaqsApi {
	static getFaqCategories() {
		return fetch('/api/categories').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	};
	static getAllFaqsData(){
		return fetch('/api/faqs').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	};
	static postFaq(faq){
		return fetch('/api/faqs', {
			method: 'POST',
			body: JSON.stringify(faq),
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
	static updateFaq(faq) {
		return fetch(`/api/faqs/${faq._id}`, {
			method: 'PUT',
			body: JSON.stringify(faq),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
			console.log(res)
		})
	};
	static deleteFaq(id){
		return fetch(`/api/faqs/${id}`, {
			method: 'DELETE',
		}) 
		.then(res => {
			return res.json();
		})
		.catch(err => {
			console.log(err);
		})
	};
	static postFaqCategory(category){
		return fetch('/api/categories', {
			method: 'POST',
			body: JSON.stringify(category),
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
	static updateFaqCategory(category) {
		return fetch(`/api/categories/${category._id}`, {
			method: 'PUT',
			body: JSON.stringify(category),
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
			console.log(res)
		})
	};
	static deleteFaqCategory(id){
		return fetch(`/api/categories/${id}`, {
			method: 'DELETE',
		}) 
		.then(res => {
			console.log("res from delete Api: ", res)
			return res.json();
		})
		.catch(err => {
			console.log(err);
		})
	};
}


export default FaqsApi;