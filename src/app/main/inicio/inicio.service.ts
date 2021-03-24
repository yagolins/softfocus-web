import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  urlRest= 'http://localhost:8080/api/playlist/';
  urlCidade = this.urlRest + 'listByNomeCidade/'
  urlCoordenadas = this.urlRest + 'listByCoordenadas/'

  constructor(
    private _httpClient: HttpClient
  ) {}

  listPorCoordenadas(latitude: string, longitude: string,  callbackSuccess: any, callbackError: any, callbackFinally: any): any {

    this._httpClient.get(this.urlCoordenadas +  latitude + '/' + longitude)
      .subscribe(
        (response: any) => {
          callbackSuccess(response);
          callbackFinally();
        },
        error => {
          callbackError(error);
          callbackFinally();
        }
      );
  }

  listPorCidade(nomeCidade: string,  callbackSuccess: any, callbackError: any, callbackFinally: any): any {

    this._httpClient.get(this.urlCidade + nomeCidade)
      .subscribe(
        (response: any) => {
          callbackSuccess(response);
          callbackFinally();
        },
        error => {
          callbackError(error);
          callbackFinally();
        }
      );
  }
}
