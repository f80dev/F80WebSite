import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LinKutComponent} from "./produits/lin-kut/lin-kut.component";

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'linkut', component: LinKutComponent},
  { path: 'mentions', component: LinKutComponent}
];
