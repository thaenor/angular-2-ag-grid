import {Component} from 'angular2/core';
import {TableComponent} from '../table/table.component';

@Component({
    selector: 'xplore-sidebar',
    templateUrl: 'dev/sidebar/sidebar.html',
    directives: [TableComponent]
})
export class SidebarComponent {
}