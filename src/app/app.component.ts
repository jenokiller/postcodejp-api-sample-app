import { Component } from '@angular/core';
import {PostcodeService} from './services/postcode.service';

@Component({
  selector: 'postcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiResponse: any = null;
  postcode = '';
  errorMessage = '';

  constructor(private postcodeService: PostcodeService) {}

  getAddress() {
    this.errorMessage = '';
    if (this.postcode.length === 7) {
      this.postcodeService.getAddressUsingPostcode(this.postcode).subscribe(
        res => {
          this.apiResponse = res;
        },
        error => {
          this.errorMessage = '郵便番号検索に失敗しました。';
        }
      );
    } else {
      this.errorMessage = '適切な郵便番号を入力してください。';
    }
  }
}
