import React, { useEffect, useState } from 'react';
import Routes from './Routes';

import { setDept, selectDept } from '../redux/confSlice/confSlice';
import { useDispatch, useSelector } from 'react-redux';

import { getDepartment } from '../api/axios';
import { isMobile } from 'react-device-detect'; // isMobile도 삭제 가능하다면 제거하고싶음

/**
 * React App
 * @namespace App
 * @returns {JSX.Element} App with GlobalStyles, Routes
 */

const App = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const dept = useSelector(selectDept);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const res = await getDepartment();
        setData(res.data);
      } catch (error) {
        console.error('Error fetching department data: ', error);
      }
    };

    fetchDepartment();
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem('global-zone-lang') === null) {
      window.localStorage.setItem('global-zone-lang', 'kor');
    }
  }, []);

  useEffect(() => {
    if (data && data.data) {
      dispatch(setDept(data));
    }
  }, [data, dispatch]);

  return dept ? <Routes /> : <div>서버 오류입니다. 관리자에게 문의하십시오.</div>;
};

export default App;
