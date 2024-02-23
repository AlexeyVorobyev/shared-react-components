import { CSSProperties, FC, ReactNode } from 'react'
import { Link, To, useNavigate, useSearchParams } from 'react-router-dom'
import { Box, SxProps, Theme, Tooltip } from '@mui/material'

interface IAlexLinkProps {
    to: To | number | null
    relative?: 'path'
    useNavigateProp?: boolean
    children: ReactNode
    sx?: SxProps<Theme>
    tooltipTitle?: string
    disable?: boolean
}

/**
 *  Component, for linking throw url
 * */
export const AlexLink: FC<IAlexLinkProps> = ({
                                                 to,
                                                 relative,
                                                 children,
                                                 useNavigateProp = false,
                                                 sx,
                                                 tooltipTitle,
                                                 disable = false,
                                             }) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const handleCLick = () => {
        if (typeof to === 'number') {
            if (searchParams.get('from')) {
                navigate(JSON.parse(searchParams.get('from')!) as To)
            } else {
                navigate(to as number)
            }
        } else {
            navigate(to as To)
        }
    }

    return (<>
        {(to && !disable) ? (
            <Tooltip title={tooltipTitle ? tooltipTitle : ''}>
                {useNavigateProp ? (
                    <Box sx={sx} onClick={handleCLick}>
                        {children}
                    </Box>
                ) : (
                    <Link
                        to={to as string}
                        relative={relative ? relative : undefined}
                        style={{ textDecoration: 'none', ...sx as CSSProperties }}>
                        {children}
                    </Link>
                )}
            </Tooltip>
        ) : (
            children
        )}
    </>)
}