import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-billing-info',
  imports: [FormsModule, CommonModule, Header, Footer],
  templateUrl: './billing-info.html',
  styleUrl: './billing-info.css',
  standalone: true,
})
export class BillingInfo {
  SaveData(form: NgForm): void {
    console.log(form.value);
  }
}
