// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from '../../../data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(json)
}

export default handler
