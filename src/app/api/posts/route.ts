import { NextResponse } from 'next/server'
import { PrismaClient } from '~/generated/prisma/client'
import slugify from 'slugify'
import { create } from 'domain'

const prisma = new PrismaClient()

// Returns all posts from the BD
export async function GET(){
    const posts = await prisma.post.findMany({}) //returns all posts in db
    return new NextResponse(JSON.stringify(posts), {
        headers: { 'Content-Type': 'application/json' }
    })
}


//Create a new (blog) post in the DB
export async function POST(request:Request){
    // Return a list of all tags in DB
    const tags_list = await prisma.tag.findMany();

    const res = request.headers.get('content-type') === 'application/json' ? await request.json() : request.formData();
    console.log(res) // Log the request body to see what is being sent
    const { ...data } = res //unpackaging body



  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      published: true,
      slug: slugify(data.title, { lower: true }),
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        connect: { id: data.authorId } // Make sure data.authorId is provided in the request body
      },
      tags: {
          connect: tags_list.map(tag => ({id: tag.id}))
      }
    },
  })
  return NextResponse.json({ message: 'Success' }, { status: 200 }); 
}