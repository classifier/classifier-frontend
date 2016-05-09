import {Component} from 'angular2/core';
import {StarsComponent} from './stars/stars.component';
import {SparkService} from '../services/spark.service';
import 'rxjs/Rx';

@Component({
    selector: 'app',
    templateUrl: 'app/components/app.html',
    styleUrls: ['app/components/app.css'],
    directives: [StarsComponent]
})
export class AppComponent {
    rate: number;

    constructor(private sp: SparkService) {
        this.rate = 3;
    }

    updateStar(event) {
        if (event.code == 'Space') {
          this.sp.getStars(star => this.rate = star);
        }
    }
}
