import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class PostcodeService {
  constructor(private http: HttpClient) {}
  private apiEndPoint: string = 'https://apis.postcode-jp.com/api/v2';


  getAddressUsingPostcode(postcode: string): Observable<any> {
    let httpParams = new HttpParams()
      .set('postcode', postcode);

    return this.http.jsonp<any>(`${this.apiEndPoint}/postcodes?${httpParams.toString()}`, 'callback');
  }
}
