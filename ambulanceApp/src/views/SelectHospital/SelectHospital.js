/* eslint-disable */
import { useEffect, useState } from "react";
import ContentsBox from "../../components/ContentsBox/ContentsBox";
import Header from "../../components/Header/Header";
import { openapiGetEmergencyCenter } from "../../functions/axiosMethods";
import "./SelectHospital.css"

const SelectHospital = ({patient}) => {
    const [hospitalList, setHospitalList] = useState(null);

    useEffect(async () => {
        const {location} = patient;
        const {data} = await openapiGetEmergencyCenter(location);
        console.log(data);
    }, [])

    return(
        <>
            <Header name="병원선정" outline="환자를 수송할 병원을 선택합니다." />
            <div className="select-hospital">
                <ContentsBox className="map-contents" title="지도">

                </ContentsBox>
                <ContentsBox className="list-contents" title="병원 목록">

                </ContentsBox>
            </div>
        </>
    );
};

export default SelectHospital;