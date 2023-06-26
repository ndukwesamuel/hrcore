import React from 'react';
import './EmployeeDirTable.scss';
import noval from '../../assets/Images/noval.png';
import { DateFormat, formatDate } from '../../utilities/FormatDate';
import { Link } from 'react-router-dom';
import Svgicons from '../../assets/Svgicons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Approve_Or_DeclineFun } from '../../Feature/Admin/LeaveAdmin/LeaveAdminSlice';

const UseTable = ({
  id,
  columns,
  data,
  link,
  tools,
  viewAction = () => {},
  handleCheck,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <table className="employeedirtable__table">
      <thead>
        <tr>
          {columns.map(({ path, name }) => {
            if (path === 'sharing') {
              return <th key={path}>Sharing</th>;
            }
            if (path !== 'commands') {
              return <th key={path}>{name}</th>;
            } else {
              return <th key={path}>Commands</th>;
            }
          })}
        </tr>
      </thead>
      {data?.length === 0 ? (
        <tbody className="novalue_table">
          <tr>
            <td colSpan="12">
              <div className="table_novalue">
                <img width="10%" src={noval} />
                <p className="nostaff">No Records Found</p>
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className="table-data">
          {data?.map((rowData) => {
            return (
              <tr key={rowData[id]}>
                {columns.map((col) => {
                  switch (col.path) {
                    case 'checkbox':
                      return (
                        <td key={col.path}>
                          <input type="checkbox" />
                        </td>
                      );
                    case 'checks':
                      return (
                        <td key={col.path}>
                          <input
                            type="checkbox"
                            onChange={handleCheck}
                            value={rowData?.slug}
                          />
                        </td>
                      );
                    case 'office_tools':
                      return (
                        <td className="flex">
                          <Link
                            to={`${link}/${rowData?.id}`}
                            state={{ rowData }}
                          >
                            {rowData?.office_tools?.map((tools) => {
                              return <div>{tools?.name}</div>;
                            })}
                          </Link>
                        </td>
                      );
                    case 'slug':
                      return (
                        <td key={col.path}>
                          <div
                            className="flex gap-1 items-center text-[#101828] text-[13px]
          font-medium font-['Inter']"
                            onClick={() => navigate(`${link}/${rowData?.id}`)}
                          >
                            <span>
                              <Svgicons action="folder" />
                            </span>
                            {rowData && rowData[col.path]}
                          </div>
                        </td>
                      );
                    case 'commands':
                      return (
                        <td key={col.path}>
                          <div className="employeedirtable__commands">
                            {col.name.includes('details') && (
                              <Link
                                to={`${link}/${rowData?.id}`}
                                className="btn-view"
                              >
                                View Details
                              </Link>
                            )}
                            {col.name.includes('view') && (
                              <Link
                                to={`${link}/${rowData?.id}`}
                                className="btn-view"
                              >
                                View Profile
                              </Link>
                            )}

                            {col.name.includes('detail') && (
                              <Link
                                to={`${link}/${rowData?.id}`}
                                className="btn-view"
                              >
                                View Detail
                              </Link>
                            )}

                            {col.name.includes('delete') && (
                              <button className="employeedirtable__delete">
                                Delete
                              </button>
                            )}

                            {rowData?.status === 'pending' ? (
                              <>
                                {col.name.includes('decline') && (
                                  <button
                                    className="btn-decline"
                                    onClick={() =>
                                      dispatch(
                                        Approve_Or_DeclineFun(
                                          `decline/${rowData?.id}`
                                        )
                                      )
                                    }
                                  >
                                    decline
                                  </button>
                                )}
                                {col.name.includes('approve') && (
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        Approve_Or_DeclineFun(
                                          `approve/${rowData?.id}`
                                        )
                                      )
                                    }
                                    className="btn-approve"
                                  >
                                    approve
                                  </button>
                                )}
                              </>
                            ) : (
                              <>
                                {col.name.includes('decline') &&
                                  col.name.includes('approve') && (
                                    <button
                                      className={`${
                                        rowData?.status == 'approved'
                                          ? 'btn-approve'
                                          : 'btn-decline'
                                      }`}
                                    >
                                      {rowData?.status}
                                    </button>
                                  )}
                              </>
                            )}
                          </div>
                        </td>
                      );
                    case 'created_at':
                      return (
                        <td key={col.path}>
                          {DateFormat(new Date(rowData?.created_at))}
                        </td>
                      );
                    case 'start_date':
                      return (
                        <td key={col.path}>
                          {`${DateFormat(new Date(rowData?.start_date))}
            -
            ${DateFormat(new Date(rowData?.end_date))}`}
                        </td>
                      );
                    case 'status':
                      return (
                        <td key={col.path}>
                          <div className="employeedirtable__commands">
                            {rowData.status === 'approved' && (
                              <button className="employeedirtable__update">
                                Approved
                              </button>
                            )}
                            {rowData.status === 'declined' && (
                              <button className="employeedirtable__disable">
                                Declined
                              </button>
                            )}

                            {rowData.status === 'pending' && (
                              <button className="employeedirtable__reset">
                                Pending
                              </button>
                            )}
                          </div>
                        </td>
                      );

                    case 'profile':
                      const first = rowData?.reliever?.first_name.slice(0, 1);
                      const last = rowData?.reliever?.last_name.slice(0, 1);
                      return (
                        <td key={col.path}>
                          <span className="employeedirtable__pix">
                            {first} {last}
                          </span>
                        </td>
                      );

                    case 'reliever':
                      const firstName = rowData.reliever?.first_name;
                      const lastName = rowData.reliever?.last_name;

                      return (
                        <td key={col.path}>
                          {firstName} {lastName}
                        </td>
                      );

                    case 'fname':
                      const fName = rowData?.first_name.slice(0, 1);
                      const lName = rowData?.last_name.slice(0, 1);
                      return (
                        <td key={col.path}>
                          <span className="employeedirtable__pix">
                            {fName} {lName}
                          </span>
                        </td>
                      );

                    case 'name':
                      const naming = rowData?.first_name;
                      const surname = rowData?.last_name;

                      return (
                        <td key={col.path}>
                          {naming} {surname}
                        </td>
                      );

                    case 'date':
                      const date = new Date(rowData.created_at);
                      const year = date.getFullYear();
                      const month = date.getMonth() + 1; // add 1 because getMonth() returns zero-based month
                      const day = date.getDate();
                      return (
                        <td key={col.path}>{`${day}-${month}-${year}`}</td>
                      );

                    case 'noticeperiod':
                      return <td key={col.path}>Unknown</td>;

                    case 'letterattached':
                      return <td key={col.path}>Unknown</td>;

                    case 'sentto':
                      return (
                        <td key={col.path} className="flex items-center gap-2">
                          <div className="">
                            <img
                              className="w-[37px]  h-[37px] rounded-[50%]"
                              src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                              alt=""
                            />
                          </div>

                          <p> Olivia Rhye</p>
                        </td>
                      );

                    case 'officetools':
                      let officetools;

                      if (rowData?.returned_work_tools < 1) {
                        return <td key={col.path}>Yes</td>;
                      } else {
                        return <td key={col.path}>NO </td>;
                      }

                    default:
                      return (
                        <td key={col.path}>{rowData && rowData[col.path]}</td>
                      );
                      break;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default UseTable;
