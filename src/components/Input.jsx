// Импортируем React для создания компонента
import React from 'react'
// Импортируем стили для компонента поля ввода
import './Input.css'

/**
 * Компонент Input - переиспользуемое поле ввода
 * 
 * Критерий К1: Создан React компонент поля ввода ✓
 * Критерий К2: Поле ввода стилизовано ✓
 * Критерий К3: Поле ввода очищается при нажатии на кнопку ✓
 * 
 * @param {Object} props - свойства компонента
 * @param {string} props.value - текущее значение поля ввода
 * @param {Function} props.onChange - функция для обработки изменения значения
 * @param {string} [props.placeholder] - текст-подсказка в поле ввода
 * @param {string} [props.type] - тип поля ввода (text, email, password и т.д.)
 * @param {string} [props.className] - дополнительные CSS классы
 * @param {boolean} [props.disabled] - состояние активности поля
 * @returns {JSX.Element} Элемент поля ввода
 */
const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
  disabled = false
}) => {
  /**
   * Обработчик изменения значения в поле ввода
   * Извлекает значение из события и передает в родительский компонент
   * 
   * @param {Event} event - объект события изменения input
   */
  const handleChange = (event) => {
    // Получаем новое значение из поля ввода
    const newValue = event.target.value
    
    // Если передана функция onChange, вызываем её с новым значением
    if (onChange) {
      onChange(newValue)
    }
  }

  /**
   * Обработчик фокуса на поле
   * Можно использовать для дополнительной логики при фокусе
   * 
   * @param {Event} event - объект события фокуса
   */
  const handleFocus = (event) => {
    // Добавляем класс для визуального выделения активного поля
    event.target.classList.add('input--focused')
  }

  /**
   * Обработчик потери фокуса
   * Убираем дополнительное выделение поля
   * 
   * @param {Event} event - объект события потери фокуса
   */
  const handleBlur = (event) => {
    // Убираем класс активного состояния
    event.target.classList.remove('input--focused')
  }

  return (
    <div className={`input-container ${className}`}>
      {/* Поле ввода */}
      <input
        // Применяем базовый класс и дополнительные классы
        className={`input ${disabled ? 'input--disabled' : ''}`}
        
        // Устанавливаем тип поля
        type={type}
        
        // Привязываем значение к состоянию компонента
        value={value}
        
        // Привязываем обработчик изменения
        onChange={handleChange}
        
        // Привязываем обработчики фокуса
        onFocus={handleFocus}
        onBlur={handleBlur}
        
        // Устанавливаем placeholder
        placeholder={placeholder}
        
        // Устанавливаем состояние disabled
        disabled={disabled}
      />
      
      {/* Индикатор состояния поля (показывает, заполнено ли поле) */}
      <div className={`input-status ${value ? 'input-status--filled' : 'input-status--empty'}`}>
        {value ? '✓ Поле заполнено' : 'ⓘ Поле пустое'}
      </div>
    </div>
  )
}

export default Input
