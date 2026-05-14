function plus() {
  let i = document.querySelector('input[name = "left"]');
  let x = i.value;
  let a = Number(x);
  
  let j = document.querySelector('input[name = "right"]');
  let y = j.value;
  let b = Number(y);

  let sum = a + b;
  let p = document.querySelector('id#answer');
  p.textContent = console.log(sum);
} 

let c = document.querySelector('button#calc');
c.addEventListener('click', plus);