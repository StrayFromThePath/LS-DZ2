$(document).ready(function(){
    // Select
    $('.slct').on('click',function(e){
        e.preventDefault();

        var dropBlock = $(this).parent().find('.drop');

        // Делаем проверку: Если выпадающий блок скрыт то делаем его видимым
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();

            // Выделяем ссылку открывающую select
            $(this).addClass('active');

            //Работаем с событием клика по элементам выпадающего списка
            $('.drop__item').on('click',function(e){
                e.preventDefault();
                //Заносим в переменную HTML код элемента
                // списка по которому кликнули
                var selectResult = $(this).text();

                //Находим наш скрытый инпут и передаем в него
                // значение из переменной selectResult
                $(this).parent().parent().find('input').val(selectResult).addClass('active');

                // Передаем значение переменной selectResult в ссылку которая
                // открывает наш выпадающий список и удаляем активность
                $(this).parent().parent().find('.slct').removeClass('active').text(selectResult);

                //Скрываем выпадающий блок
                dropBlock.slideUp();
            });
            // Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }
    });
    //меню-аккордеон
    $('.menu__trigger').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu__item'),
            list = $this.closest('.menu__list'),
            link = $this.closest('.menu__trigger'),
            items = list.find('.menu__item'),
            links = items.find('.menu__trigger'),
            content = item.find('.menu-drop'),
            otherContent = list.find('.menu-drop'),
            duration = 300;


        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            otherContent.stop(true,true).slideUp(duration);
            content.stop(true,true).slideDown(duration);
        } else {
            content.stop(true,true).slideUp(duration);
            item.removeClass('active');
        }

        //присваиваем класс, подсвечивающий активную ссылку синим
        if (!link.hasClass('active')) {
            links.removeClass('active');
            link.addClass('active');
        } else {
            link.removeClass('active');
        }
    });

    //Переключение вида товаров сеткой
    $('.drop__link-grid').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            list = $('.catalog__list');

        $this.addClass('disabled');
        list.addClass('catalog__list-grid').removeClass('catalog__list-lines');
        $('.drop__link-lines').removeClass('disabled');
        $('.slct-bottom').text('Сеткой');//меняю значение во втором(нижнем) селекте
        $('.drop__link-grid-bottom').addClass('disabled');
    });

    //Переключение вида товаров линиями
    $('.drop__link-lines').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            list = $('.catalog__list');

        $this.addClass('disabled');
        list.addClass('catalog__list-lines').removeClass('catalog__list-grid');
        $('.drop__link-grid').removeClass('disabled');
    });

    //При клике на втором(нижнем) селекте меняется значение верхнего
    $('.drop__link-lines-bottom').on('click', function(e){
        e.preventDefault();
        $('.slct').text('Линиями');
        $('.drop__link-lines').addClass('disabled');
        $('body,html').animate({scrollTop:100},800);//при смене вида с помощью нижнего селекта для удобства двигаем скролл в начало каталога
    });

    //Кнопка "Наверх"
    $('.go-top').click(function(e){
        e.preventDefault();

        $('body,html').animate({scrollTop:0},800);
    });
});

