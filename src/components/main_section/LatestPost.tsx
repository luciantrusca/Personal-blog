import { Post } from "~/generated/prisma";

export default function LatestPost({post, className}: {post: Post; className?: string[]}) {
    const preview = post.content.slice(0, 100) + "..."; // Preview content
    
    return (
        <section className={`bg-[#F7E6B8] border-2 border-[#6B7133] p-4 ${className?.join(" ")}`}>
            <h1 className="text-lg font-bold">Latest Post</h1>
            <h1>{post.title}</h1>
            <div style={{ display: "flex", gap: "1rem" }}>
                <img className="w-45 p-4" src={post.coverUrl ?? ""} alt={post.title} />
                <article>{preview}</article>
            </div>
        </section>
    )
}