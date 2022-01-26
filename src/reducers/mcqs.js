import { UPDATE_MCQS } from "../actions/actionTypes";

const initialMcqState=[];

export default function mcqs(state=initialMcqState,action){
    switch(action.type){
        case UPDATE_MCQS:
            return action.mcqs;
        default:
            return state;   
    }
}