import React from 'react';
import Select, { SingleValue, MultiValue } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: OptionType | OptionType[] | null;
  isMulti?: boolean;
  width?: string | number;
  options: OptionType[];
  onChange: (
    selectedOption: SingleValue<OptionType> | MultiValue<OptionType>
  ) => void;
}

function StyledSelect({
  name,
  width,
  label,
  placeholder,
  value,
  options,
  onChange,
  isMulti = false,
  ...props
}: SelectProps) {
  const customSelectStyles = {
    control: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      background: 'var(--white)', // Используем --white
      display: 'flex',
      flexWrap: 'nowrap',
      borderColor: state.isFocused ? 'var(--primary)' : 'var(--border)',
      boxShadow: state.isFocused ? '0 0 0 1px var(--primary)' : 'none',
      color: 'var(--text)', // Используем --text
      width: typeof width === 'number' ? `${width}px` : width || '100%',
      borderRadius: '8px', // Ракругленные углы
      transition: 'all 0.3s', // Плавное изменение
      '&:hover': {
        borderColor: 'var(--primary)', // Используем --primary для hover эффекта
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      background: 'var(--white)', // Используем --white
      color: 'var(--text)', // Используем --text
      borderColor: 'var(--border)', // Используем --border
    }),
    option: (
      provided: any,
      state: { isFocused: boolean; isSelected: boolean }
    ) => ({
      ...provided,
      color: state.isSelected ? 'var(--white)' : 'var(--text)', // Меняем цвет текста для выделенного элемента
      backgroundColor: state.isSelected
        ? 'var(--primary)'
        : state.isFocused
          ? 'var(--gray)'
          : 'var(--white)', // Обычный фон
      borderRadius: '6px',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: 'var(--primary)', // Меняем фон при наведении
        color: 'var(--white)',
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      background: 'var(--white)', // Используем --white
      color: 'var(--text)', // Используем --text
      borderColor: 'var(--border)', // Используем --border
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: 'var(--text)', // Используем --text
    }),
  };

  return (
    <div className="select-container">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <Select
        menuPlacement="auto"
        isMulti={isMulti}
        options={options}
        value={value}
        onChange={onChange}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={customSelectStyles}
        placeholder={placeholder}
        className="select"
        {...props}
      />
    </div>
  );
}

export default StyledSelect;
