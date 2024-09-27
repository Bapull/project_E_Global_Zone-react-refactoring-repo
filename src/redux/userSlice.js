import { createSlice } from "@reduxjs/toolkit";

// 슬라이스: 스토어에 저장된 상태중 유저에 관련된 상태를 슬라이스해서 따로 선언하는거
/**
 * ReduxSlice - user
 * @type {Slice<{isLogin: boolean, user}, {setClass: reducers.setClass, logIn: reducers.logIn, logOut: reducers.logOut}, string>}
 */
export const userSlice = createSlice({
  // 슬라이스 이름
  name: 'user',
  // 유저의 초기 상태를 로컬스토리지에서 가져오고 없으면 빈 문자열로 함
  initialState:{
    isLogin: window.localStorage.getItem("global-zone-isLogin"),
		user: {
			id: window.localStorage.getItem("global-zone-loginId")
				? window.localStorage.getItem("global-zone-loginId")
				: "",
			userClass: window.localStorage.getItem("global-zone-userClass")
				? window.localStorage.getItem("global-zone-userClass")
				: "",
			name: window.localStorage.getItem("global-zone-loginName")
				? window.localStorage.getItem("global-zone-loginName")
				: "",
		},
  },
  // 이 상태에 대해서 할 수 있는 동작들
  reducers: {
    logIn: (state) => {
			state.isLogin = true;
		},
		logOut: (state) => {
			state.isLogin = false;
		},
		setClass: (state, action) => {
			state.user = {
				id: action.payload[0],
				userClass: action.payload[1],
				name: action.payload[2],
			};
		},
  },
})

export const { logIn, logOut, setClass } = userSlice.actions;
// 로그인 중인지 아닌지 확인
export const selectIsLogin = (state) => state.user.isLogin;
// 유저 정보를 객체로 가져옴
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;