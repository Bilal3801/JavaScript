let timer=document.getElementById('time');
let time=60;
let score=0;
var hitrn;
let listItem=document.querySelector('.bottom');
makeBubble();
runTimer();
hitNumber();

function makeBubble()
{
  let clutter=" ";
for(let i=1;i<=180;i++)
{
  let rn=Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rn}</div>`;
  document.querySelector('.bottom').innerHTML=clutter;
}
}
function runTimer()
{
  let timeIn=setInterval(()=>
{
  if(time>0)
  {
    time--;
    timer.textContent=time;
  }
  else 
  {
    clearInterval(timeIn);
  
    document.querySelector('.bottom').innerHTML=" ";
   
    
   
    const para = document.createElement('h1');
    const node = document.createTextNode(`Your Score is ${score}`);
    para.appendChild(node);
    listItem.appendChild(para);
    

    const over=document.createElement('h3');
    const pText=document.createTextNode('Game Over');
    over.appendChild(pText);
    listItem.appendChild(over);
    const btn =document.createElement('button');
    const btn_txt=document.createTextNode("Restart Game");
    btn.appendChild(btn_txt);
    btn.id="btn";
    listItem.appendChild(btn);
    btn.addEventListener('click',()=>
{
  location.reload();
});

  }
},1000);
}
function hitNumber()
{
  hitrn=Math.floor(Math.random()*10);
  document.getElementById('hitVal').innerHTML=hitrn;
}
function increaseScore()
{
  score+=10;
  document.getElementById('scoreVal').textContent=score;

}
document.querySelector('.bottom').addEventListener('click',function(e)
{
  if(Number(e.target.textContent)===hitrn)
  {
    increaseScore();
    makeBubble();
    hitNumber();
  }
});




