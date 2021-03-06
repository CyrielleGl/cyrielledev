import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'cyrielledev';
  yearNow = new Date().getFullYear().toString();
  appAuthor = 'Cyrielle Gallou';

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.utilsService.initFaIcons();
  }
}
