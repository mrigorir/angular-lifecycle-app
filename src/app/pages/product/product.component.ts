import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('Constructor');
  }

  isProductVisible: boolean = false;
  currentPrice: number = 10

  ngOnInit(): void {
    console.log('ngOnInit()');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges(changes: SimpleChanges)');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  increasePrice(): void {
    this.currentPrice++;
  }
}
