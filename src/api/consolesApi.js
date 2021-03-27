import Api from './api';

export default class ConsolesApi extends Api {
  getResult = (params = {}) => {
    return this.list(params);
  };
}
