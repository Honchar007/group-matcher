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
    control: (provided: any) => ({
      ...provided,
      background: 'var(--white)',
      display: 'flex',
      flexWrap: 'nowrap',
      borderColor: 'var(--gray-400)',
      color: 'var(--black)',
      width: typeof width === 'number' ? `${width}px` : width || '100%',
      borderRadius: '8px',
      height: '100%',
    }),
    menu: (provided: any) => ({
      ...provided,
      background: 'var(--white)',
      color: 'var(--black)',
      borderColor: 'var(--gray-400)',
    }),
    option: (provided: any, state: { isFocused: boolean }) => ({
      ...provided,
      color: 'var(--black)',
      backgroundColor: state.isFocused ? 'var(--gray-200)' : 'var(--white)',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      background: 'var(--white)',
      color: 'var(--black)',
      borderColor: 'var(--gray-400)',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: 'var(--black)',
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
