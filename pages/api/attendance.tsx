import { NextApiRequest, NextApiResponse } from "next";
import { attendanceType, attendancePageType } from "types";
import { filterByDate, paginator } from "helpers";

import AttendanceData from "data/attendanceData";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<attendancePageType>
) => {
  const { attendanceDate, mention, campus, page, perPage } = req.query;

  let data: attendanceType[] = await AttendanceData(100);

  if (attendanceDate) {
    data = filterByDate(data, new Date(attendanceDate.toString()));
  }

  if (mention) {
    data = data.filter(element => element.mention === mention);
  }

  if (campus) {
    data = data.filter(element => element.campus === campus);
  }

  const paginatorParams = {
    data,
    page: page ? parseInt(page.toString()) : 1,
    perPage: perPage ? parseInt(perPage.toString()) : 10
  };

  const paginatedData: attendancePageType = paginator(paginatorParams);

  res.status(200).json(paginatedData);
};
