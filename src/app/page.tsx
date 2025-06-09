import Sidebar from '@/components/Sidebar';
import Header from '../components/Header';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export default async function App(){
    const tags = await prisma.tag.findMany();

    return (
        <main>
            <Header />
            <Sidebar tags={tags} />
        </main>
    );
}
