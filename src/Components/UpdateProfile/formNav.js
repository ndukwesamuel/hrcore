import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUserProfile} from "../../app/service/thunk/employee/profileThunk";
import PageLoader, {loaderReset, setLoading} from "../../utilities/PageLoader";
import {resetData} from "../../Feature/Admin/EmployeeDetails/EmployeeDetailSlice";
import {resetQual} from "../../Feature/Employee/Qualifications";
import {resetOrg} from "../../Feature/Employee/Organization";
import {resetBasicInfo} from "../../Feature/Employee/BasicInfoSlice";

const FormNav = ({prevStep, nextStep, isLast = false, isFirst = false}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    let profile = {};
    const basic_info = useSelector(
        (state) => state.reducer.basicInfoSliceReducer
    );
    const organisation = useSelector(
        (state) => state.reducer.organisationSliceReducer
    );

    const education = useSelector((state) => state.reducer.qualificate);

    const submitProfile = async (e) => {
        setLoading(true);
        e.preventDefault();

        Object.assign(profile, {
            first_name: basic_info.first_name,
            last_name: basic_info.last_name,
            middle_name: basic_info.middle_name,
            personal_email: basic_info.personal_email,
            phone: basic_info.phone,
            gender: basic_info.gender,
            marital_status: basic_info.marital_status,
            dob: basic_info.dob,
            department: organisation.department,
            profile_image: basic_info.profile_image,
            designation: organisation.position,
            origin_state: basic_info.origin_state,
            origin_lga: basic_info.origin_lga,
            residence_state: basic_info.residence_state,
            residence_lga: basic_info.residence_lga,
        });

        const hmo = {
            provider: organisation.provider,
            hmo_id: organisation.hmo_id,
            hospital: organisation.hospital,
            status: organisation.status,
            plan: organisation.plan,
        };

        education?.length > 0 && Object.assign(profile, { education });
        hmo?.provider && Object.assign(profile, { hmo });
        profile = cleanData(profile);
        await dispatch(updateUserProfile(profile));
        dispatch(resetData());
        clearUpdateFormState();
        setLoading(false);

    };

    const cleanData = (data) => {
        for(let item in data) {
            if(data[item] === null || data[item] === undefined)
                delete data[item]
        }

        return data;
    }

    const clearUpdateFormState = () => {
        dispatch(resetQual());
        dispatch(resetOrg());
        dispatch(resetBasicInfo());
    }

    return <div className="space_buttonholder">
        {loading && <PageLoader />}
        {!isFirst && <button className="next_updatebutton" onClick={prevStep}>
            <AiOutlineArrowLeft style={{ marginRight: '10px' }} />{' '}
            Prev
        </button>}

        {!isLast ? <button className="next_updatebutton" onClick={nextStep}>
            Next
            <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
        </button> :
        <button className="submit" onClick={submitProfile}>
            Submit
        </button>
        }
    </div>
}

export default FormNav;