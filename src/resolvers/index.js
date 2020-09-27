import Services from '../services';
const { Rates } = Services;

class PriceCalculator {
    compute = async (_, args) => {
    	let { type, margin, exchangeRate } = args;
    	await Rates.getRates(exchangeRate);
    	let currentPrice = 0;
    	let computedValue = (margin / 100) * Rates.all['BTC/USD'];

    	if (type === 'sell') {
    		currentPrice = Rates.all['BTC/USD'] - computedValue;
    	}else if (type === 'buy') {
    		currentPrice = Rates.all['BTC/USD'] + computedValue;
    	}
    	let calculatePrice = currentPrice * Rates.all['USD/NGN'];
    	return calculatePrice;
    }
}

export const priceCalculator = new PriceCalculator();
const Query = {
  calculatePrice: priceCalculator.compute
};

export default {Query};
