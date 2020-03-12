import { attendancePageType, attendanceType } from "types";
import faker from "faker";
import cached from "cached";

faker.locale = "es_MX";

const attendanceCache = cached("attendance", {
  backend: {
    type: "memory"
  }
});

const createAttendance = (): attendanceType => ({
  idType: "CC",
  idNumber: faker.random.number(99999999).toString(),
  fullname: faker.name.findName(),
  attendanceDate: faker.date.recent(8),
  mention: faker.random.arrayElement(["Inglés", "Desarrollo de software"]),
  campus: faker.random.arrayElement(["Calle 72", "Álamos", "Restrepo"])
});

const createattendanceList = (numUsers: number = 5): attendanceType[] =>
  Array.from({ length: numUsers }, createAttendance);

const data = async (quanty: number = 50): Promise<attendanceType[]> => {
  const cachedAttendance = await attendanceCache.getOrElse("data", () =>
    createattendanceList(quanty)
  );
  return cachedAttendance;
};

export default data;
