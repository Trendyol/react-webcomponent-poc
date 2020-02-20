import { Config } from '../../config/model';

import IPAPI from './ip-api';

export default (config: Config) => ({
  ip: new IPAPI(config.ip)
});
