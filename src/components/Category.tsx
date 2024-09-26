import { CategoryContainer, CategoryHeader, CategoryImg, CategoryMain, CategoryMainNavLink } from '../styles/CategoryStyle';
import { Typography } from '@mui/material';

// Import your logos
import Painting_Logo from '../assets/images/logos/Painting_Logo.png';
import Architecture_Logo from '../assets/images/logos/Architecture_Logo.png';
import Sculpture_Logo from '../assets/images/logos/Sculpture_Logo.png';
import Music_Logo from '../assets/images/logos/Music_Logo.png';
import Literature_Logo from '../assets/images/logos/Literature_Logo.png';
import Film_Logo from '../assets/images/logos/Film_Logo.png';
import Performing_Arts_Logo from '../assets/images/logos/Performing_Arts_Logo.png';
import Photography_Logo from '../assets/images/logos/Photography_Logo.png';
import Tattoos_Logo from '../assets/images/logos/Tattoos_Logo.png';
import Digital_Arts_Logo from '../assets/images/logos/Digital_Arts_Logo.png';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import LoadingBackdrop from './Loading';

// Array of category data
const categories = [
    { logo: Painting_Logo, name: 'Paintings' },
    { logo: Sculpture_Logo, name: 'Sculptures' },
    { logo: Architecture_Logo, name: 'Architectures' },
    { logo: Music_Logo, name: 'Musics' },
    { logo: Literature_Logo, name: 'Literatures' },
    { logo: Film_Logo, name: 'Films' },
    { logo: Performing_Arts_Logo, name: 'Performing Arts' },
    { logo: Photography_Logo, name: 'Photographys' },
    { logo: Tattoos_Logo, name: 'Tattoos' },
    { logo: Digital_Arts_Logo, name: 'Digital Arts', className: 'category-main__item--digital-art' },
];

function Category() {
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    // const handleClick = (path: string) => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         navigate(path);
    //         setLoading(false);
    //     }, 300); // Simulate loading delay
    // };

    return (
        <CategoryContainer>
            <CategoryHeader>
                <Typography variant="h5">Category</Typography>
            </CategoryHeader>
            <CategoryMain>
                {categories.map((category, index) => (
                    <CategoryMainNavLink 
                        key={index} 
                        to={`/${category.name.toLowerCase().replace(' ', '-')}`}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        // onClick={() => handleClick(`/${category.name.toLowerCase().replace(' ', '-')}`)}
                        style={{ borderRight: index === categories.length - 1 ? '0' : '' }}
                    >
                        <CategoryImg src={category.logo} alt={category.name} />
                        <Typography variant="h6" className='category-text'>
                            {category.name}
                        </Typography>
                    </CategoryMainNavLink>
                ))}
            </CategoryMain>
            {/* <LoadingBackdrop loading={loading} /> */}
        </CategoryContainer>
    );
}

export default Category;