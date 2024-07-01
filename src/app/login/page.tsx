import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  console.log(req, res);
  res.status(200).json({message: 'Yep!'}); 
}