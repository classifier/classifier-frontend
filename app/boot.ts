import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {HTTP_PROVIDERS} from 'angular2/http';
import {SparkService} from './services/spark.service';

bootstrap(AppComponent, [
    HTTP_PROVIDERS, SparkService
]);
