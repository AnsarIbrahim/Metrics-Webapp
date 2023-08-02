import { configureStore } from '@reduxjs/toolkit';
import detailsReducer, { fetchData } from '../../redux/Details/DetailsSlice';

describe('detailsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        details: detailsReducer,
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
    expect(store.getState().details.kuralData).toEqual(mockData);
    expect(store.getState().details.status).toEqual('succeeded');
    expect(store.getState().details.error).toBeNull();

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
    expect(store.getState().details.kuralData).toBeNull();
    expect(store.getState().details.status).toEqual('failed');
    expect(store.getState().details.error).toEqual(errorMessage);

    fetchMock.mockRestore();
  });

  it('should set loading state when fetching data', () => {
    const num = 1;

    const promise = store.dispatch(fetchData(num));

    expect(store.getState().details.status).toEqual('loading');
    expect(store.getState().details.error).toBeNull();

    return promise;
  });
});
