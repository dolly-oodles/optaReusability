import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dummy',
    standalone: true,
    imports: [],
    templateUrl: './dummy.component.html',
    styleUrl: './dummy.component.css'
})
export class DummyComponent {
    pageTitle: string = '';

    constructor(public route: ActivatedRoute) { }

    ngOnInit() {
        // Get the last segment of the route and format it
        this.route.url.subscribe(urlSegments => {
            if (urlSegments.length > 0) {
                this.pageTitle = urlSegments[urlSegments.length - 1].path.replace(/-/g, ' ');
            }
        });
    }

}
