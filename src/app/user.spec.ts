import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';

describe('UserService', () => {
  let service: User;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [User],
    });
    service = TestBed.inject(User);
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

  it('User created', () => {
    expect(service).toBeDefined();
  });
});

