'use strict';

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

// let elems = document.querySelectorAll('input');
// let test = document.getElementById('test');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('blur', ()=> 
//     test.innerHTML = `${elems[i].value}`
//     );
// }


// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
// при нажатии на любой из них, но только по первому нажатию. Повторное 
// нажатие на инпут не должно вызывать реакции.

// let elems = document.querySelectorAll('input');

// for (let i = 0; i < elems.length; i++) {
//     const alertValue = () => {
//         alert(elems[i].value);
//         elems[i].removeEventListener('click', alertValue)
//     }
//     elems[i].addEventListener('click', alertValue);
   
// }


// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

// let elems = document.querySelectorAll('p');
// elems.forEach(elem => {
//     elem.addEventListener('click', () => {
//         elem.innerHTML = `${+elem.textContent * +elem.textContent} `;
//     });
// })

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

    // let elems = document.querySelectorAll('input');
    // elems.forEach(elem => {
    //     elem.addEventListener('blur', () => {
    //         if(elem.value.length == elem.dataset.length) {
    //             elem.style.borderColor = 'green';
    //         }else{
    //             elem.style.borderColor = 'red';

    //         }
    //     })
    // })
    
       
