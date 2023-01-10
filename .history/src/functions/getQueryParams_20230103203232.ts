/**
 * 
 * @param URL URL地址
 * @returns URL中
 */
const getQueryParams:(URL:string) => string = URL => {
    return JSON.parse('{"' + decodeURI(URL.split('?')[1].replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}'));
}

export default getQueryParams;