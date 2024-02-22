import {FC} from "react";
import {Button, Stack, Typography} from "@mui/material";
import {theme} from "../../components/theme/theme.ts";
import {LinkRouterWrapper} from "../../../../shared-react-components/LinkRouterWrapper/LinkRouterWrapper.tsx";

export const AlexErrorPage: FC = () => {

    return (
        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={theme.spacing(2)}
               height={'100%'}>
            <Typography variant={'h3'}>На странице произошла какая-то ошибка :(</Typography>
            <Typography variant={'h4'}>Обратитесь к администратору</Typography>
            <LinkRouterWrapper to={'/'}>
                <Button variant={'contained'} onClick={() => setTimeout(() => window.location.reload(),1)}>
                    <Typography variant={'button'}>Вернуться на главную</Typography>
                </Button>
            </LinkRouterWrapper>
        </Stack>
    )
}