// ROUTE: http://localhost:3000/api/data/rsvp

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  canAttend: boolean,
  dietryRequrements: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
  res.status(200).json({
    "name": "Daniel",
    "canAttend": true,
    "dietryRequrements": "Vegetarian"
  })
}
