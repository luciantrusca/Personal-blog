import { Post, PrismaClient } from '~/generated/prisma/client';
import PostCard from './PostCard';

export default async function RecentPosts({ recent_posts, className }: { recent_posts: Post[]; className?: string[] }) {
    recent_posts = recent_posts.slice(0, 4); // Limit to 4 recent posts

    // Render the recent posts
    return (
    <section className={`flex flex-row bg-[#F7E6B8] border-2 border-[#6B7133] p-4 ${className?.join(" ")}`}>
        <div className="p-2">
            <h1 className="text-lg font-bold">Recent posts</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore ...
            </p>
        </div>
        <div className="flex flex-row gap-4 justify-center">
            {recent_posts.map((post: Post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    </section>)
}