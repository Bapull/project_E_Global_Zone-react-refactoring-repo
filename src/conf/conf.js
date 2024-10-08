// 자주쓰는 문자열들을 변수명으로 만들어서 오타체크를 하기 좋게 만든 파일
// 코드에 '컴퓨터정보계열' 이라고 쓰면 오타 발생시 런타임에러가 생기지만
// 이렇게 만들고 이 파일을 import 한 다음에 COMINFO라고 쓰면
// 오타가 생기면 컴파일에러가 생겨서 훨씬 고치기 편하다
const MANAGER = "MANAGER";
const FOREIGNER = "FOREIGNER";
const KOREAN = "KOREAN";

const COMINFO = "컴퓨터정보계열";
const MECHANICAL = "컴퓨터응용기계계열";
const ICT = "ICT반도체전자계열";
const ELECTRICAL = "신재생에너지전기계열";
const ARCHITECTURE = "건축인테리어디자인계열";
const MILITARY = "부사관계열";
const DESIGN = "콘텐츠디자인과";
const DRONE = "드론항공전자과";
const BUSINESS = "경영회계서비스계열";
const TOURISM = "호텔항공관광계열";
const WELFARE = "사회복지과";
const CHILDHOOD = "유아교육과";
const HELTH = "보건의료행정과";
const NURSING = "간호학과";

const ENGLISH = "영어";
const JAPANESE = "일본어";
const CHINESE = "중국어";

const conf = {
	userClass: {
		MANAGER,
		FOREIGNER,
		KOREAN,
	},
	department: {
		COMINFO,
		MECHANICAL,
		ICT,
		ELECTRICAL,
		ARCHITECTURE,
		MILITARY,
		DESIGN,
		DRONE,
		BUSINESS,
		TOURISM,
		WELFARE,
		CHILDHOOD,
		HELTH,
		NURSING,
	},
	shortDepartment: [
		"",
		"컴정",
		"기계",
		"전자",
		"전기",
		"디자인",
		"드론",
		"경영",
		"건축",
		"부사관",
		"관광",
		"복지",
		"유아",
		"보건",
		"간호",
	],
	language: {
		ENGLISH,
		JAPANESE,
		CHINESE,
	},

	url: process.env.REACT_APP_BASE_URL,
	// url: "http://www.94soon.net/",
};
// http://52.78.204.91/

export default conf;
