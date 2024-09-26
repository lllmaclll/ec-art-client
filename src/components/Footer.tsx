import { FacebookIcon, InstagramIcon, LineIcon, Link, SocialIcons, StyledFooter, StyleFooterMainBottom, StyleFooterMainTop, StyleHr, StyleLiText, StyleUl, StyleUlContainer, StyleUlTitleText } from '../styles/FooterStyle';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
    return (
        <StyledFooter>
            <StyleFooterMainTop>
                <StyleUlContainer>
                    <StyleUlTitleText>Help Center</StyleUlTitleText>
                    <StyleUl>
                        <StyleLiText>ติดต่อเรา</StyleLiText>
                        <StyleLiText>คำถามที่พบบ่อย</StyleLiText>
                        <StyleLiText>ศูนย์สนับสนุน</StyleLiText>
                    </StyleUl>
                </StyleUlContainer>

                <StyleUlContainer>
                    <StyleUlTitleText>Help Center</StyleUlTitleText>
                    <StyleUl>
                        <StyleLiText>ติดต่อเรา</StyleLiText>
                        <StyleLiText>คำถามที่พบบ่อย</StyleLiText>
                        <StyleLiText>ศูนย์สนับสนุน</StyleLiText>
                    </StyleUl>
                </StyleUlContainer>

                <StyleUlContainer>
                    <StyleUlTitleText>Help Center</StyleUlTitleText>
                    <StyleUl>
                        <StyleLiText>ติดต่อเรา</StyleLiText>
                        <StyleLiText>คำถามที่พบบ่อย</StyleLiText>
                        <StyleLiText>ศูนย์สนับสนุน</StyleLiText>
                    </StyleUl>
                </StyleUlContainer>
            </StyleFooterMainTop>
            <StyleHr />
            <StyleFooterMainBottom>
                <p>Copyright@ 2024, Design by MIKIKO</p>

                <SocialIcons>
                    <Link href="" aria-label="Facebook">
                        <FacebookIcon>
                            <Facebook />
                        </FacebookIcon>
                    </Link>
                    <Link href="" aria-label="Instagram">
                        <InstagramIcon>
                            <Instagram />
                        </InstagramIcon>
                    </Link>
                    <Link href="" aria-label="LinkedIn">
                        <LineIcon>
                            <LinkedIn />
                        </LineIcon>
                    </Link>
                </SocialIcons>
            </StyleFooterMainBottom>
        </StyledFooter>
    )
}

export default Footer