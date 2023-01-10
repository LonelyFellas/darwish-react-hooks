/**
 * 
 * @param URL URL地址
 * @returns URL中所带的参数
 */
const getQueryParams:(URL:string) => string = URL => {
    return JSON.parse('{"' + decodeURI(URL.split('?')[1].replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}'));
}

export default getQueryParams;