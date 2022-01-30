import { APIUrls } from '../helpers/urls';
import getFormBody from '../helpers/utils';
import {UPDATE_CODE_MARKS} from '../actions/actionTypes';

export function executeCode(content){
    console.log(content);
    return (dispatch)=>{
        const url=APIUrls.codecompile();
        fetch(url,{
            method:'POST',
            // headers:{
            //     'Content-Type':'application/json',
            // },
            json:JSON.stringify(content)
        }).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            console.log(data);
            dispatch(updateCode(data.statusCode));
        });
    };
} 

export function updateCode(status){
    return {
        type:UPDATE_CODE_MARKS,
        status,
    };
} 