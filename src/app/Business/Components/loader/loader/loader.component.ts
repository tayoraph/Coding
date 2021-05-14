import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/Business/loader/loader.service';
import { LoaderState } from 'app/Business/models/loaderState';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

 
  loading = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.loading = state.show;

      });
  }
}
