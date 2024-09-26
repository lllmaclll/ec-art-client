import { StyledHeader, SocialIcons, Link, SocialText, BellIcon, TextAlarm, LanguageIcon, TextLanguage, KeyDownIcon, FacebookIcon, InstagramIcon, LineIcon, HeaderItems, Logo, HeaderContainer, HeaderLogo, HeaderTop, HeaderBottom, ShoppingCartIcon, HeaderAlarm, HeaderLanguage } from '../styles/HeaderStyles';
import { Facebook, Instagram, LinkedIn, NotificationsNone, Language, KeyboardArrowDown, ShoppingCart } from '@mui/icons-material';
import logo from '../assets/images/logos/logo.png'
import { Autocomplete, Badge, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
// BEM (Block, Element, Modifier)

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    // ...more items
];

function Header() {
    return (
        <StyledHeader>
            <HeaderLogo className="header-logo">
                <NavLink to={`/`}>
                    <Logo src={logo} alt="Logo" />
                </NavLink>
            </HeaderLogo>

            <HeaderContainer className="Header-bottom">

                <HeaderTop className="header-top">

                    <HeaderItems className="header-top__item">
                        <SocialText>ติดตามเราบน</SocialText>

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

                    </HeaderItems>

                    <HeaderItems className="header-top__item">
                        <HeaderAlarm className='header-alarm'>
                            <BellIcon>
                                <NotificationsNone />
                            </BellIcon>
                            <TextAlarm>
                                การแจ้งเตือน
                            </TextAlarm>
                        </HeaderAlarm>
                        <Link href="" className="header-link header-link__item header-link__item--help">ช่วยเหลือ</Link>
                        <HeaderLanguage className="header-language">
                            <LanguageIcon>
                                <Language />
                            </LanguageIcon>
                            <TextLanguage>
                                ไทย
                            </TextLanguage>
                            <KeyDownIcon>
                                <KeyboardArrowDown />
                            </KeyDownIcon>
                        </HeaderLanguage>
                        <Link href="" className="header-link header-link__item header-link__item--register">สมัครใหม่</Link>
                        <Link href="" className="header-link header-link__item header-link__item--login">เข้าสู่ระบบ</Link>
                    </HeaderItems>
                </HeaderTop>

                <HeaderBottom className="header-bottom">

                    <HeaderItems className="header-bottom__item">
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            sx={{
                                width: 1200,
                                '& .MuiSvgIcon-root': {
                                    color: 'gray', // ปรับสีของไอคอนเป็นสีเทา
                                    fontSize: 24, // Ensure consistent icon size
                                    '&:hover': {
                                        color: 'lightgray', // Color of the icons on hover
                                        backgroundColor: '#2d2d2d', // Background color on hover
                                        borderRadius: '50%', // Optional: makes the background color circular
                                        // padding: '4px', // Ensure padding is consistent
                                    },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search"
                                    sx={{
                                        '& .MuiInputLabel-root': {
                                            color: 'lightgray', // สีของ label และ placeholder เป็นสีเทาสว่าง
                                            '&.Mui-focused': {
                                                color: 'gray', // Label color when focused
                                            },
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'lightgray', // สีของตัวอักษรที่พิมพ์แล้วเป็นสีเทาสว่าง
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray', // เส้นขอบเป็นสีเทา
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'lightgray', // เส้นขอบเมื่อ hover เป็นสีเทาสว่าง
                                                boxShadow: '0 0 8px 2px rgba(211, 211, 211, 0.7)', // เอฟเฟกต์เรืองแสง lightgray
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'gray', // เส้นขอบเมื่อ focused เป็นสีเทา
                                                boxShadow: '0 0 8px 2px rgba(128, 128, 128, 0.5)', // เอฟเฟกต์เรืองแสงเทา
                                            },
                                        },
                                    }}
                                />
                            )}
                        />
                    </HeaderItems>

                    <HeaderItems className="header-bottom__item header-bottom__item--cart">
                        <Link href="" aria-label="ShoppingCart">
                            <ShoppingCartIcon>
                                <Badge color="secondary" badgeContent={100}>
                                    <ShoppingCart sx={{ fontSize: 50 }} />
                                </Badge>
                            </ShoppingCartIcon>
                        </Link>
                    </HeaderItems>

                </HeaderBottom>

            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header