import { Typography } from '@mui/material'
import { FeaturedArtistsContainer, FeaturedArtistsMain, StyleAvatarContainer, StyledAvatar, StyledCard, StyledCardContent } from '../styles/FeaturedArtists';
import { getComplementaryColor } from '../utils/oppositeColorsUtils';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { IArtist } from '../interfaces/artist';

export interface IFeaturedArtistsProps {
    artists: IArtist[];  // กำหนดให้ props รับข้อมูลเป็น array ของสินค้า
}

// Array of featuredProducts data
// const featuredArtists = [
//     { userId: 1, userAvartar: 'https://plus.unsplash.com/premium_photo-1661714220704-711551e73799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGF0dG9vfGVufDB8fDB8fHww', userName: 'jane lopster', userAllWorks: 50 },
//     { userId: 2, userAvartar: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww', userName: 'john lopster', userAllWorks: 50 },
//     { userId: 3, userAvartar: 'https://images.unsplash.com/photo-1577084381314-cae9920e6871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHxlbnwwfHwwfHx8MA%3D%3D', userName: 'jo lopster', userAllWorks: 50 },
//     { userId: 4, userAvartar: 'https://plus.unsplash.com/premium_photo-1672287579431-7183aac64429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFydHxlbnwwfHwwfHx8MA%3D%3D', userName: 'ju lopster', userAllWorks: 50 },
//     { userId: 5, userAvartar: 'https://images.unsplash.com/photo-1579541718334-85e6075516f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFydHxlbnwwfHwwfHx8MA%3D%3D', userName: 'mo lopster', userAllWorks: 50 },
//     { userId: 6, userAvartar: 'https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGFydHxlbnwwfHwwfHx8MA%3D%3D', userName: 'may lopster', userAllWorks: 50 },
//     { userId: 7, userAvartar: 'https://plus.unsplash.com/premium_photo-1698081929827-28c48d81b890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D', userName: 'mild lopster', userAllWorks: 50 },
//     { userId: 8, userAvartar: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D', userName: 'mix lopster', userAllWorks: 50 },
//     { userId: 9, userAvartar: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D', userName: 'ploy lopster', userAllWorks: 50 },
//     { userId: 10, userAvartar: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', userName: 'pam lopster', userAllWorks: 50 },
//     { userId: 11, userAvartar: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D', userName: 'ploy lopster', userAllWorks: 50 },
//     { userId: 12, userAvartar: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', userName: 'pam lopster', userAllWorks: 50 },
//     { userId: 11, userAvartar: 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D', userName: 'ploy lopster', userAllWorks: 50 },
//     { userId: 12, userAvartar: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', userName: 'pam lopster', userAllWorks: 50 },
// ];

const colors = ['#ff6347', '#4682b4', '#32cd32', '#8a2be2', '#ff69b4']; // ตัวอย่างสี

function FeaturedArtists({ artists = [] }: IFeaturedArtistsProps) {
    return (
        <FeaturedArtistsContainer>
            <Typography variant="h4" sx={{ padding: '15px' }}>Featured Artists</Typography>

            {/* {featuredArtists.length > 12 ? ( */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={20} slidesPerView={1}>
                    {Array(Math.ceil(artists.length / 12))
                        .fill(null)
                        .map((_, index) => (
                            <SwiperSlide key={index}>
                                <FeaturedArtistsMain>
                                    {artists
                                        .slice(index * 12, index * 12 + 12)
                                        .map((artist, index) => {
                                            const bgColor = colors[index % colors.length];
                                            const borderColor = getComplementaryColor(bgColor);
                                            return (
                                                <StyledCard key={index}>
                                                    <StyleAvatarContainer bgColor={bgColor}>
                                                        <StyledAvatar
                                                            alt={`${artist.userName}'s avatar`}
                                                            src={artist.userAvatar}
                                                            borderColor={borderColor}
                                                        />
                                                    </StyleAvatarContainer>
                                                    <StyledCardContent>
                                                        <Typography variant="h6" sx={{ fontWeight: '600' }}>
                                                            {artist.userName}
                                                        </Typography>
                                                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                                            All works: {artist.userAllWorks}
                                                        </Typography>
                                                    </StyledCardContent>
                                                </StyledCard>
                                            );
                                        })}
                                </FeaturedArtistsMain>
                            </SwiperSlide>
                        ))}
                </Swiper>
            {/* ) : ( */}

                {/* <FeaturedArtistsMain>

                    {featuredArtists.map((artist, index) => {
                        const bgColor = colors[index % colors.length];
                        const borderColor = getComplementaryColor(bgColor);

                        return (
                            <StyledCard key={index}>
                                <StyleAvatarContainer bgColor={bgColor}>
                                    <StyledAvatar alt={`${artist.userName}'s avatar`} src={artist.userAvartar} borderColor={borderColor} />
                                </StyleAvatarContainer>
                                <StyledCardContent>
                                    <Typography variant="h6" sx={{ fontWeight: '600' }}>
                                        {artist.userName}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                        All works: {artist.userAllWorks}
                                    </Typography>
                                </StyledCardContent>
                            </StyledCard>
                        );
                    })}

                </FeaturedArtistsMain>

            )} */}

        </FeaturedArtistsContainer>
    )
}

export default FeaturedArtists