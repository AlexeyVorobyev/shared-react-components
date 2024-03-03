import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AlexDatePicker, EDatePickerType, IAlexDatePickerProps } from './alex-date-picker.component.tsx'

interface IAlexDatePickerControlledProps extends Omit<IAlexDatePickerProps, 'value' | 'onChange'> {
    name: string
    label: string,
    type?: EDatePickerType | `${EDatePickerType}`
}

export const AlexDatePickerControlled: FC<IAlexDatePickerControlledProps> = ({
                                                                                 name,
                                                                                 label,
                                                                                 type = EDatePickerType.date,
                                                                                 ...props
                                                                             }) => {
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <AlexDatePicker value={value} onChange={onChange}
                                label={label} type={type} {...props}/>
            )}/>
    )
}