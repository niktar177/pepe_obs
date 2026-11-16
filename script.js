document.addEventListener('DOMContentLoaded', () => {
    const widget = document.getElementById('widget');
    const titleRow = document.getElementById('title-row');
    const brandName = document.querySelector('.brand-name');
    const counter = document.getElementById('counter');
    const linkText = document.getElementById('link-text');

    // Тайминги (в миллисекундах) - ВСЕ УВЕЛИЧЕНЫ
    const TIME_SHOW_BOX = 1100;       // Появление рамки
    const TIME_SHOW_NAME = 1500;     // Появление текста "PepeLand"
    const TIME_START_COUNTER = 1000; // Начало отсчета
    const TIME_COUNTER_SPEED = 450;  // Длительность отсчета
    const TIME_MOVE_UP = 6000;       // Сдвиг наверх и появление ссылки
    const TIME_HIDE = 20000;         // Через сколько скрыть

    function resetWidget() {
        widget.classList.remove('show');
        titleRow.classList.remove('move-up');
        brandName.classList.remove('show-name');
        linkText.classList.remove('show-link');
        counter.textContent = '0';
        counter.style.color = '#2ecc71';
        counter.style.textShadow = '0 0 8px rgba(46, 204, 113, 0.6)';
    }

    function runAnimation() {
        resetWidget();

        // 1. Появление плашки
        setTimeout(() => {
            widget.classList.add('show');
        }, TIME_SHOW_BOX);

        // 2. Появление слова PepeLand
        setTimeout(() => {
            brandName.classList.add('show-name');
        }, TIME_SHOW_NAME);

        // 3. Запуск счетчика до 11
        setTimeout(() => {
            let currentCount = 0;
            const targetCount = 11;

            const countInterval = setInterval(() => {
                currentCount++;
                counter.textContent = currentCount;

                // Эффект пульсации при каждом шаге
                counter.style.transform = 'scale(2)';
                counter.style.color = '#0ea86d';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                    counter.style.color = '#8cff00';
                }, 70);

                if (currentCount >= targetCount) {
                    clearInterval(countInterval);
                    // Финальный акцент на цифре 11
                    counter.style.color = '#0aff00';
                    counter.style.textShadow = '0 0 15px rgba(79, 172, 254, 0.8)';
                }
            }, TIME_COUNTER_SPEED);
        }, TIME_START_COUNTER);

        // 4. Сдвиг наверх и появление ссылки
        setTimeout(() => {
            titleRow.classList.add('move-up');
            counter.style.textShadow = 'none';
            counter.style.color = '#0aff00';

            setTimeout(() => {
                linkText.classList.add('show-link');
            }, 400); // Ссылка появляется чуть позже сдвига
        }, TIME_MOVE_UP);

        // 5. Скрытие виджета
        setTimeout(() => {
            widget.classList.remove('show');
        }, TIME_HIDE);
    }

    // Запуск при загрузке OBS (чуть дольше ждем загрузки шрифтов)
    setTimeout(runAnimation, 1500);

    // Повторение каждые 30 секунд (30000 мс)
    setInterval(runAnimation, 90000);
});