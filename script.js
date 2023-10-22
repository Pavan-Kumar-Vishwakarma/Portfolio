const bar = document.querySelector('.bar');
const open1 = document.querySelector('#open');
const close1 = document.querySelector('#close');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownContentEle = document.querySelectorAll('.dropdown-content a');


bar.addEventListener('click', ()=>{
    if (bar.classList.contains('active')) {
        dropdownContent.style.transform = 'translateX(120%)';
        bar.classList.remove('active');
    }
    else{
        dropdownContent.style.transform = 'translateX(0%)';
        bar.classList.add('active');
    }
});

dropdownContentEle.forEach(elem => {
    elem.addEventListener('click', ()=>{
        dropdownContent.style.transform = 'translateX(0%)';
        bar.classList.add('active');
    })
});

