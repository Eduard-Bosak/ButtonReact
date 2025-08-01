
Эталонный проект для выполнения лабораторной работы по созданию и связыванию React компонентов. Демонстрирует взаимодействие между кнопкой и полем ввода.

### Цель работы
Научиться созданию и первичному связыванию React компонентов в виде кнопок и полей ввода.

### План работы
1. ✅ Создать две сущности - кнопку и инпут (button, input)
2. ✅ Связать кнопку и поле ввода, чтобы при нажатии на кнопку поле ввода очищалось
3. ✅ Добавить стилизацию компонентов


## Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

## 📁 Структура проекта

```
src/
├── components/           # Переиспользуемые компоненты
│   ├── Button.jsx       # Компонент кнопки с обработкой кликов
│   ├── Button.css       # Стили для кнопки
│   ├── Input.jsx        # Компонент поля ввода
│   └── Input.css        # Стили для поля ввода
├── App.jsx              # Главный компонент приложения
├── App.css              # Стили главного компонента
└── main.jsx             # Точка входа приложения
```

## 🔧 Технические детали

### Использованные технологии
- **React 18** - Основная библиотека для создания пользовательского интерфейса
- **Vite** - Современный инструмент сборки и сервер разработки
- **CSS3** - Стилизация с использованием современных возможностей CSS
- **ES6+** - Современный стандарт JavaScript

### Ключевые React концепции
- **Функциональные компоненты** - Современный способ создания компонентов
- **React Hooks** - `useState` для управления состоянием
- **Props** - Передача данных между компонентами
- **Event Handling** - Обработка событий (клики, изменения input)
- **Controlled Components** - Контролируемые компоненты формы

##  Подробное описание компонентов

### Компонент Button
**Файл:** `src/components/Button.jsx`

**Функциональность:**
- Обработка кликов с проверкой состояния disabled
- Поддержка дополнительных CSS классов
- Анимации при наведении и нажатии
- Доступность (accessibility) с правильными ARIA атрибутами

**Props:**
- `onClick` - функция обработки клика
- `children` - содержимое кнопки
- `className` - дополнительные CSS классы
- `disabled` - состояние активности кнопки

### Компонент Input
**Файл:** `src/components/Input.jsx`

**Функциональность:**
- Controlled component с привязкой к состоянию
- Обработка изменений с передачей в родительский компонент
- Индикатор состояния (заполнено/пустое)
- Анимации фокуса и взаимодействия

**Props:**
- `value` - текущее значение поля
- `onChange` - функция обработки изменений
- `placeholder` - текст подсказки
- `type` - тип поля ввода
- `disabled` - состояние активности поля

### Главный компонент App
**Файл:** `src/App.jsx`

**Функциональность:**
- Управление состоянием приложения с помощью `useState`
- Связывание компонентов через props и callback функции
- Отображение текущего состояния для демонстрации

## Дизайн и стилизация

### Цветовая палитра
- **Основной цвет:** `#667eea` (синий градиент)
- **Вторичный цвет:** `#764ba2` (фиолетовый)
- **Фон:** `#f5f7fa` → `#c3cfe2` (градиент)
- **Текст:** `#2c3e50` (темно-синий)

### Анимации
- Плавные переходы при наведении
- Анимация появления элементов
- Обратная связь при взаимодействии

### Адаптивность
- Полная поддержка мобильных устройств
- Оптимизация для планшетов
- Гибкая сетка и отзывчивый дизайн

## Как это работает

1. **Инициализация состояния:** В компоненте `App` создается состояние `inputValue` с помощью `useState('')`

2. **Отображение значения:** Компонент `Input` получает текущее значение через prop `value`

3. **Обновление состояния:** При изменении текста в поле вызывается `handleInputChange`, который обновляет состояние

4. **Очистка поля:** При клике на кнопку вызывается `handleClearInput`, который устанавливает пустую строку в состояние

5. **Реактивность:** React автоматически обновляет интерфейс при изменении состояния

## **Что изучить:**

### Базовые концепции
1. **Компонентный подход** - разделение UI на переиспользуемые части
2. **Props** - как передавать данные в компоненты
3. **State** - как управлять изменяющимися данными
4. **Events** - как обрабатывать пользовательские действия

### Продвинутые темы
1. **Controlled vs Uncontrolled components** - разные подходы к работе с формами
2. **Lifting State Up** - подъем состояния в родительский компонент
3. **CSS-in-JS vs CSS Modules** - разные подходы к стилизации
4. **Component Composition** - композиция компонентов

## Рекомендации для развития

1. **Добавьте валидацию** - проверка введенных данных
2. **Создайте больше типов полей** - email, password, number
3. **Добавьте тесты** - unit тесты для компонентов
4. **Изучите TypeScript** - типизация для больших проектов
5. **Попробуйте состояние в Context** - для глобального состояния

## Полезные ресурсы

- [Официальная документация React](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/)
- [CSS Grid и Flexbox](https://css-tricks.com/)

---

**Автор:** Эталонная реализация для студентов  
**Дата создания:** Август 2025  
**Версия React:** 18.x  
**Версия Vite:** 5.x+ Vite

