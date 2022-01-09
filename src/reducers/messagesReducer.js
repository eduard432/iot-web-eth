import { messageTypes } from "../types/messageTypes";

const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case messageTypes.setMessages:
            return {
                ...state,
                messages: action.payload
            }
    
        default:
            return state;
    }

}