import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiKeyService {
  apiKey: string = 'DLNje6ONPgonfkBpfHdzkQ==Pohb3AO4m54dw2ZK';

  getApiKey() {
    return this.apiKey;
  }
}