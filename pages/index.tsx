import React from "react";

import { campusType, attendancePageType, mentionType } from "types";
import { getAttendance, getMention, getCampus } from "helpers";
import AppHeader from "components/organisms/global/header";
import Pagination from "components/molecules/navigation/pagination";
import Table from "components/organisms/sections/table";

const Home = props => {
  const [attendance, setAttendance] = React.useState(props.attendance);

  const [filters, setFilters] = React.useState({
    campus: 0,
    mention: 0,
    attendanceDate: 0
  });

  const getAttendanceData = async filters => {
    const attendanceData = await getAttendance(filters);
    setAttendance(attendanceData);
  };

  const inputChange = event => {
    console.log(event.target.name, event.target.value);
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  React.useEffect(() => {
    const f: any = {};

    if (filters.campus != 0) {
      f.campus = filters.campus;
    } else {
      delete f.campus;
    }

    if (filters.mention != 0) {
      f.mention = filters.mention;
    } else {
      delete f.mention;
    }

    if (filters.attendanceDate != 0) {
      f.attendanceDate = filters.attendanceDate;
    } else {
      delete f.attendanceDate;
    }

    getAttendanceData(f);
  }, [filters.campus, filters.mention, filters.attendanceDate]);

  return (
    <React.Fragment>
      <AppHeader />

      <div className="container">
        <h1 className="h2">Informe de asistencias</h1>

        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <label htmlFor="mention">Mención</label>
                <select
                  id="mention"
                  name="mention"
                  className="form-control"
                  placeholder="Sede"
                  onChange={inputChange}
                  defaultValue={filters.campus}
                >
                  <option value="0">Ninguna</option>
                  {Object.keys(props?.mention).map((element, index) => (
                    <option key={index} value={props?.mention[element]}>
                      {props?.mention[element]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-xs-12 col-md-4">
                <label htmlFor="campus">Sede</label>
                <select
                  id="campus"
                  name="campus"
                  className="form-control"
                  placeholder="Sede"
                  onChange={inputChange}
                >
                  <option value="0">Ninguna</option>
                  {Object.keys(props?.campus).map((element, index) => (
                    <option key={index} value={props?.campus[element]}>
                      {props?.campus[element]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-xs-12 col-md-4">
                <label htmlFor="date">Fecha</label>
                <input
                  id="date"
                  name="attendanceDate"
                  type="date"
                  className="form-control"
                  placeholder="Fecha"
                  value={filters.attendanceDate}
                  onChange={inputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <Table
          headers={[
            "Tipo de documento",
            "Número de documento",
            "Nombre",
            "Fecha de asistencia",
            "Mención",
            "Sede"
          ]}
          body={attendance?.data}
        />

        <Pagination
          prePage={attendance?.pre_page}
          nextPage={attendance?.next_page}
          totalPages={attendance?.total_pages}
          page={attendance?.page}
          toPage={getAttendanceData}
        />
      </div>
    </React.Fragment>
  );
};

Home.getInitialProps = async ({ req }) => {
  const attendance: attendancePageType = await getAttendance();
  const mention: mentionType = await getMention();
  const campus: campusType = await getCampus();

  return { attendance, mention, campus };
};

const styles = {};

export default Home;
