const startButton = document.querySelector('.start-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    endButton = document.querySelector('.end-button'),
    total = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');





function showElem(elem) {

    elem.style.display = 'block';

}

function hideElem(elem) {

    elem.style.display = 'none';

}


function handlerCallBackForm(event) {
    const target = event.target;

    if (target.classList.contains('want-faster')) {

        target.checked ? showElem(fastRange) : hideElem(fastRange);

    }

};

startButton.addEventListener('click', function() {

        showElem(mainForm);
        hideElem(firstScreen);

    }) //скрываем блок и открываем новый


endButton.addEventListener('click', function() {
    // console.log(formCalculate.elements); //берем все элементы формы все элементы которые в ней находятся
    for (const elem of formCalculate.elements) {
        if (elem.tagName === 'FIELDSET') {

            hideElem(elem);
        }

    }
    showElem(total);
    //цикл будет крутится столько сколько тут элементов в форме то есть 26 раз

});


formCalculate.addEventListener('change', handlerCallBackForm)