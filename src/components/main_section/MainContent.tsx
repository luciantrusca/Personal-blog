import { Post } from "~/generated/prisma";
import LatestPost from "./LatestPost";
import RecentPosts from "./RecentPosts";
import { PrismaClient } from "@prisma/client";

export default function MainContent({recent_posts}: {recent_posts: Post[]}) {
    return (
        <section>
            <div className="flex-1 flex-col">
                {/* <LatestPost post={recent_posts[0]} /> */}
                <RecentPosts recent_posts={recent_posts} />
            </div>
        </section>
    );
}
