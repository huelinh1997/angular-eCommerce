import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsService } from './carts.service';
import { CartsComponent } from './carts.component';

@NgModule({
  declarations: [CartsComponent],
  providers: [CartsService],
  imports: [CommonModule],
  exports: [CartsComponent],
})
export class CartsModule {}
