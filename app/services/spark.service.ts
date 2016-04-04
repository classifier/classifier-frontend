import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core'

@Injectable()
export class SparkService {
    constructor(private http: Http) { }

    getStars() {
        return Math.floor(Math.random() * 5 + 1);
    }

}
