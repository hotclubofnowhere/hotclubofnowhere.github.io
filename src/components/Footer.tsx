import * as React from 'react';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';
import SocialButton, { Socials } from '@/components/SocialButton';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
    const theme = useTheme();

    const socialInfo: { [key: keyof typeof Socials]: { title: string, url: string } } = {
        [Socials.Email]: {
            title: `Send email to ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
            url: String(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`),
        },
        [Socials.Facebook]: {
            title: `See ${process.env.NEXT_PUBLIC_WEBSITE_NAME} on ${Socials.Facebook}`,
            url: String(process.env.NEXT_PUBLIC_SOCIAL_FB_URL),
        },
        [Socials.Instagram]: {
            title: `See ${process.env.NEXT_PUBLIC_WEBSITE_NAME} on ${Socials.Instagram}`,
            url: String(process.env.NEXT_PUBLIC_SOCIAL_IG_URL),
        },
    };

    return (
        <Box
            component='footer'
            sx={{
                borderColor: theme.palette.text.primary,
                borderTop: 'solid thin',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '20vh',
                width: '100vw',
            }}
        >
            <Box
                sx={{
                    margin: 4,
                    display: 'inline-flex',
                    justifyContent: 'center',
                }}
            >
                {
                    Object.keys(socialInfo).map((social) => (
                        <SocialButton key={social} platform={social} title={socialInfo[social].title} url={socialInfo[social].url} />
                    ))
                }
            </Box>
            <Copyright />
        </Box>
    );
}
