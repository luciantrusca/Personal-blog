import { Post } from "~/generated/prisma";

export default function LatestPost({post}: {post: Post}) {
    const preview = post.content.slice(0, 100) + "..."; // Preview content
    
    return (
        <section>Latest Post
            <h1>{post.title}</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
                <img src={post.coverUrl ?? ""} alt={post.title} />
                <article>{preview}</article>
            </div>
        </section>
    )
}