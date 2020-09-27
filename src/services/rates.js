import fetch from 'node-fetch';

class Rates {
    all = {};

    getRates = async (exchangeRate) => {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/NGN.json');
      const data = await response.json();
      if (typeof data.bpi !== 'undefined') {
        const { rate_float: USD } = data.bpi.USD;
        const { rate_float: NGN } = data.bpi.NGN;
        let rate = 0;
        if (typeof exchangeRate !== 'undefined') {
          rate = exchangeRate;
        } else {
          rate = NGN / USD;
        }
        this.all['USD/NGN'] = rate;
        this.all['BTC/USD'] = USD;
      }
      return data;
    };
}

export default new Rates();
