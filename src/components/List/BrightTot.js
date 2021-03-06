import "./Form.css";
import React from "react";
import {
  getDatabase,
  ref,
  onValue,
  startAt,
  orderByChild,
  query,
  orderByKey,
  orderByValue,
  limitToFirst,
} from "firebase/database";
import { Table } from "react-bootstrap";

const db = getDatabase();
export class BrightTot extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }
  componentDidMount() {
    const dbRef = query(
      ref(db, "Grade/"),
      orderByChild("CGPA"),
      startAt(8.5)
    );
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <div>
        <table className="stud_brightclass">
          <tr colspan={5}>
            <th>
              <h2>Bright Students</h2>
            </th>
          </tr>
        </table>
        <Table className="stud_brightclass">
          <tr>
            <th rowSpan={2}>Roll No.</th>
            <th rowSpan={2}>Student Name</th>
          </tr>
          <tbody>
            {this.state.tableData.map((row, index) => {
              return (
                <tr>
                  <td>{row.data.RollNo}</td>
                  <td>{row.data.Name}</td>
                  {/*<td>{row.key}</td>
                            <td>{row.data.attendance}</td>
                            <td>{row.data.internal1}</td>
                            <td>{row.data.internal2}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
