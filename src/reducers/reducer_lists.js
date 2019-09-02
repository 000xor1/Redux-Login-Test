import { FETCH_LOGIN } from "../actions/index";

const initialState = {
  userName: false,
  token: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      //userName과 JWT이 Response 됨 -> Redux에 저장 즉, 리듀서(Reducer)가 스토어(Store)의 상태(State)르 변경시킴
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName
      };

    default:
      return state;
  }
}
