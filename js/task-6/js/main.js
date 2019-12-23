document.addEventListener('DOMContentLoaded', function() {
	const body = document.querySelector('body');

	let posts = JSON.parse(localStorage.getItem('posts') || '{}');
	let users = JSON.parse(localStorage.getItem('users') || '{}');

	getPosts();
	getUsers();

	renderPosts(posts);

	function renderPosts(posts){
		let ul = document.createElement('ul');
		posts.map(el => {
			let li = document.createElement('li');
			let a = document.createElement('a');
			let user = document.createElement('span');
			a.appendChild(document.createTextNode(el.title));
			a.addEventListener('click', () => {
				clearAll();
				renderPost(getPost(el.id))
			});

			li.appendChild(a);
			ul.appendChild(li);
		});
		body.appendChild(ul);
	}

	function renderPost(post){
		let title = document.createElement('h2');
		let body = document.createElement('p');
		let container = document.createElement('div');
		title.innerText = post.title;
		body.innerText = post.body;
		container.appendChild(title);
		container.appendChild(body);
		body.appendChild(container);
		renderComments(getComments(post.id));
	}

	function renderComments(comments){
		let container = document.createElement('ul');
		comments.map(el => {
			let comment = document.createElement('li');
			let title = document.createElement('h2');
			let body = document.createElement('p');
			let author = document.createElement('h4');

			title.innerText = el.title;
			body.innerText = el.body;
			comment.appendChild(title);
			comment.appendChild(body);
			container.appendChild(comment);
			body.appendChild(container);
		})
	}

	function getPost(id){
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
			.then(res => res.json() )
			.then(res => renderPost(res));
	}

	function getUsers(){
		fetch(`https://jsonplaceholder.typicode.com/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
			.then(res => res.json() )
			.then(res => localStorage.setItem('users',JSON.stringify(res)));
	}

	function getPosts(){
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
			.then(res => res.json() )
			.then(res => localStorage.setItem('posts',JSON.stringify(res)));
	}

	function getComments(id){
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
			.then(res => res.json() )
			.then(res => res);
	}

	function clearAll(){
		body.innerHTML = '';
	}


});