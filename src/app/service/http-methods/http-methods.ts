import { LoginUser } from './model/LoginUser';
import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// this path should be the models.ts in the model folder. from this folder you can get the models
import * as models from './model/models';
// this path should be for variables.ts file
import { BASE_PATH } from './variables';
// form the configuration you can add the HTTP configuration such as token, API key its 
import { Configuration } from './configuration/configuration';

/*
  Generated class for the HttpMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpMethodsProvider {
  protected basePath = "http://localhost:4100"
  public defaultHeaders: Headers = new Headers();
  public configuration: Configuration = new Configuration();

  constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    console.log('Hello HttpMethodsProvider Provider');

    /** 
     this.defaultHeaders.set("name", "Value")
     this defalut headers are public so you can access it from any where
     */

    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
    }
  }




	/**
    * 
    * Extends object by coping non-existing properties.
    * @param objA object to be extended
    * @param objB source object
    */
  private extendObj<T1, T2>(objA: T1, objB: T2) {
    let t: any;
    for (let key in objB) {
      if (objB.hasOwnProperty(key)) {
        t = key;
        objA[t] = objB[key];
      }
    }
    return <T1 & T2>objA;
  }








  //-----------------------------------making an Post method for user---------------------------------------------

  public addUser(user: models.LoginUser, extraHttpRequestParams?: any): Observable<any> {
    return this.addusersWithHttpInfo(user, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }


  public addusersWithHttpInfo(user: models.LoginUser, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.basePath + `/user`;

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
    // verify required parameter 'wallet' is not null or undefined
    if (user === null || user === undefined) {
      throw new Error('Required parameter wallet was null or undefined when calling addWallets.');
    }
    // to determine the Content-Type header
    let consumes: string[] = [
    ];
    // to determine the Accept header
    let produces: string[] = [
      'application/json'
    ];
    // authentication (OauthSecurity) required
    // oauth required
    if (this.configuration.accessToken) {
      headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
    }
    headers.set('Content-Type', 'application/json');
    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      body: user == null ? '' : JSON.stringify(user), // https://github.com/angular/angular/issues/10612
      search: queryParameters
    });

    // https://github.com/swagger-api/swagger-codegen/issues/4037
    if (extraHttpRequestParams) {
      requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
  }

  // -------------------------------------------------------------------------------------------------------------








  //-----------------------------------making an Get method for user----------------------------------------------

  /**
   * this method can also send without quarry params
   */

  public getUser(id: string, extraHttpRequestParams?: any): Observable<Array<any>> {
    return this.getUserWithHttpInfo(id, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }

  public getUserWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.basePath + `/instruments/account/${id}`;

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getAccount.');
    }
    // to determine the Content-Type header
    let consumes: string[] = [
    ];

    // to determine the Accept header
    let produces: string[] = [
      'application/json'
    ];

    // authentication (OauthSecurity) required
    // oauth required
    if (this.configuration.accessToken) {
      headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
    }

    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Get,
      headers: headers,
      search: queryParameters
    });

    // https://github.com/swagger-api/swagger-codegen/issues/4037
    if (extraHttpRequestParams) {
      requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
  }

  // -------------------------------------------------------------------------------------------------------------








  //--------------------------------making an Update method for user---------------------------------------------



  public updateUser(id: string, body: models.LoginUser, extraHttpRequestParams?: any): Observable<any> {
    return this.updateUsersWithHttpInfo(id, body, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }



  public updateUsersWithHttpInfo(id: string, body: models.LoginUser, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.basePath + `/instruments/wallet/${id}`;

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateWallets.');
    }
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateWallets.');
    }

    // to determine the Content-Type header
    let consumes: string[] = [
    ];

    // to determine the Accept header
    let produces: string[] = [
      'application/json'
    ];

    // authentication (OauthSecurity) required
    // oauth required
    if (this.configuration.accessToken) {
      headers.set('Authorization', 'Bearer ' + this.configuration.accessToken);
    }
    headers.set('Content-Type', 'application/json');

    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Patch,
      headers: headers,
      body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
      search: queryParameters
    });

    // https://github.com/swagger-api/swagger-codegen/issues/4037
    if (extraHttpRequestParams) {
      requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
  }

  // -------------------------------------------------------------------------------------------------------------









  //--------------------------------making an Delete method for user---------------------------------------------



  public deleteUser(id: string, extraHttpRequestParams?: any): Observable<any> {
    return this.deleteUserWithHttpInfo(id, extraHttpRequestParams)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }



  public deleteUserWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
    const path = this.basePath + `/instruments/account/${id}`;

    let queryParameters = new URLSearchParams();
    let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteAccount.');
    }
    // to determine the Content-Type header
    let consumes: string[] = [
    ];

    // to determine the Accept header
    let produces: string[] = [
      'application/json'
    ];

    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Delete,
      headers: headers,
      search: queryParameters
    });

    // https://github.com/swagger-api/swagger-codegen/issues/4037
    if (extraHttpRequestParams) {
      requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
    }

    return this.http.request(path, requestOptions);
  }

  // -------------------------------------------------------------------------------------------------------------

}
