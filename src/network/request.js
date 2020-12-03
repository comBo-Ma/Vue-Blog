import axiox from 'axios';
export function request(config){
    const instance=axiox.create({
        baseURL:'https:localhost:8081',
        timeout: 5000,
    })
    return instance.request(config);
}
