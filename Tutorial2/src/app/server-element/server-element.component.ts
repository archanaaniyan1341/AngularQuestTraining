import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements
 OnInit,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,
 AfterViewChecked,OnDestroy{
@Input('srvElement') element:{type:string,name:string,content:string}
  constructor() { 
    console.log('constructor called')
  }
ngOnChanges(changes:SimpleChange){
  console.log('ngoNCHANGES called')
  console.log(changes)
}
  ngOnInit(): void {
    console.log('ngoninit called');
    //console.log('TextContent: ' +this.header.nativeElement.textContent)
  }
ngDoCheck(){
  console.log('ngdocheck called')
}
ngAfterContentInit(){
  console.log('ngaftercontentinit called')
}
ngAfterContentChecked(){
  console.log('ngaftercontentchecked called')
}
ngAfterViewInit(){
  console.log('ngafterviewinit called')
}
ngAfterViewChecked(){
  console.log('ngafterviewchecked called')
}
ngOnDestroy(){
  console.log('ngONDESTROYcalled')
}
}
