import { NextApiRequest, NextApiResponse } from "next";
import { campusType } from "types";

export default (req: NextApiRequest, res: NextApiResponse<campusType[]>) => {
  const data: campusType[] = ["Calle 72", "Álamos", "Restrepo"];

  res.status(200).json(data);
};
