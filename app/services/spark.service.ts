import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Injectable()
export class SparkService {
    constructor(private http: Http) { }

    getStars(callback: (star: number) => void) {
      this.http.get('localhost:8000/predict').map(
        response => response.json().subscribe(
          data => callback(data["result"])
        )
      )
    }

}
