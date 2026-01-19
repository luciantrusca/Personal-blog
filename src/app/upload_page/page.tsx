import Header from "@/components/header/Header";
import { redirect } from "next/navigation";

export default async function UploadPage() 
{
    async function submitBlogPost(formData: FormData) {
        "use server";
        const title = formData.get('title');
        const content = formData.get('content');
        const authorId = '1';

        // call API route
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            //send title and content as JSON
            body: JSON.stringify({title,content,authorId}),
        });

        //check if response is ok
        if (!response.ok) {
            throw new Error('Failed to submit blog post');
        }

        //redirect to home page
        redirect('/');
        
    }

    return (
        <main className="min-h-screen bg-[#F7E6B6] m-6">
            <Header/>
            {/* Main content area below header*/}
            <div className="border-2 border-t-0 flex flex-col p-10 gap-[5vw] mx-auto"> 
                <h1 className="text-4xl font-bold">Upload Post</h1>

                <form action={submitBlogPost} className="flex flex-col gap-4">
                    {/* Post title input section */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Post Title</h2>
                        <input
                            name='title'
                            className="border border-gray-300 p-2 w-full rounded"
                            type="text"
                            placeholder="Enter post title"
                        />
                        <p className="mt-2 mb-4">
                            <img className="inline w-12 mr-2" src="/icons/upload_trim_bgrem.png" alt="Upload image" />
                            Upload image (optional)
                        </p>
                    </div>

                    {/* Post content input section */}
                    <div className="w-full">
                        <h2 className="text-2xl font-bold">Post Content</h2>
                        <input name='content'
                            className="border border-gray-300 p-2 rounded h-32 w-full"
                            type="text"
                            placeholder="Enter post content"
                        />
                    </div>

                    {/* Publish button */}
                    <button type="submit" className="bg-[#9EB373] text-(--text-color) p-2 rounded border-4 text-2xl">Publish Post</button>
                </form>
            </div>
        </main>
    )
}