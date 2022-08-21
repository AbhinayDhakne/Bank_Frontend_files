import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from './account';

describe('Account', () => {
  let service: Account;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Account],
    });
    service = TestBed.inject(Account);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('is created', () => {
    expect(service).toBeDefined();
  });
  
  //const req = httpController.expectOne('login');

  it('Account created', () => {
    expect(service).toBeDefined();
  });
});

