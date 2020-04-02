document.addEventListener('DOMContentLoaded', function() {
	const container = document.querySelector('.container');

	let usersData;
	let postsData;

	Promise.all([getPosts(), getUsers()])
		.then(([posts, users]) => {
			renderPosts(posts, users)
		});

	function renderPosts(posts, users) {
		clear();
		const list = createPostsList(posts, users);
		container.appendChild(list);
	}

	function renderPost(post, author, comments) {
		clear();
		goBack();
		const el = createPostElement(post, author, comments);
		container.appendChild(el);
	}

	function clear() {
		container.innerHTML = '';
	}


	// DOM elements

	function goBack(){
		const button = document.createElement('button');
		button.innerText = 'Back to posts';
		button.addEventListener('click', () => {
			clear();
			renderPosts(postsData, usersData);
		});
		container.appendChild(button);
	}

	function createPostsList(posts, users) {
		const ul = document.createElement('ul');

		posts.map(post => {
			const li = document.createElement('li');
			const a = document.createElement('a');

			const author = users[post.userId];

			a.innerHTML = `<b>${post.title}</b> Author: <i>${author.name}</i>`;
			a.addEventListener('click', () => {
				getComments(post.id)
					.then((comments) => {
						renderPost(post, author, comments);
					})
			});

			li.appendChild(a);
			ul.appendChild(li);
		});

		return ul;
	}

	function createPostElement(post, author, comments) {
		const content = document.createElement('div');
		content.innerHTML = `
			<h3>${post.title}</h3>
			<p>Author: <i>${author.name}</i></p>
			<p>${post.body}</p>
		`;

		const commentsList = createCommentsList(comments);
		content.appendChild(commentsList);

		return content;
	}

	function createCommentsList(comments){
		const content = document.createElement('ul');
		content.innerHTML = `
			<li><h2>Comments:</h2></li>
		`;
		comments.map(comment => {
			const commentEl = document.createElement('li');
			commentEl.innerHTML = `
				<h4>${comment.name}</h4>
				<p>Author: <i>${comment.email}</i></p>
				<p>${comment.body}</p>
			`;

			content.appendChild(commentEl);
		});

		return content;
	}

	// HTTP calls

	function getUsers(){
		return usersData
			? Promise.resolve(usersData)
			: fetch(`https://jsonplaceholder.typicode.com/users`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				}
			})
				.then(res => res.json() )
				.then(res => {
					usersData = res.reduce((acc, user) => {
						return {...acc, [user.id]: user }
					}, {});

					return usersData;
				});
	}

	function getPosts(){
		return postsData
			? Promise.resolve(postsData)
			: fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				}
			})
				.then(res => res.json())
				.then(posts => {
					postsData = posts;
					return postsData;
				});
	}

	function getComments(id){
		return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			}
		})
			.then(res => res.json())
			.then(res => res);
	}
});