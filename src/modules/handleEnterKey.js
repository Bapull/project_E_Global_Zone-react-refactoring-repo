export const handleEnterKey = (e, callBack) => {
// 이벤트 객체와 콜백함수를 받아서 엔터키가 눌리면 콜백함수를 실행한다.
	if (e.keyCode === 13) {
		callBack();
	}
};
