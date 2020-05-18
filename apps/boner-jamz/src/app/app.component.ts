import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'dubcdr-presents-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.http.get<string>('/api/spotify-proxy/authUrl', { responseType: 'text' })
      .pipe(tap(console.log))
      .subscribe((resp) => {
        this.document.location.href = resp;
      });
  }
}
