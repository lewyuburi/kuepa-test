import { format } from "date-fns";
import { es } from "date-fns/locale";

const Table = props => {
  const headers = props.headers;
  const body = props.body;

  return (
    <table className="table table-bordered table-responsive">
      <thead>
        <tr>
          {headers.map((key, i) => (
            <th key={i}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body?.map((element, i: number) => (
          <tr key={i}>
            {Object.keys(element).map((key, i) => (
              <td key={i}>
                {key === "attendanceDate" &&
                  format(new Date(element[key]), "dd-MM-yyyy", { locale: es })}
                {key !== "attendanceDate" && element[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
