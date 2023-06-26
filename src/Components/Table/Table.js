import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useDebugValue,
  createContext,
  useContext,
} from 'react';
import Commands from '../Buttons/Commands';
import styles from './Table.module.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../assets/Icons';
import {
  OpenSetting_modalFun,
  OpenSetting_modalFunData,
  department_update_fun,
} from '../../Feature/Admin/Settings/DepartmentSlice';
import { useDispatch } from 'react-redux';
import { Delete_Role_Permissions_Fun } from '../../Feature/Admin/Settings/Role_Permissions_Slice';

//  General Context

const TableContext = createContext();
const useTableContext = () => useContext(TableContext);

// Components
const Table = ({ type, data, linkTo, columns, menu, menuType, Leg_Leg }) => {
  const contextValue = ['Test', Leg_Leg, data];
  return (
    <TableContext.Provider value={contextValue}>
      <table className={styles.table_directory}>
        {/* create table head
         */}

        {/* Conditionally show Table body */}
        {data?.length > 0 && <TableHeader type={type} columns={columns} />}
        {data?.length > 0 ? (
          <TableBody
            menu={menu}
            linkTo={linkTo}
            type={type}
            data={data}
            bodyType={'data'}
            columns={columns}
            Leg_Leg
          />
        ) : data?.length === 0 ? (
          <TableBody />
        ) : (
          <TableBody bodyType={`skeleton`} columns={columns} />
        )}
      </table>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  link: PropTypes.string,
  columns: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  menuType: PropTypes.string,
};

const TableHeader = ({ columns }) => {
  const headerTypes = (header, key, title, size) => {
    switch (header) {
      case 'SN':
        return (
          <th style={{ width: size }} key={key}>
            {title}
          </th>
        );
      case 'Check':
        return (
          <th
            key={key}
            style={{
              width: size,
            }}
          >
            <input type="checkbox" name="all" id="" />
          </th>
        );
      case 'Empty':
        return <th style={{ width: size }} key={key}></th>;
      case 'Status':
        return (
          <th style={{ width: size, textAlign: 'center' }} key={key}>
            {title}
          </th>
        );

      default:
        return (
          <th
            key={key}
            style={{
              width: size,
            }}
          >
            {title}
          </th>
        );
    }
  };

  return (
    <thead className={styles.table_head_directory}>
      <tr>
        {columns.map((column, key) =>
          headerTypes(column.name, key, column.title, column.size)
        )}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  type: PropTypes.string,
};

const TableBody = ({
  type,
  data,
  linkTo,
  bodyType,
  menu,
  columns,
  fake = [
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
    {
      id: 1,
      first_name: 'Firstname',
      middle_name: null,
      last_name: 'Lastname',
      gender: 'male',
    },
  ],
  Leg_Leg,
}) => {
  switch (bodyType) {
    case 'data':
      return (
        <tbody className={styles.table_body}>
          {data.map((staff, key) => {
            const list = key + 1;
            return (
              <TableRow
                key={key}
                data={staff}
                type={type}
                bodyType={'data'}
                linkTo={linkTo}
                menu={menu}
                list={list}
                columns={columns}
              />
            );
          })}
        </tbody>
      );

    case 'skeleton':
      return (
        <tbody>
          {fake.map((staff, key) => (
            <TableRow
              data={staff}
              bodyType={bodyType}
              key={key}
              columns={columns}
            />
          ))}
        </tbody>
      );
    default:
      return (
        <tbody className={styles.table_body_empty}>
          <tr>
            <td colSpan="12">
              <div className="table_novalue">
                <Icons name={'empty'} />
                <p className="nostaff">No Records Found</p>
              </div>
            </td>
          </tr>
        </tbody>
      );
  }
};

TableBody.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  link: PropTypes.string,
  bodyType: PropTypes.string,
  columns: PropTypes.array.isRequired,
};

const useDateFormatter = (dateData) => {
  const [dateRow, setDateRow] = useState(null);

  useMemo(() => {
    try {
      const info = dateData;
      const date = new Date(info);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const modified = Intl.DateTimeFormat('en-US', options).format(date);
      setDateRow(modified);
    } catch (error) {
      console.error(error, 'date from table failed to load');
    }
  }, [dateData]);
  useDebugValue(dateRow);
  return dateRow;
};

function useGetNoticePeriod(startDate, endDate) {
  const startDateObj = new Date(
    startDate?.replace(/(\d{1,2})(st|nd|rd|th)/, '$1')
  );
  const endDateObj = new Date(endDate);
  const diffInMs = endDateObj - startDateObj;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'day',
  });
  useDebugValue(formatter.format(diffInDays));
  return diffInDays < 0 ? '0 days' : formatter.format(diffInDays);
}

function useNameIndex(data) {
  const fName = data?.first_name?.charAt(0) ?? 'A';
  const lName = data?.last_name?.charAt(0) ?? 'A';
  useDebugValue([fName, lName]);
  return [fName, lName];
}

function useCurrencyFormatter(number) {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });
  const formattedNumber = formatter.format(Number(number));
  useDebugValue(formattedNumber);
  return formattedNumber;
}

const TableRow = ({ key, columns, data, linkTo, menu, bodyType, list }) => {
  const rowRef = useRef(),
    mainRow = useRef(),
    navigate = useNavigate();
  const [fName, lName] = useNameIndex(data);
  // const dateData = data?.updated_at;

  // const [dateRow, setDateRow] = useState(null);
  const dateRow = useDateFormatter(data?.updated_at),
    fromDate = useDateFormatter(data?.start_date),
    toDate = useDateFormatter(data?.end_date),
    createdAt = useDateFormatter(data?.created_at),
    noticePeriod = useGetNoticePeriod(createdAt, data?.last_working_day),
    invoiceCurrency = useCurrencyFormatter(data?.total_amount);

  //  Toggles the command menu
  const [command, setCommand] = useState(false);
  const handleCommand = (e) => {
    setCommand(!command);
  };

  const rowNavigation = (e) => {
    if (
      mainRow?.current?.contains(e?.target) &&
      !rowRef.current.contains(e.target)
    ) {
      navigate(`${linkTo}/${data?.id ?? ''}`, { state: data });
    }
  };

  // Closes the command menu when clicked outside the menu
  useEffect(() => {
    const turnOff = (e) => {
      // console.log(e);
      if (!rowRef?.current?.contains(e.target) ?? false) {
        setCommand(false);
      }
    };
    document.addEventListener('mousedown', turnOff);
    document.addEventListener('mousedown', rowNavigation);
    return () => {
      document.removeEventListener('mousedown', turnOff);
    };
  });

  // Table Data types

  const tableData = (type, key, column) => {
    switch (type) {
      case 'File':
        return (
          <td key={key} className={''}>
            <div className={styles.flex_small}>
              <Icons name={`folder`} />
              <span className={styles.bold}>
                {' '}
                {data?.[column.data] ? (
                  data?.[column.data]
                ) : (
                  <span>{column.error}</span>
                )}
              </span>
            </div>
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'Currency':
        return (
          <td key={key} className={''}>
            <p>{invoiceCurrency}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'Modified':
        return (
          <td key={key} className={''}>
            <p>{dateRow}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'FromTo':
        return (
          <td key={key} className={''}>
            <p>
              {fromDate} - {toDate}
            </p>
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'Created':
        return (
          <td key={key} className={''}>
            <p>{createdAt}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'NoticePeriod':
        return (
          <td key={key} className={''}>
            <p>{noticePeriod}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Leave_Days':
        console.log(data?.leave);

        return (
          <td key={key} className={''}>
            {/* <p>{noticePeriod}</p> */}

            <div className=" flex gap-5  lg:gap-4 flex-wrap items-center">
              {data?.leave.map((item, index) => (
                <div className=" ">
                  <span className="border border-[#C5C5C5] px-2  py-1 lg:px-3  rounded-3xl  text-xs">
                    {item.leave}:{item.day}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Salary_Structure':
        return (
          <td key={key} className={''}>
            {/* <p>{noticePeriod}</p> */}
            <div className="flex gap-2">
              <span>${data?.salary_structure?.MIN_Amount} </span>
              <span>${data?.salary_structure?.MAX_Amount} </span>
            </div>

            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'leave_structure':
        const leaveStructure = data.leave_structure;
        console.log(leaveStructure);

        return (
          <td key={key} className={''}>
            <div className=" flex gap-2 ">
              {leaveStructure.map((leave) => (
                <span key={leave.leave} className="  ">
                  <span className="border border-[#C5C5C5]  px-2 py-1 rounded-[20px] ">
                    {leave.leave} : {leave.day}
                  </span>
                </span>
              ))}
            </div>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Tags':
        return (
          <td key={key} className={''}>
            {/* <p className={styles.tags}> */}
            {data?.[column.data] ? (
              data?.[column.data]?.length > 0 ? (
                <p className={`${styles.tags} ${styles.data}`}>
                  {parseInt(data[column.data]?.length).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </p>
              ) : (
                <p className={styles.tags}> {data[column.data]}</p>
              )
            ) : (
              <span className={styles.tags}>{column.error}</span>
            )}
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Status':
        return (
          <td key={key} className={''}>
            {data[column.data] ? (
              <p className={styles[data[column.data]]}> {data[column.data]}</p>
            ) : (
              <span className={styles.tags}>{column.error}</span>
            )}
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'SN':
        return (
          <td key={key} className={''}>
            <span>{list}</span>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Company_Admins':
        let admin_lenght = data?.admin.length;

        return (
          <td key={key} className={''}>
            <span>{admin_lenght}</span>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Company_Staff':
        let staff_lenght = data?.staff.length;

        return (
          <td key={key} className={''}>
            <span>{staff_lenght}</span>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Company_Branchess':
        let branch_lenght = data?.branch.length;

        return (
          <td key={key} className={''}>
            <span>{branch_lenght}</span>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Directory':
        return (
          <td key={key} className={styles.directory_profile}>
            {data.profile_image ? (
              <div className={styles.directory_img}>
                <img src={data.profile_image} alt="profile_image" />
              </div>
            ) : (
              <span>
                {fName} {lName}
              </span>
            )}
            <p>{`${data?.first_name}  ${data?.last_name}`}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Admin_Name':
        return (
          <td key={key} className={styles.directory_profile}>
            {data?.img ? (
              <div
                className={`${styles.directory_img} new-class  rounded-full `}
              >
                <img src={data?.img} alt="profile_image" />
              </div>
            ) : (
              <span>
                {fName} {lName}
              </span>
            )}
            <p>{`${data?.first_name} ${data?.last_name}  `}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Exit':
        return (
          <td key={key} className={styles.directory_profile}>
            {data.profile_image ? (
              <div className={styles.directory_img}>
                <img src={data.profile_image} alt="profile_image" />
              </div>
            ) : (
              <span>
                {fName} {lName}
              </span>
            )}
            <p>{`${data?.employee?.first_name}  ${
              data?.[column.data]?.last_name
            }`}</p>
            <div className={styles.skeleton_data}></div>
          </td>
        );

      case 'Empty':
        return (
          <td ref={rowRef} key={key}>
            <Commands type={'dot-v'} openMenu={handleCommand} />
            {
              <CommandMenu
                checkOpen={command}
                items={menu}
                linkTo={`${linkTo}/${data?.id}`}
                info={data}
              />
            }
            <div className={styles.skeleton_data}></div>
          </td>
        );
      case 'Check':
        return (
          <td key={key}>
            <input type="checkbox" name="checked" id="" />
            <div className={styles.skeleton_data}></div>
          </td>
        );

      default:
        return (
          <td
            key={key}
            style={{
              textAlign: column.align ? column.align : 'left',
            }}
          >
            {data[column.data] ? (
              data[column.data]
            ) : (
              <span>{column.error}</span>
            )}
            <div className={styles.skeleton_data}></div>
          </td>
        );
    }
  };

  switch (bodyType) {
    case 'skeleton':
      return (
        <tr key={key} className={styles.table_row_directory_skeleton}>
          {columns.map((column, key) => {
            return tableData(column.name, key, column);
          })}
        </tr>
      );
    default:
      return (
        <tr ref={mainRow} className={styles.table_row_directory}>
          {columns.map((column, key) => {
            return tableData(column.name, key, column);
          })}
        </tr>
      );
  }
};

TableRow.propTypes = {
  columns: PropTypes.array,
  img: PropTypes.string,
  data: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    employee_id: PropTypes.string,
    id: PropTypes.number,
    phone: PropTypes.string,
    profile_image: PropTypes.string,
  }),
  link: PropTypes.string,
  number: PropTypes.number,
};

// Row Commands Menu
const CommandMenu = ({ items = [], checkOpen, linkTo, info }) => {
  console.log(typeof Leg_Leg);
  const [, testFunction] = useTableContext();

  console.log(test);
  testFunction('Menue');
  const dispatch = useDispatch();

  const menuItems = (type, value, linkTo, key) => {
    const handleDepartment_update = () => {
      console.log('skjdsdkjsdkj');
      dispatch(OpenSetting_modalFun(true));
      dispatch(department_update_fun(info));
    };

    switch (type) {
      case 'link':
        return (
          <li key={key}>
            <Link
              to={linkTo}
              state={info}
              className={styles.table_row_commands_primary}
            >
              {value}
            </Link>
          </li>
        );

      case 'setting_update':
        return (
          <li key={key} onClick={handleDepartment_update}>
            {value}
          </li>
        );
      case 'delete_Role':
        return (
          <li
            key={key}
            onClick={() => dispatch(Delete_Role_Permissions_Fun(info))}
          >
            {value}
          </li>
        );

      case 'update_Role':
        return (
          <Link
            to={`/admin/settings/role&permissions`}
            state={info}
            className={styles.table_row_commands_primary}
          >
            {value}
          </Link>
        );

      case 'Assign_Role':
        return (
          // <Link
          //   to={`/admin/settings/role&permissions`}
          //   state={info}
          //   className={styles.table_row_commands_primary}
          // >
          //   {value}
          // </Link>

          <div onClick={() => console.log('this is me')}>{value}</div>
        );

      default:
        return <li key={key}>{value}</li>;
    }
  };

  return (
    <ul
      className={
        checkOpen
          ? `${styles.table_row_commands_active} active`
          : `${styles.table_row_commands_hide} hide`
      }
    >
      {items.map((item, key) => menuItems(item.type, item.value, linkTo, key))}
    </ul>
  );
};

CommandMenu.propTypes = {
  items: PropTypes.array,
  checkOpen: PropTypes.bool,
  linkTo: PropTypes.string,
};

const TopHeader = ({ name, filter, search }) => {
  return <div className="">TopBar</div>;
};

export { Table as default, TopHeader };
