import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementref:ElementRef) { }
  ngOnInit(): void {
    console.log(this.elementref.nativeElement.innerHTML.toUpperCase());
    this.elementref.nativeElement.style.backgroundColor='green';
    this.elementref.nativeElement.innerHTML=this.elementref.nativeElement.innerHTML.toUpperCase();
  }

}
