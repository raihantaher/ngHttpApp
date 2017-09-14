import {Injectable, OnInit} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    
// Just to test if git is working

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Loggin interceptor called');
        return next.handle(req);
    }
  }