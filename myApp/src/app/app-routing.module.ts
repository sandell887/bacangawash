import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'previnir',
    loadChildren: () => import('./previnir1/previnir.module').then( m => m.PrevinirPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'proteger',
    loadChildren: () => import('./proteger2/proteger.module').then( m => m.ProtegerPageModule)
  },
  {
    path: 'contagem',
    loadChildren: () => import('./contagem3/contagem.module').then( m => m.ContagemPageModule)
  },
  {
    path: 'maneiras',
    loadChildren: () => import('./maneiras/maneiras.module').then( m => m.ManeirasPageModule)
  },
  {
    path: 'guialuno',
    loadChildren: () => import('./guialuno/guialuno.module').then( m => m.GuialunoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
