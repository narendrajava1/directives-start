import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input()
   defaultColor:string='red';

  @Input()
   highlightColor:string='blue';

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    // console.log(this.renderer.setStyle(this.elementRef.nativeElement,'text-transform', 'uppercase'));
  }

  @HostBinding('style.textTransform') textTransform='lowercase'
  @HostBinding('style.backgroundColor') backgroundColor=this.defaultColor;

  @HostListener("mouseenter")
  mouseEnter(eventdata:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'text-transform', 'uppercase');
    this.textTransform='uppercase';
    this.backgroundColor=this.defaultColor;

    
  }
  @HostListener("mouseleave")
  mouseLeave(eventdata:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'text-transform', 'lowercase');
    this.textTransform='lowercase';
    this.backgroundColor=this.highlightColor;
  }
  

}
