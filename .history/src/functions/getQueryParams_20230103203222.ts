/**
 * 
 * @param URL URL
 * @returns 
 */
const getQueryParams:(URL:string) => string = URL => {
    return JSON.parse('{"' + decodeURI(URL.split('?')[1].replace(/&/g, '","')
        .replace(/=/g, '":"') + '"}'));
}

export default getQueryParams;