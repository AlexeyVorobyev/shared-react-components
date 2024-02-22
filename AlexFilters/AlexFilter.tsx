import {FC} from "react";
import {IAlexFilter} from "./alexFiltersMap";
import {Grid, Stack, Typography} from "@mui/material";
import {theme} from "../../frontend-time-manager/src/components/Theme/theme";

interface IProps {
    config: IAlexFilter
}

export const AlexFilter: FC<IProps> = ({
                                           config
                                       }) => {
    const {label, component} = config

    return (
        <Stack direction={'column'} spacing={theme.spacing(1)}>
            <Typography variant={'h6'}>{label}</Typography>
            {component}
        </Stack>
    )
}