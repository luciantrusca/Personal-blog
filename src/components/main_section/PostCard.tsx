import { Post } from "~/generated/prisma";

export default function PostCard({post}: {post: Post}) {

    return (
        <section className="flex flex-col items-center border-2 p-4 rounded-lg border-[#5B614E] bg-[#F7E6B8]">
            <img className="w-20" src={post.coverUrl ?? undefined}/>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.updatedAt.toLocaleDateString()}</p>
        </section>
    )
}