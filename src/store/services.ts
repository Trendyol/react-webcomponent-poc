import { Config } from '../../config/model';
import createServices from '../services/index';
// tslint:disable-next-line:no-var-requires
const config: Config = require('@config').default;

export default createServices(config);
