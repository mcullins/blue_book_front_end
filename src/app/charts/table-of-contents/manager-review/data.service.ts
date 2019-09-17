import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Http } from "@angular/http";
import { MgrRvw } from './dataclass';
import { FakeBackendInterceptor } from "./backend-server";


@Injectable()
export class DataService {

    private static handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if (error.status === 404) {
                errMsg = `Resource ${error.url} was not found`;
            } else {
                const body = error.json() || '';
                const err = JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

    constructor(private http: Http) { }


    // getAllData(): Observable<MgrRvw[]> {
        // return this.http.get('/charts/table_of_contents/manager-review/data')
        //     .do(value => console.log(value))
        //    .catch(DataService.handleError);

    // }


}