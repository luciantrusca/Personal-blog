import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    const id = await createPost(data)
    res.status(200).json({id})
}