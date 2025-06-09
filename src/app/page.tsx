import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '../components/layout/Header';
import { PrismaClient } from '../../generated/prisma/client';
import LatestPost from '@/components/posts/LatestPost';

const prisma = new PrismaClient();

export default async function App(){
    const tags = await prisma.tag.findMany();
    const latestPost = await prisma.post.findFirst({
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
    });

    return (
        <main>
            <Header />
            <Sidebar tags={tags} />
            {latestPost ? <LatestPost post={latestPost} /> : <p>No latest post available</p>}
        </main>
    );
}
