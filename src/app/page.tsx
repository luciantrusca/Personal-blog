import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../components/header/Header';
import { PrismaClient } from '../../generated/prisma/client';
import LatestPost from '@/components/main_section/LatestPost';
import RecentPosts from '@/components/main_section/RecentPosts';
import MainContent from '@/components/main_section/MainContent';

const prisma = new PrismaClient();

export default async function App(){
    const latestPosts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        where: {
            published: false,
        },
        include: {
            author: true,
            tags: true,
        },
        take: 3
    });

    return (
        <main className="p-4 bg-[#e7d9b4] min-h-screen flex flex-col">
            <Header />
            <div className="flex min-h-screen">
                <Sidebar />
                <LatestPost post={latestPosts[0]} />
                <MainContent recent_posts={latestPosts} />
            </div>
        </main>
    );
}
