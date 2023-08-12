export default async function Comments({ commentsPromise }) {
    const comments = await commentsPromise;

    return (
        <div className="mt-10">
            <h2 className="font-bold">Post comments</h2>
            <div className="mt-4">
                {comments.map((comment) => (
                    <p className="pb-3" key={comment.id}>
                        {comment.id} - {comment.body}
                    </p>
                ))}
            </div>
        </div>
    );
}
