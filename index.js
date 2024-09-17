const landingPage = document.querySelector('.conteinerProfile');
const sobreMin = document.querySelector('.sobreMin');
const conhecimentos = document.querySelector('.conhecimentos');
const projetos = document.querySelector('.projetos');
const footer = document.querySelector('.mais');
// botões 
const btnSobre = document.querySelector('#btnSobre');
const btnConhecimentos = document.querySelector('#btnConhecimentos');
const btnProjetos = document.querySelector('#btnProjetos');
const Btnmais = document.querySelector('#btnMais');

const ativo_Off = {
  ativo: 'flex',
  desativado: 'none'
}

btnSobre.addEventListener('click', function(){
  sobreMin.style.display = ativo_Off.ativo;
  landingPage.style.display = ativo_Off.ativo;
  conhecimentos.style.display = ativo_Off.desativado;
  projetos.style.display = ativo_Off.desativado;
  footer.style.display = ativo_Off.desativado;
  window.scrollTo(0, 0);
});
btnConhecimentos.addEventListener('click', function(){
  conhecimentos.style.display = ativo_Off.ativo;
  landingPage.style.display = ativo_Off.desativado;
  sobreMin.style.display = ativo_Off.desativado;
  projetos.style.display = ativo_Off.desativado;
  footer.style.display = ativo_Off.desativado;
  window.scrollTo(0, 0); 
});
btnProjetos.addEventListener('click', function(){
  projetos.style.display = ativo_Off.ativo;
  landingPage.style.display = ativo_Off.desativado;
  sobreMin.style.display = ativo_Off.desativado;
  conhecimentos.style.display = ativo_Off.desativado;
  footer.style.display = ativo_Off.desativado;
  window.scrollTo(0, 0); 
});
Btnmais.addEventListener('click', function(){
  footer.style.display = ativo_Off.ativo;
  landingPage.style.display = ativo_Off.desativado;
  sobreMin.style.display = ativo_Off.desativado;
  conhecimentos.style.display = ativo_Off.desativado;
  projetos.style.display = ativo_Off.desativado;
  window.scrollTo(0, 0);
});

const myObserve = new IntersectionObserver((observ) =>{
  observ.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    }else{
      entry.target.classList.remove("show");
      console.log(entry.isIntersecting,"erro");
    }
  })
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserve.observe(element));
   
