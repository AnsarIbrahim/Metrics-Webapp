import { configureStore } from '@reduxjs/toolkit';
import homeReducer, { fetchData } from '../../redux/Home/HomeSlice';

describe('homeSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        home: homeReducer,
      },
    });
  });

  it('should fetch data and update the state on successful fetch', async () => {
    const num = 1;
    const mockData = {
      num: 1,
      someData: '...',
    };

    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    await store.dispatch(fetchData(num));

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api-thirukkural.vercel.app/api?num=${num}`,
    );
    expect(store.getState().home.data).toContainEqual(mockData);
    expect(store.getState().home.status).toEqual('succeeded');
    expect(store.getState().home.error).toBeNull();

    fetchMock.mockRestore();
  });

  it('should set error state on failed fetch', async () => {
    const num = 1;
    const errorMessage = 'Failed to Fetch data from the API';

    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    });

    await store.dispatch(fetchData(num));

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api-thirukkural.vercel.app/api?num=${num}`,
    );
    expect(store.getState().home.data).toHaveLength(0);
    expect(store.getState().home.status).toEqual('failed');
    expect(store.getState().home.error).toEqual(errorMessage);

    fetchMock.mockRestore();
  });

  it('should set loading state when fetching data', () => {
    const num = 1;

    const promise = store.dispatch(fetchData(num));

    expect(store.getState().home.status).toEqual('loading');
    expect(store.getState().home.error).toBeNull();

    return promise;
  });
});
