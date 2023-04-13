import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiKeyService } from '../../services/api-key.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private apiKey: ApiKeyService) {}

  getApiKey(): string {
    return this.apiKey.getApiKey();
  }

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {

    const apiKey = this.getApiKey();
    const cloneReq = request.clone({
      headers: request.headers.set('X-Api-Key', apiKey),
    });

    return next.handle(cloneReq);
  }
}
