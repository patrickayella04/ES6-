// ES6 Promises
// An alternative to using callbacks, and an alternative for handling asynchronous operations. They are called promises because while they are handling asynchronous operations, they can promise to do something when that operation is finished. We handling a promise response with a dot then. (.then()) So we will say some function .then and then inside there is what we'll do when the promise is complete. Here we will edit the code below to use Promises instead of callbacks. 

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
];

function createPost(post) {
    // Resolve is what we call when we are done with what we'er doing, and reject is what we call if there is some kind of error that we want to throw. 
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            const error = true; // if you set error to false everything should okay. 

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong')
            }


            // After the posts.push, where we would of had the callback(), we now write resolve();
            resolve();
        }, 2000);
    });
    
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(function (error) {
    console.log(error);
}); // instead of passing getPosts, when we get a promise response, we handle it with .then(). To catch an error we want to add on to .then, .cactch().



