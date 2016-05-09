import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'stars',
    templateUrl: 'app/components/stars/stars.html',
    styleUrls: ['app/components/stars/stars.css']
})
export class StarsComponent {
    @Input() rate: number;
    stars = [1, 2, 3, 4, 5];
}
