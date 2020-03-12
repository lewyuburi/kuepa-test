import { isSameDay, addDays } from "date-fns";
import {
  attendanceType,
  attendancePageType,
  campusType,
  mentionType
} from "types";
import fetch from "isomorphic-unfetch";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://kuepa.now.sh"
    : "http://localhost:3000";

export const getAttendance = async (filters?: object) => {
  let params: string = "";

  if (filters) {
    params = "?" + objectToQueryStringParams(filters);
  }

  const url = `${baseUrl}/api/attendance${params}`;

  const attendanceResponse = await fetch(url);

  const attendance: attendancePageType = await attendanceResponse.json();

  return attendance;
};

export const getMention = async () => {
  const url = `${baseUrl}/api/mention`;

  const mentionResponse = await fetch(url);

  const mention: mentionType = await mentionResponse.json();

  return mention;
};

export const getCampus = async () => {
  const url = `${baseUrl}/api/campus`;

  const campusResponse = await fetch(url);

  const campus: campusType = await campusResponse.json();

  return campus;
};

export const filterByDate = (object: attendanceType[], date: Date) =>
  object.filter(element => isSameDay(element.attendanceDate, addDays(date, 1)));

export const objectToQueryStringParams = (object: object) =>
  Object.keys(object)
    .map(key => key + "=" + object[key])
    .join("&");

export const paginator = (params: {
  data: Array<attendanceType>;
  page?: number;
  perPage?: number;
}) => {
  const items = params.data;
  const page = params.page || 1;
  const per_page = params.perPage || 10;

  const offset = (page - 1) * per_page;
  const paginatedItems = items.slice(offset).slice(0, per_page);
  const total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
  };
};
