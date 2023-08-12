export default async function getAllPosts() {
    console.log("Fetching posts...");

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }

    return res.json();
}
