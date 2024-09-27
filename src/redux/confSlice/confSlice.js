import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import parseDate from "../../modules/parseDate";

/**
 * ReduxSlice - conf
 * @type {Slice<{dept: {}}, {setDept: reducers.setDept}, string>}
 */
export const confSlice = createSlice({
  name: "conf",
  initialState: {
    dept: {},
    today: moment(Date.now()).format("YYYY-MM-DD"),
    selectDate: moment(Date.now()).format('YYYY-MM-DD'),
    language: 'korean',
  },
  reducers:{
    /**
     학과 정보 요청 실패시: {message: "계열/학과 목록 조회에 실패하였습니다."}
     학과 정보 요청 성공시: {data: [{dept_id: 1, dept_name: "컴정_컴퓨터정보계열", created_at: null, updated_at: null},…]
     message: "계열/학과 목록 조회에 성공하였습니다."}
     */
    setDept: (state, action) => {
      // 액션에 학과 정보 요청의 결과를 그대로 넣는듯
      // 그래서 data가 undefined(요청실패)아니면 배열이라서 typeof data === 'object' 로 배열인지 확인함
      let data = action.payload.data;
      if (typeof data === 'object') {
        for (let index in data){
          // dept_name 이 원래 컴정_컴퓨터정보계열인데 이걸 쪼개서 배열로 만듬
          data[index].dept_name = data[index].dept_name.split("_")
        }
      }
      state.dept = data;
    },
    setSelectDate: (state, action) => {
      state.selectDate = moment(action.payload, 'YYYY-MM-DD').format('YYYY-MM-DD');
    },
    setLanguage: (state, action) => {
			state.language = action.payload;
		},
    setTodayToday: (state) => {
			state.today = parseDate(new Date(Date.now()));
		},
		setTodayFuture: (state) => {
			state.today = parseDate(new Date(Date.now() + 2));
		},
  }
})

export const {
	setDept,
	setSelectDate,
	setTodayFuture,
	setTodayToday,
	setLanguage,
} = confSlice.actions;

export const selectDept = (state) => state.conf.dept;
export const selectToday = (state) => state.conf.today;
export const selectSelectDate = (state) => state.conf.selectDate;
export const selectLanguage = (state) => state.conf.language;

export default confSlice.reducer;