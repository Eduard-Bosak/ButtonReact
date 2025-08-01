// Импортируем необходимые хуки из React
import { useState } from 'react'
// Импортируем компоненты кнопки и поля ввода
import Button from './components/Button'
import Input from './components/Input'
// Импортируем стили для главного компонента
import './App.css'

/**
 * Главный компонент приложения App
 * 
 * Цель: Демонстрация связывания React компонентов
 * Содержит кнопку и поле ввода, которые взаимодействуют между собой
 * 
 * @returns {JSX.Element} Главный компонент приложения
 */
function App() {
  // Состояние для хранения значения поля ввода
  // useState возвращает массив: [текущее значение, функция для изменения]
  const [inputValue, setInputValue] = useState('')

  /**
   * Функция для очистки поля ввода
   * Вызывается при нажатии на кнопку "Очистить"
   * 
   * Устанавливает пустую строку в качестве значения поля ввода
   */
  const handleClearInput = () => {
    setInputValue('')
  }

  /**
   * Функция для обработки изменения значения в поле ввода
   * Вызывается при каждом изменении текста в поле ввода
   * 
   * @param {string} newValue - новое значение поля ввода
   */
  const handleInputChange = (newValue) => {
    setInputValue(newValue)
  }

  return (
    <div className="app">
      {/* Заголовок приложения */}
      <h1 className="app__title">
        Лабораторная работа: React компоненты
      </h1>
      
      {/* Описание задания */}
      <p className="app__description">
        Демонстрация связывания кнопки и поля ввода в React
      </p>

      {/* Контейнер для компонентов */}
      <div className="app__components">
        {/* 
          Компонент поля ввода
          Передаем:
          - value: текущее значение из состояния
          - onChange: функция для обновления состояния при изменении
          - placeholder: подсказка для пользователя
        */}
        <Input 
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите текст здесь..."
        />

        {/* 
          Компонент кнопки
          Передаем:
          - onClick: функция очистки поля ввода
          - children: текст кнопки
        */}
        <Button onClick={handleClearInput}>
          Очистить поле
        </Button>
      </div>

      {/* Отображение текущего значения поля (для демонстрации) */}
      <div className="app__status">
        <p>
          <strong>Текущее значение поля:</strong> 
          {inputValue ? `"${inputValue}"` : 'поле пустое'}
        </p>
      </div>
    </div>
  )
}

export default App
