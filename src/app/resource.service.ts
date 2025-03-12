import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { lastValueFrom, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ResourceService {
    constructor(
        public httpclient: HttpClient,
    ) { }

    getData(url: string) {
        return lastValueFrom(
            this.httpclient.get<any>(url).pipe(catchError((error) => {
                return this.errorHandler(error);
            }))
        )
    }

    postData(url: string, data?: any) {
        return lastValueFrom(
            this.httpclient.post<any>(url, data, { observe: 'response' }).pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }))
        )
    }

    putData(url: string, data?: any) {
        return lastValueFrom(
            this.httpclient.put<any>(url, data, { observe: 'response' }).pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }))
        );
    }

    deleteData(url: string) {
        return lastValueFrom(
            this.httpclient.delete<any>(url, { observe: 'response' }).pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }))
        );
    }

    patchData(url: string, data: any) {
        return lastValueFrom(
            this.httpclient.patch<any>(url, data, { observe: 'response' }).pipe(
                catchError((error) => {
                    return this.errorHandler(error);
                }))
        )
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error || 'Error');
    }

}
