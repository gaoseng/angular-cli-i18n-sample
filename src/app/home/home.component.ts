import { Component, OnInit } from '@angular/core';
import { HttpService } from "../config/http.service";
import { Observable, Subject } from "rxjs";
import { debounce } from 'rxjs/operator/debounce';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  withRefresh = false;
packages$: Observable<any>;
 searchText$ = new Subject<any>();
 debounce = {
   commit: new Subject<any>(),
   debounceTime:500,
   commitSub:null,
 }

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getConfig().subscribe(data=>{
      // console.log(data);
    });
    this.http.getConfigResponse().subscribe(resp => {
      // console.log(resp)
    })
    
    //  this.searchText$.pipe(
    //   debounce(500),
    //   distinctUntilChanged(),
    //   switchMap(() => {
    //     this.http.getConfig();
    //   })

    // )
    this.debounce.commit.debounceTime(100).subscribe(item=>{
      // console.log(item);
    })
    
    
  }  

  search(packageName: string){
    this.debounce.commit.next(packageName)
  }

}
