import { NextApiRequest, NextApiResponse } from "next";
import { mentionType } from "types";

export default (req: NextApiRequest, res: NextApiResponse<mentionType[]>) => {
  const data: mentionType[] = ["Inglés", "Desarrollo de software"];

  res.status(200).json(data);
};
