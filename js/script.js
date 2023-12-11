document.querySelector('.singkapvo-gesionalem');// Выбор элемента на странице с классом .singkapvo-gesionalem
onmousemove = function (e) { // Добавление события onmousemove
    var x = e.pageX - e.target.offsetLeft;  // Получение координат указателя мыши относительно выбранного элемента
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px'); // Установка пользовательских свойств --x и --y для элемента
    e.target.style.setProperty('--y', y + 'px');
};
