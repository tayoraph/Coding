import { HttpHeaders } from "@angular/common/http";
import { eventNames } from "process";
import { environment } from '../.././../environments/environment';

export class Constants {
  // headers
  httpHeader() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "",
      "Access-Control-Allow-Origin": "*",
      "x-rapidapi-key": environment.Authorization.key,
      "x-rapidapi-host": environment.Authorization.host
    });
    return headers;
  }
}
