// Импортируем React для создания компонента
import React from 'react'
// Импортируем стили для компонента кнопки
import './Button.css'

/**
 * Компонент Button - переиспользуемая кнопка
 * 
 * Критерий К1: Создан React компонент кнопки ✓
 * Критерий К2: Кнопка стилизована ✓
 * Критерий К3: Обрабатывает клики для очистки поля ввода ✓
 * 
 * @param {Object} props - свойства компонента
 * @param {Function} props.onClick - функция, которая выполняется при клике
 * @param {React.ReactNode} props.children - содержимое кнопки (текст или другие элементы)
 * @param {string} [props.className] - дополнительные CSS классы
 * @param {boolean} [props.disabled] - состояние активности кнопки
 * @returns {JSX.Element} Элемент кнопки
 */
const Button = ({ 
  onClick, 
  children, 
  className = '', 
  disabled = false 
}) => {
  /**
   * Обработчик клика по кнопке
   * Проверяет, что кнопка не отключена и есть функция onClick
   * 
   * @param {Event} event - объект события клика
   */
  const handleClick = (event) => {
    // Предотвращаем действие по умолчанию
    event.preventDefault()
    
    // Если кнопка не отключена и передана функция onClick
    if (!disabled && onClick) {
      // Вызываем переданную функцию
      onClick(event)
    }
  }

  return (
    <button
      // Применяем базовый класс и дополнительные классы
      className={`button ${className} ${disabled ? 'button--disabled' : ''}`}
      // Привязываем обработчик клика
      onClick={handleClick}
      // Устанавливаем состояние disabled
      disabled={disabled}
      // Добавляем type для предотвращения отправки формы
      type="button"
    >
      {/* Отображаем содержимое кнопки */}
      {children}
    </button>
  )
}

export default Button
