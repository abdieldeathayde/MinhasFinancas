import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule],
  template: `
  <div class="shell">
    <aside class="sidebar"><div class="brand"><span class="brand-icon">✦</span><div><b>FinantialControl</b><small>CONTROLE FINANCEIRO</small></div></div>
      <nav><a class="active">▦ &nbsp; Saldo disponível</a><a>◷ &nbsp; Receitas e despesas</a><a>▤ &nbsp; Categorias financeiras</a><a>◫ &nbsp; Relatórios</a></nav>
      <div class="side-foot"><span class="avatar">AA</span><div><b>Minha conta</b><small>Workspace pessoal</small></div></div>
    </aside>
    <main><header><div><small>PAINEL / VISÃO GERAL</small><h1>Olá! 👋</h1><p>Acompanhe receitas, despesas e saldo em um só lugar.</p></div><button class="primary" (click)="showForm = !showForm">＋ Novo registro</button></header>
      <section class="stats"><article><span>Saldo disponível</span><strong>{{metric1}}</strong><small>{{label1}}</small></article><article><span>Registros ativos</span><strong>{{metric2}}</strong><small>Itens cadastrados</small></article><article><span>Última atualização</span><strong>Agora</strong><small>Dados da aplicação</small></article></section>
      <section class="panel" *ngIf="showForm"><h2>Novo registro</h2><p>Formulário inicial para conectar à API. Os endpoints de domínio devem ser adicionados conforme as entidades do projeto.</p><label>Descrição <input [(ngModel)]="description" placeholder="Digite uma descrição"></label><button class="primary" (click)="checkApi()">Verificar API</button><p>{{apiMessage}}</p></section>
      <section class="panel"><div class="panel-head"><div><h2>Comece por aqui</h2><p>Estrutura inicial do painel Angular.</p></div><span class="pill">Angular 20</span></div>
      <div class="empty"><div class="empty-icon">✦</div><h3>Organize sua vida financeira</h3><p>Cadastre receitas, despesas e categorias para acompanhar sua evolução.</p><button class="secondary" (click)="checkApi()">Testar conexão com backend</button><p class="status">{{apiMessage}}</p></div></section>
    </main>
  </div>`
})
export class AppComponent {
  showForm = false;
  description = '';
  apiMessage = 'Aguardando conexão';
  metric1 = '—';
  metric2 = '—';
  label1 = 'Conecte a API para carregar dados';
  constructor(private http: HttpClient) {}
  checkApi() {
    this.http.get<any>('http://localhost:8080/api/health').subscribe({
      next: (r) => this.apiMessage = 'API conectada: ' + r.status,
      error: () => this.apiMessage = 'Não foi possível conectar. Inicie o backend em localhost:8080.'
    });
  }
}
