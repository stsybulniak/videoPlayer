import { render, waitFor } from '@testing-library/react';
import VideosPage from './VideosPage';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
// eslint-disable-next-line jest/no-mocks-import
import { mockFiles } from '../../__mocks__/mockFiles';

describe('Fetch videos', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    jest.clearAllMocks();
  });

  it('should fetch and render videos', async () => {
    mock.onGet('api/videos').reply(200, { list: mockFiles });

    const { baseElement } = render(<VideosPage />);

    expect(mock.history.get[0].url).toEqual('api/videos');

    //eslint-disable-next-line testing-library/no-node-access
    await waitFor(() => expect(baseElement?.querySelectorAll('.VideosList__item').length).toBe(3));
  });
});
