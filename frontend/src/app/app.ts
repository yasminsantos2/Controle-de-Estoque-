import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Produto {
  id?: number;
  nome: string;
  sku: string;
  quantidade: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      
      <!-- Lado Esquerdo: Formulário -->
      <div class="card">
        <h2>Cadastrar Produto</h2>
        
        <form (ngSubmit)="criarProduto()">
          <div class="form-group">
            <label for="nome">Nome do Produto</label>
            <input type="text" id="nome" name="nome" [(ngModel)]="novoProduto.nome" placeholder="Ex: Teclado Mecânico" required>
          </div>

          <div class="form-group">
            <label for="sku">SKU (Código)</label>
            <input type="text" id="sku" name="sku" [(ngModel)]="novoProduto.sku" placeholder="Ex: TEC-001" required>
          </div>

          <div class="form-group">
            <label for="quantidade">Quantidade em Estoque</label>
            <input type="number" id="quantidade" name="quantidade" [(ngModel)]="novoProduto.quantidade" placeholder="0" required min="0">
          </div>

          <button type="submit" class="btn">Salvar Produto</button>
        </form>
      </div>

      <!-- Lado Direito: Lista Dinâmica -->
      <div class="card">
        <h2>Estoque Atual</h2>

        <div *ngIf="produtos.length === 0" class="empty-state">
          Nenhum produto cadastrado ainda.
        </div>

        <div class="product-list" *ngIf="produtos.length > 0">
          <div class="product-item" *ngFor="let prod of produtos">
            <div class="product-info">
              <h3>{{ prod.nome }}</h3>
              <p>SKU: {{ prod.sku }}</p>
            </div>
            <div class="product-qty">
              {{ prod.quantidade }} un
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class App implements OnInit {
  produtos: Produto[] = [];
  
  novoProduto: Produto = {
    nome: '',
    sku: '',
    quantidade: 0
  };

  private apiUrl = 'http://localhost:8083/produtos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.http.get<Produto[]>(this.apiUrl).subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos', erro);
      }
    });
  }

  criarProduto() {
    if(!this.novoProduto.nome || !this.novoProduto.sku) return;

    this.http.post<Produto>(this.apiUrl, this.novoProduto).subscribe({
      next: (produtoSalvo) => {
        // Atualiza a lista na tela automaticamente
        this.produtos.push(produtoSalvo);
        
        // Limpa o formulário
        this.novoProduto = {
          nome: '',
          sku: '',
          quantidade: 0
        };
      },
      error: (erro) => {
        console.error('Erro ao salvar produto', erro);
        alert('Houve um erro de conexão ao tentar salvar o produto.');
      }
    });
  }
}
