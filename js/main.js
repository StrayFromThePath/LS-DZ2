$(document).ready(function(){
    // Select
    $('.slct').click(function(){

        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');


        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');

            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop__item').click(function(){

                /* Заносим в переменную HTML код элемента
                 списка по которому кликнули */
                var selectResult = $(this).text();

                /* Находим наш скрытый инпут и передаем в него
                 значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая
                 открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find('.slct').removeClass('active').text(selectResult);

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });

    $('.menu__trigger').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu__item'),
            list = $this.closest('.menu__list'),
            items = list.find('.menu__item'),
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



    });


});
