export type idType = "CC";
export type campusType = "Calle 72" | "Álamos" | "Restrepo";
export type mentionType = "Inglés" | "Desarrollo de software";

export type attendanceType = {
  fullname: string;
  idType: idType;
  idNumber: string;
  attendanceDate: Date;
  mention: mentionType;
  campus: campusType;
};

export type attendancePageType = {
  page: number;
  per_page: number;
  pre_page: null | number;
  next_page: null | number;
  total: number;
  total_pages: number;
  data: attendanceType[];
};
