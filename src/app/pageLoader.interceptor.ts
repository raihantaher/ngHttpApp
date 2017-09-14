import {Injectable, OnInit} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PageLoaderComponent implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Auth interceptor called");
        return next.handle(req);
    }
}