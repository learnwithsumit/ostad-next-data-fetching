import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getBlogPost from "@/lib/getBlogPost";
import getPostComments from "@/lib/getPostComments";
import { Suspense } from "react";

// export const dynamicParams = false;

export default async function SingleBlog({ params }) {
    const id = params.id;

    const postPromise = getBlogPost(id);
    const commentsPromise = getPostComments(id);

    // request in parallel
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    // incremental data fetching
    const post = await postPromise;

    return (
        <div>
            <section>
                <h1 className="font-bold text-lg">{post.title}</h1>

                <div className="mt-5">{post.body}</div>

                <div className="mt-6">
                    <Suspense fallback={<h3>Loading comments...</h3>}>
                        <Comments commentsPromise={commentsPromise} />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: "" + post.id,
    }));
}
