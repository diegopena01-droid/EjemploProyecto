import { Routes } from '@angular/router';
import { AdminPage } from './pages/admin/admin.page';
import { AgentePage } from './pages/agent/agente.page';
import { ClientePage } from './pages/cliente/cliente.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

export const routes: Routes = [
	{ path: 'login', component: LoginPage },
	{ path: 'register', component: RegisterPage },
	{ path: 'admin', component: AdminPage },
	{ path: 'agente', component: AgentePage },
	{ path: 'cliente', component: ClientePage },
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login' },
];
