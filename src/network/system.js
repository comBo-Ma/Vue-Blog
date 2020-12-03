import {request} from "@/network/request";

export function getSystemInfo(){
    return request({
        url:'/getSystemInfo',
        method: 'get'
    })
}
