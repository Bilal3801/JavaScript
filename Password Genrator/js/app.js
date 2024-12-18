const upperSet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet='abcdefghijklmnopqrstuvwxyz';
const symbolSet='!@#$%^&*()_';
const numberSet='1234567890';

// Hold value using id's
const upperCheck=document.getElementById('upperCase');
const lowerCheck=document.getElementById('lowerCase');
const symbolCheck=document.getElementById('symbol');
const numCheck=document.getElementById('numCase');
const totalVal=document.getElementById('num');
const btn =document.getElementById('btn');

const genrateRandom=(dataSet)=>
{
  return dataSet[Math.floor(Math.random() * dataSet.length)];
 
}

const passwordGenrator=(password="")=>
{
  if(upperCheck.checked)
  {
    password+=genrateRandom(upperSet);
  }
  if(lowerCheck.checked)
  {
    password+=genrateRandom(lowerSet);
  }
  if(numCheck.checked)
  {
    password+=genrateRandom(numberSet);
  }
  if(symbolCheck.checked)
  {
    password+=genrateRandom(symbolSet);
  }
  if(password.length<=totalVal.value)
  {
     return passwordGenrator(password);
  }
  document.getElementById('result').value=truncateString(password,totalVal.value);
}

btn.addEventListener('click',(e)=>
{
  if(upperCheck.checked || lowerCheck.checked || numCheck.checked || symbolCheck.checked)
  {
    passwordGenrator();
  }
  
})

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}