export default async function getPostComments(id) {
    // await delay(2000);
    console.log("Fetching comments");
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!res.ok) {
        throw new Error("Error fetching comments");
    }

    return res.json();
}
