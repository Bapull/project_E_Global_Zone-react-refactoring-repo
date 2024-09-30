/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

/**
 * Hooks - useClick for onClick event
 * @param {callback} onClick - callback function
 * @returns {React.MutableRefObject<null>}
 */
const useClick = (onClick) => {
	// 클릭이벤트의 콜백함수를 받아서 ref객체를 반환하는 커스텀 훅
	// 이 훅의 리턴값을 나중에 DOM객체에 ref로 연결하면 그 객체에 클릭이벤트가 생긴다.
	const element = useRef();
	useEffect(() => {
    if (typeof onClick !== "function") {
			return;
		}
		if (element.current) {
			element.current.addEventListener("click", onClick);
			element.current.style.cursor = "pointer";
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener("click", onClick);
			}
		};
	}, []);
	return element;
}
export default useClick