import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Socials: { [key: string]: string } = {
    Email: 'Email',
    Facebook: 'Facebook',
    Instagram: 'Instagram',
};

export default function SocialButton(props: { platform: keyof typeof Socials, title: string, url: string }) {
    const socialIcons: { [key: string]: React.ReactNode } = {
        [Socials.Email]: <EmailIcon />,
        [Socials.Facebook]: <FacebookIcon />,
        [Socials.Instagram]: <InstagramIcon />,
    };

    let icon = socialIcons[props.platform];

    return (
        <Box
            sx={{
                mx: 2,
                display: 'inline',
                border: 'solid thin',
                borderRadius: 6,
            }}
        >
            <IconButton title={props.title} size='large' target="_blank" href={props.url}>
                {icon}
            </IconButton>
        </Box>
    );
}
