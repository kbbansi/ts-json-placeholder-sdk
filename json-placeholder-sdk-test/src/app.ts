import Typicode from "@kwabena-ampofo/json-placeholder-sdk_ts";

const client = new Typicode({
    apiKey: "123"
});

// client.getPosts().then((posts) => {
//     console.log(posts);
// })

client.getPostById(12).then((post) => {
    console.log(post.body);
})