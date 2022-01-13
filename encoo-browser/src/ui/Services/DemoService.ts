import { default as axios } from 'axios';
class DemoServiceCls {
  getDemoList() {
    return axios.get('/api/rpaexaminfo/getuserrpaexamlist', {
      params: {
        pageIndex: 1,
        pageSize: 1000
      }
    });
  }
}
export const DemoService = new DemoServiceCls();
