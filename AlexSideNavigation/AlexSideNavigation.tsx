import { FC, ReactNode, useCallback, useState } from 'react'
import { List, Stack, Switch, Tooltip } from '@mui/material'
import { AlexSideNavigationItem } from './AlexSideNavigationItem.tsx'
import { theme } from '../../components/theme/theme.ts'

export type TSideNavigationConfig = {
    path: string | null,
    name: string
    icon?: ReactNode
    routes?: TSideNavigationConfig[]
}

interface IAlexSideNavigationProps {
    config: TSideNavigationConfig[]
}

export const AlexSideNavigation: FC<IAlexSideNavigationProps> = ({ config }) => {
    const [isContracted, setIsContracted] = useState<boolean>(true)

    const constructSideNavigation = useCallback((sideNavigationConfig: TSideNavigationConfig[]) => {
        return sideNavigationConfig.map((item) => {
            if (item.routes) {
                return (<AlexSideNavigationItem key={item.name} name={item.name} path={item.path}
                                                icon={item.icon} isContracted={isContracted}
                                                setIsContracted={setIsContracted}>
                    {constructSideNavigation(item.routes)}
                </AlexSideNavigationItem>)
            } else {
                return <AlexSideNavigationItem key={item.name} name={item.name} path={item.path}
                                               icon={item.icon} isContracted={isContracted}
                                               setIsContracted={setIsContracted}/>
            }
        })
    }, [config, isContracted])

    return (
        <Stack
            direction={'column'}
            justifyContent={'space-between'}
            sx={{
                width: isContracted ? '58px' : '400px',
                boxShadow: 2,
                transition: 'all 1s',
            }}
        >
            <List sx={{ padding: '0', overflow: 'hidden' }}>
                {constructSideNavigation(config)}
            </List>
            <Tooltip title={isContracted ? 'Раскрыть меню' : 'Свернуть меню'}>
                <Stack direction={'row'} spacing={theme.spacing(2)}>
                    <Switch checked={!isContracted} onChange={() => {
                        setIsContracted(!isContracted)
                    }} color={'secondary'}/>
                </Stack>
            </Tooltip>
        </Stack>
    )
}