import { IPAPIConfig } from './config/ip-api-config';
import IPAPI from './index';
import nock from 'nock';

describe('IPAPI', () => {
  const ipAPIURL = 'http://ip-api';
  const config: IPAPIConfig = {
    url: ipAPIURL
  };
  const ipAPI = new IPAPI(config);

  it('should return data when lookup returns 200', async () => {
    // Arrange
    const response: any = { query: '127.0.0.1' };
    nock(ipAPIURL)
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'authorization'
      })
      .options('/json')
      .reply(204, {})
      .get('/json')
      .reply(200, response);

    // Act
    const result = await ipAPI.lookup();

    // Assert
    expect(result).toEqual(response);
  });

  it('should throw when lookup returns non 200', async () => {
    // Arrange
    nock(ipAPIURL)
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-headers': 'authorization'
      })
      .options('/json')
      .reply(204, {})
      .get('/json')
      .reply(404, {});

    // Act
    const result = ipAPI.lookup();

    // Assert
    await expect(result).rejects.not.toBeNull();
  });
});
