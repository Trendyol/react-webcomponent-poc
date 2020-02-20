import axios from 'axios';
import urlJoin from 'url-join';
import { IPAPIConfig } from './config/ip-api-config';
import { IPQueryResponse } from './models/IPQueryResponse';

export class IPAPI {
  constructor(private readonly config: IPAPIConfig) {}

  private getURL(path: string): string {
    return urlJoin(this.config.url, path);
  }

  async lookup(): Promise<IPQueryResponse> {
    const url = this.getURL('/json');
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('status code != 200');
    }
    return response.data;
  }
}

export default IPAPI;
