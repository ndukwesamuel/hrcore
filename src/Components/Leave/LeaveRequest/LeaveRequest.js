import React, { useEffect, useState, forwardRef, useRef } from 'react';
import { useSelector } from 'react-redux';
import './leaverequest.style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { LeaveRequestSchema } from '../../../FormValidation/FormValidation';
import Select from 'react-select';
import {
  leaveRequestAction,
  getLeaveDaysAction,
  getLeaveTypesAction,
  reset_request,
} from '../../../Feature/Leave/LeaveRequestSlice';
import { DateFormat, formatDate } from '../../../utilities/FormatDate';
import { Blocks } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Global_Settings_Fun } from '../../../Feature/Admin/Settings/GlobalSettingsSlice';

const LeaveRequest = ({ managePage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();
  const [type, setType] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();

  const {
    Global__Settings,

    Global__Settings_isError,
    Global__Settings_message,
    Global__Settings_isLoading,

    Global__Settings_isSuccess,
  } = useSelector((state) => state.reducer.GlobalSettingsSlice);

  console.log(Global__Settings_message);

  const formatOptionLabel = ({ first_name, last_name }) => (
    <div style={{ display: 'flex' }}>
      <div>{first_name}</div>
      <div style={{ marginLeft: '10px' }}>{last_name}</div>
    </div>
  );

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LeaveRequestSchema),
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => setType(value));

    dispatch(Global_Settings_Fun());

    return () => subscription.unsubscribe();
  }, [watch]);

  const S = DateFormat(startDate);
  const E = DateFormat(endDate);
  const starts = S?.split('/').join('-');
  const ends = E?.split('/').join('-');

  const getRelievers = useSelector(
    (state) => state.reducer.leaveReducer.relievers
  );

  const { request } = useSelector((state) => state.reducer.leaveReducer);

  useEffect(() => {
    if (request?.status === 'success') {
      managePage();
    }
  }, [request]);

  const CustomInput = forwardRef(({ onClick, value }, ref) => {
    return (
      <>
        <label for="start_date">start date</label>
        <input
          id="start_date"
          type="text"
          ref={ref}
          onClick={onClick}
          placeholder="select date range"
          value={formatDate(startDate)}
          {...register('start_date')}
        />
        {errors.start_date && (
          <p className="form-error">{errors.start_date?.message}</p>
        )}
      </>
    );
  });

  useEffect(() => {
    const dates = { start: starts, end: ends };
    dispatch(getLeaveDaysAction(dates));

    return () => {};
  }, [dispatch, endDate]);

  useEffect(() => {
    dispatch(getLeaveTypesAction());
    return () => {};
  }, []);

  const days = useSelector((state) => state.reducer.leaveReducer.leavedays);
  const types = useSelector((state) => state.reducer.leaveReducer.leavetypes);

  const onSubmit = async (data) => {
    setLoading(true);

    const newdata = {
      ...data,
      relieve_officer: data?.relieve_officer?.id,
      start_date: starts,
      end_date: ends,
    };

    await dispatch(leaveRequestAction(newdata));
    setLoading(false);
  };
  return (
    <div className="w-full  lg:flex  justify-center ">
      <div className="leaverequest__body  lg:w-[80%] xl:w-[60%] 2xl:w-[40%]">
        <ul className="leaverequest__list">
          <li className="leaverequest__item" onClick={managePage}>
            my request
          </li>
          <li className="leaverequest__item"> &gt;</li>
          <li className="leaverequest__item">create request</li>
        </ul>
        <header className="leaverequest__header  rounded-lg">
          create leave request
        </header>
        <div className="form-container">
          <form
            className="leaverequest__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label for="leave_type">leave type</label>

            <select
              id="leave_type"
              className="flex justify-end"
              {...register('type')}
            >
              <option
                className="leaverequest__option"
                disabled={true}
                selected
                value=""
              >
                --select leave type--
              </option>
              <option value="annual" className='className="flex w-full '>
                <div className="">annual</div>
              </option>
              <option className="leaverequest__option" value="casual">
                <div className="leaverequest__option--left"> casual</div>
              </option>
              <option className="leaverequest__option" value="maternity">
                <div className="leaverequest__option--left">maternity</div>
                {/* <div className="leaverequest__option--right">
                  {types?.maternity}days
                </div> */}
              </option>
            </select>
            {errors.type && (
              <p className="form-error">{errors.type?.message}</p>
            )}
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              customInput={<CustomInput />}
            />

            <label for="enddate">end date</label>
            <input
              id="end_date"
              type="text"
              placeholder="end date"
              value={formatDate(endDate)}
              {...register('end_date')}
            />
            {errors.end_date && (
              <p className="form-error">{errors.end_date?.message}</p>
            )}

            <label for="levedays">leave days</label>
            <div id="leavedays" className="daysummation">
              <div className="daysummation__left">
                {JSON.stringify(days) !== '{}' ? days : ''}days
              </div>
              <div className="daysummation__right">
                {type?.type} leave request
              </div>
            </div>

            <label for="purpose">justification</label>
            <textarea id="purpose" rows={3} cols={5} {...register('purpose')} />
            {errors.purpose && (
              <p className="form-error">{errors.purpose?.message}</p>
            )}

            <label for="relieve_officer">choose reliever</label>
            <Controller
              name="relieve_officer"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    onChange={field.onChange}
                    ref={field.ref}
                    options={getRelievers?.map((guest, index) => {
                      return {
                        label: formatOptionLabel(guest),
                        value: guest?.first_name,
                        key: index,
                        id: guest?.id,
                      };
                    })}
                    placeholder="Select reliever"
                    isSearchable={true}
                  />
                );
              }}
              rules={{ required: true }}
            />
            {errors.relieve_officer && (
              <p className="form-error">{errors.relieve_officer?.message}</p>
            )}
            {loading ? (
              <>
                <button className="mt-4">
                  <CircularProgress fontSize="small" />
                </button>
                {/* <Blocks
                  visible={true}
                  height="80"
                  width="80"
                  color="#0000"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                /> */}
              </>
            ) : (
              <>
                <input className="mt-5" type="submit" />
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
