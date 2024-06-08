import { Routes } from '@angular/router';
import { HeadComponent } from './lala/head/head.component';
import { BodyComponent } from './lala/body/body.component';
import { FooterComponent } from './lala/footer/footer.component';

export const routes: Routes = [
    {path:'Head',component:HeadComponent},
    {path:'Body',component:BodyComponent},
    {path:'Footer',component:FooterComponent},
];
