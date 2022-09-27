//regras do churrascometro

/* Carne - 400gr por pessoa. + de 6h de festa, passa para 450gr
   Cerveja - 1200ml por pessoa. + de 6h de festa, passa para 2000ml
   Refri/água - 1000ml por pessoa. + de 6h de festa, passa para 1500ml

   Crianças valem por 0,5 pessoa*/

   let inputAdultos = document.getElementById("adultos");
   let inputCriancas = document.getElementById("criancas");
   let inputDuracao = document.getElementById("duracao");

   let resultado = document.getElementById("resultado");


   function carnePP(duracao){

   if (duracao >= 6){
      return 650;
   }
   else {
      return 400;
   }

   }

   function cervejaPP(duracao){

      if(duracao >= 6)
         return 2000
      else
         return 1200

   }

   function bebidaPP(duracao){

      if(duracao >= 6)
         return 1500
      else
         return 1000

   }


   function calcular(){

      let adultos = inputAdultos.value;
      let criancas = inputCriancas.value;
      let duracao = inputDuracao.value;

      let QdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
      let QdtTotalCerveja = cervejaPP(duracao) * adultos;
      let QdtTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);


      resultado.innerHTML = `<p><strong>${(QdtTotalCarne/1000)} Kg de carne</p></strong>`
      resultado.innerHTML += `<p><strong>${Math.ceil(QdtTotalCerveja/355)} latas de cerveja</p></strong>`
      resultado.innerHTML += `<p><strong>${Math.ceil(QdtTotalBebidas/2000)} litros de bebidas(água/refrigerante)</p></strong>`

   }