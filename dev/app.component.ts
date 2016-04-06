import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';


@Component({
    selector: 'my-app',
    template: `
        <section>
            <xplore-header></xplore-header>
        </section>
        <section>
            <xplore-sidebar></xplore-sidebar>
        </section>
    `,
    directives: [HeaderComponent, SidebarComponent]
})
export class AppComponent {

}