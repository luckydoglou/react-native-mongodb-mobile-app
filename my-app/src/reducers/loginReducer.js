const initialState = {
    username: "",
    password: ""
}

const getUsername = 'getUsername';
const getPassword = 'getPassword';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case getUsername:
            return { ...state, username: action.payload }
        case getPassword:
            return { ...state, password: action.payload }
        default:
            return state;
    }
}

export function setUsername(username) {
    return { type: getUsername, payload: username };
}

export function setPassword(password) {
    return { type: getPassword, payload: password }
}
