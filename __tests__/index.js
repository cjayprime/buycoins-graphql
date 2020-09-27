import { priceCalculator } from '../src/resolvers';
import Services from '../src/services';
const { Rates } = Services;

describe('Application Tests', () => {
  test('Expect Rates.getRate() response to be truthy', async (done) => {
    const response = await Rates.getRates();
    expect(response);
    done();
  });

  test('Expect response from Rates.getRates to have data.bip.(USD|NGN)', async (done) => {
    const response = await Rates.getRates();
    expect(response).toHaveProperty('bpi.USD.rate', response.bpi.USD.rate);
    expect(response).toMatchObject(
      {
        'bpi': {
          'USD': {
            'code': 'USD',
          },
        }
      }
    );
    done();
  });

  test('Expect Rates.all to contain a BTC/USD rate, after a getRate call', async (done) => {
    await Rates.getRates();
    expect(Rates.all).toEqual(expect.objectContaining({'BTC/USD': expect.any(Number)}));
    done();
  });

  test('Expect Rates.all to contain a USD/NGN rate, after a getRate call', async (done) => {
    await Rates.getRates();
    expect(Rates.all).toEqual(expect.objectContaining({'USD/NGN': expect.any(Number)}));
    done();
  });

  test('Expect PriceCalculator.compute() to resolve to numeric value', async () => {
    const type = 'sell', margin = 0.2, exchangeRate = 350;
    const response = priceCalculator.compute(null, {type, margin, exchangeRate}, 'mock');
    return expect(response).resolves.not.toBeNaN();
  });
});
