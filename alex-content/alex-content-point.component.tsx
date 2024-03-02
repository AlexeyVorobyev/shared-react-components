import React, { FC, ReactNode } from 'react'
import { Paper, Typography } from '@mui/material'

interface IAlexContentPointProps {
    name: string
    title: string
    setPaperHovered: React.Dispatch<React.SetStateAction<string | null>>
    children: ReactNode
}

export const AlexContentPoint: FC<IAlexContentPointProps> = ({
                                                                 name,
                                                                 title,
                                                                 setPaperHovered,
                                                                 children,
                                                             }) => (
    <Paper elevation={0} id={name}
           onMouseOver={() => setPaperHovered(name)}
           onMouseLeave={() => setPaperHovered(null)}>
        <Typography variant={'h4'} style={{ marginBottom: 16 }}>
            {title}
        </Typography>
        {children}
    </Paper>
)