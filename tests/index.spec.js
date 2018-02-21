
import { expect } from 'chai';

import { searchAllCoin, searchSingleCoin } from '../api/index'

describe('Coinmarket', () => {

  describe('Smoke tests', () => {

    it('should exist search all coin method', () => {
      expect(searchAllCoin).to.exist;
    })

    it('should exist search single coin method', () => {
      expect(searchSingleCoin).to.exist;
    })

  })

})
