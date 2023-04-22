import { TestBed } from '@angular/core/testing';
import { XrplscanService } from './xrplscan.service';

describe('XrplscanService', () => {
  let service: XrplscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrplscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTransactionsById', () => {
    it('should return a transaction for a valid txId', async () => {
      const txId = '929D6B888E6920E2C72D5F52DFDB1D8BAB904AEDF437ED877466BF1587E23391';
      const transaction = await service.getTransactionsById(txId);
      expect(transaction).toBeDefined();
      expect(transaction.id).toEqual(txId);
    });

    it('should throw an error for an invalid txId', async () => {
      const txId = 'invalid_tx_id';
      await expectAsync(service.getTransactionsById(txId)).toBeRejected();
    });
  });

  describe('getTransactionsByAddress', () => {
    it('should return an array of transactions for a valid address', async () => {
      const address = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
      const transactions = await service.getTransactionsByAddress(address);
      expect(transactions).toBeDefined();
      expect(transactions.length).toBeGreaterThan(0);
      for (const transaction of transactions) {
        expect(transaction.account).toEqual(address);
      }
    });

    it('should throw an error for an invalid address', async () => {
      const address = 'invalid_address';
      await expectAsync(service.getTransactionsByAddress(address)).toBeRejected();
    });
  });

});

