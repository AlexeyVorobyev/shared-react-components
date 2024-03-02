import { FC, ReactNode, useState } from 'react'
import { Box, Grid, Stack, useTheme } from '@mui/material'
import { AlexContentPoint } from './alex-content-point.component.tsx'
import { AlexContentMenuItem } from './alex-content-menu-item.component.tsx'

export type TAlexContentPointConfig = {
    name: string
    display?: boolean
    title: string
    body: ReactNode
}

export type TAlexContentConfig = {
    ratioMenuPoints?: [number, number]
    menuBackgroundColor?: string
    menuTopOffsetWhileSticky?: number
}

interface IAlexContentProviderProps {
    pointConfig: TAlexContentPointConfig[]
    config?: TAlexContentConfig
}

/**
 * Component with table of contents
 * */
export const AlexContentProvider: FC<IAlexContentProviderProps> = ({
                                                                       pointConfig,
                                                                       config,
                                                                   }) => {
    const theme = useTheme()
    const [
        paperHovered,
        setPaperHovered,
    ] = useState<string | null>(null)

    return (
        <Grid container direction={'row'} width={'100%'} height={'100%'} columnSpacing={theme.spacing(3)}>
            <Grid item xs={config?.ratioMenuPoints?.length ? config.ratioMenuPoints[0] : 2}>
                <Box style={{
                    position: 'sticky',
                    top: config?.menuTopOffsetWhileSticky || 16,
                    zIndex: 100
                }}>
                    <Stack justifyContent={'center'} direction={'column'}
                           padding={theme.spacing(1)} borderRadius={8}
                           sx={{ backgroundColor: config?.menuBackgroundColor || '#F7F8FB' }}>
                        {pointConfig.map((item) => (
                            <AlexContentMenuItem paperHovered={paperHovered}
                                                 config={{
                                                     name: item.name,
                                                     title: item.title,
                                                 }}/>
                        ))}
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={config?.ratioMenuPoints?.length ? config.ratioMenuPoints[1] : 10}>
                <Stack direction={'column'} gap={theme.spacing(2)}>
                    {pointConfig.map((item) => (
                        <AlexContentPoint name={item.name} title={item.title} setPaperHovered={setPaperHovered}>
                            {item.body}
                        </AlexContentPoint>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    )
}