import React from 'react';
import Select, { components } from 'react-select';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface IProps {
  options: Array<OptionLabel>;
  labelName: string;
  disabled: boolean;
}

interface OptionLabel {
  label: string;
  value: number;
}

export const SelectInput: React.FC<IProps> = ({ options, labelName, disabled }) => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: 52,
      width: '100%'
    })
  }

  return (
    <React.Fragment>
      <label htmlFor={labelName}>{labelName}</label>
      <Select
        placeholder={'Selecione um Perfil de acesso'}
        defaultValue={options[0]}
        styles={customStyles}
        isDisabled={disabled}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: props => (
            components.DropdownIndicator && (
              <components.DropdownIndicator {...props}>
                <div style={{ marginRight: 20, marginTop: 10 }}>
                  {props.selectProps.menuIsOpen ? <FaChevronUp color={'#F39200'} /> : <FaChevronDown color={'#F39200'} /> }
                </div>
              </components.DropdownIndicator>
            )
          )
        }}
        {...{ options }} />
    </React.Fragment>
  )
}