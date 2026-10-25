// Write your code here!
 const API-URL=const API_URL = 'https://jsonplaceholder.typicode.com/posts';

 function displayPosts(posts) {
    const ul=document.getElementById('post-list');

    posts.forEach(post=>{
        const li=document.createElement('li');
        const h1=document.createElement('h1');
        h1.textContent=post.title;
        const p=document.createElement('p');
        p.textContent=post.body;

        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
 })
 }

 async function fetchAndDisplayPosts(){
    try{
        const response=await fetch(API-URL);
        if(!response.ok){
            throw new error(HTTP error! status:${response.status});
        }
    }

    const posts=await response.json();
    displayPosts(posts);

    catch(error){
        console.errror("Failed to fetch posts:",error)
    }
 }

 fetchAndDisplayPosts();