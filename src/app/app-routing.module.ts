import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserComponent } from './components/user/user.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
    { path: '',
      component: SearchFormComponent 
    },
    { path: 'users', 
      component: UserComponent
    },
    { path: 'repos', 
      component: ReposComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
