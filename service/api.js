/**
 * Created by Stone on 2016/12/23.
 */


const isProd = true;
let prodDemon = 'http://www.moguiweb.com.cn';
let localDemon = 'http://172.22.100.123';
let demon = localDemon;
if (isProd) {
    demon = prodDemon;
}
const api = {
    article: {
        getAll: demon + '/api/article/list/0',
        getPage: demon + '/api/article/page',//:category/:index/:size
    }
};

export default api;