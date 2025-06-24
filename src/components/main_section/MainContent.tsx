import { Post } from "~/generated/prisma";
import LatestPost from "./LatestPost";
import RecentPosts from "./RecentPosts";
import { PrismaClient } from "@prisma/client";

export default function MainContent({recent_posts}: {recent_posts: Post[]}) {
    return (
        <section className="">
            <div className="flex flex-col h-full">
                <LatestPost className={["flex-2"]} post={recent_posts[0]} />
                <RecentPosts className={["flex-1"]} recent_posts={recent_posts} />
            </div>
        </section>
    );
}
