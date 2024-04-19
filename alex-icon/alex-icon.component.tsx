import React, {cloneElement, createElement, FC, ReactElement} from 'react'
import {EIconToNameMap, IconToNameMap} from './alex-icon-icon-to-name-map.data.ts'
import {SvgIconProps, SvgIconTypeMap} from '@mui/material'
import {OverridableComponent} from '@mui/material/OverridableComponent'

interface IAlexIconProps extends Omit<SvgIconProps, 'color' | 'fill'> {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | EIconToNameMap | `${EIconToNameMap}` | ReactElement,
    color?: string
    width?: string
    fill?: boolean
}

/**
 *  Component that loads predefined mui icons by enum
 *
 *  @param iconName - Predefined icon name
 *  @param icon
 *  @param props - Default props of MUI SVG icon
 * */
export const AlexIcon: FC<IAlexIconProps> = ({
                                                 icon,
                                                 color,
                                                 width,
                                                 fill = false,
                                                 ...props
                                             }) => {
    if (typeof icon == 'string') {
        // @ts-ignore
        const Icon = IconToNameMap[icon]
        return (
            <Icon style={{
                ...props.style,
                width: width,
                color: color,
                fill: fill ? color : undefined,
            }} {...props}/>
        )
    } else {
        return (
            // @ts-ignore
            cloneElement(icon, {
                ...props,
                style: {
                    ...props.style,
                    width: width,
                    color: color,
                    fill: fill ? color : undefined,
                },
            })
        )
    }
}