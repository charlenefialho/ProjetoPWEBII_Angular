import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //não é necessario colocar o public caso a variavel seja publica
   nomeProduto: string = "Curso de Angular";
   anuncio: string = `O ${this.nomeProduto} está em promoção`;
   idProduto: number = 123;
   precoProduto: number = 2.59;
   promocao: boolean = true;

   constructor() {
     //variaveis de string com concatenação
     //this.anuncio = `O` + this.nomeProduto + `está em promoção!`;
      console.log('Nome do Produto: ',this.nomeProduto);
      console.log('Anuncio: ',this.anuncio);
      console.log('ID:', this.idProduto);
      console.log('Preço:', this.precoProduto);
      console.log('Promoção:', this.promocao);

      //Escopo das variaveis dentro do codigo
      var variavel1;
      let variavel2;
      //Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração
      const variavel3 = 3;


      //var
      var idade = 10
      console.log('Minha idade é :', idade);

      function imprimeIdade(){
        var idade = 20
        console.log('Minha idade é: ',idade)
      }
      imprimeIdade();

      function imprimeIdadevar(){
        for(var idade = 30; idade <=40; idade++)
        {
          console.log('Idade dentro do for:',idade)
        }
        console.log('Idade fora do for:' ,idade)
      }
      imprimeIdadevar()

      //let
      let idade2 = 10
      console.log('Minha idade é :', idade);

      function imprimeIdadelet(){
        let idade = 20
        console.log('Minha idade é: ',idade)
      }
      imprimeIdadelet();

      function imprimeIdadevar_let(){
        for(let idade = 30; idade <=40; idade++)
        {
          console.log('Idade dentro do for let:',idade)
        }
        console.log('Idade fora do for let:' ,idade)
      }
      imprimeIdadevar_let();


    }

  ngOnInit(): void {
  }

}
