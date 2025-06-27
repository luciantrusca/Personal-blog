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
        <main className="p-4 bg-[#EFD9A1] min-h-screen max-h-screen flex flex-col">
            <Header />
            <div className="flex h-lvh">
                <Sidebar />
                <MainContent recent_posts={latestPosts} />
            </div>
        </main>
    );
}
