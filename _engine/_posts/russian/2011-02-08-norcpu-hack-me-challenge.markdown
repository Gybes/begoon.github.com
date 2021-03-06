---
layout: post
title: "NORCPU hackme challenge или взлом программы для однокомандного процессора"
language: russian
date: 2011-02-08 00:00
comments: true
blogspot: http://easy-coding.blogspot.com/2011/02/norcpu-hackme-challenge.html
categories:
- norcpu
- project
- russian
---
Разного рода "ненормальное" программирование весьма популярно среди любителей поломать голову над разными задачками. Порой программу для очередной "ненормальной" среды программирования уже нереально написать вручную, а надо писать генератор, создающий код.

В задаче, что предлагаю я, программы все еще можно писать вручную на некотором высокоуровневом макроассемблере.

Итак, имеется модель некоторого виртуального процессора, выполняющего только одну логическую операцию - [Стрелку Пирса][].

[Стрелку Пирса]: http://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0_%D0%9F%D0%B8%D1%80%D1%81%D0%B0

На этом процессоре написана программа, на вход которой подается некоторый пароль. Если пароль неверный, то в ответ выдается строка "Wrong password!". Если верный, то выдается определенное волшебное сообщение.

Задача: любым образом выяснить это волшебное сообщение. Как вариант, можно, например, угадать пароль, и программа сама выдаст секрет.

Логика написана таким образом, что разобравшись в алгоритме, можно без труда расшифровать волшебное сообщение.

В прошлом году [я описал использованный подход во всех деталях][Модель процессора с одной командой].

[Модель процессора с одной командой]: /blog/russian/2010/03/26/one-command-cpu/

Оригинальный подход, на котором основан мой эксперимент, был не совсем "чистым", так как команда сложения был вынесена за логику процессора. В моей версии все до единой команды реализованы на самом процессоре. Для этого потребовалось немного изменить интерпретатор, добавив в него сдвиговый регистр.

Для желающих попробовать взломать мой эксперимент, я сделал страничку, на которой на JavaScript'e реализован выше описанный виртуальный процессор с одной командой и программа для него, проверяющая пароль.

Итак, [прошу на взлом!][challenge]

[challenge]: /projects/norcpu/challenge/norcpu.html

Удачи.

P.S. Для первого взломавшего - небольшой приз! Информация по ссылке.
