
# ozon-task

Реализация блока Progress.

Результат [здесь](https://darya-kovyaz.github.io/ozon-task/).

![image](https://github.com/darya-kovyaz/ozon-task/assets/73113247/c1aca3d7-db5b-4f09-9b3f-c69041a1e36e)


## Задача

Разработать прототип блока Progress для использования в мобильных web-приложениях.
Основное предназначение блока отображать процесс выполнения процессов и их прогресс
выполнения. 

## Особенности

Блок должен иметь API для управления его состоянием.

Блок должен быть спроектирован так, чтобы его было легко переиспользовать в
других приложениях.

Состояния:
1. Normal – базовое состояние, в котором путём задания Value можно управлять размером дуги, отражающей некоторый параметр или прогресс процесс. Начало дуги соответствует 12 часам, конец дуги при увеличении параметра Value движется по направлению часовой стрелки и достигает начала при значении 100.
2. Animated – независимое состояние, при котором блок или его элементы
начинают вращаться с некоторым периодом по часовой стрелке.
3. Hidden – состояние скрывающее блок со страницы.

Результат выполнения задачи должен быть представлен в виде небольшого приложения с элементами управления (Value – текстовый ввод числа от 0 до 100, Animate и Hide – логические переключатели on / off.

