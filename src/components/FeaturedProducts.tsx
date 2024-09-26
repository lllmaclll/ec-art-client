import { useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces/product';
import { FeaturedProductsContainer, FeaturedProductsMain, StyleCardActions, StyledCard, StyledCardMedia } from '../styles/FeaturedProducts'
import { Typography, CardContent, Button } from '@mui/material'

export interface IFeaturedProductsProps {
    products: IProduct[];  // กำหนดให้ props รับข้อมูลเป็น array ของสินค้า
}

function FeaturedProducts({ products = [] }: IFeaturedProductsProps) {  // กำหนดค่าเริ่มต้นให้ products เป็น array ว่าง

    const navigate = useNavigate();  // ใช้ useNavigate เพื่อนำทางไปยังเส้นทางใหม่
    const location = useLocation(); // ใช้ useLocation เพื่อดึงเส้นทางปัจจุบัน

    // ดึงชื่อ route จาก path ปัจจุบัน เช่น "/paintings" หรือ "/sculptures"
    const pageName = location.pathname.split('/')[1]; 
    console.log(location)

    const handleCardClick = (productId: number) => {
        // กำหนดเส้นทางตาม pageName
        navigate(`/${pageName}/${productId}`);
    };

    return (
        <FeaturedProductsContainer>
            <Typography variant="h4" sx={{ padding: '15px' }}>Featured Products</Typography>

            <FeaturedProductsMain>

                {products.map((product, index) => (
                    <StyledCard key={index} sx={{ width: '320px' }} 
                    onClick={() => handleCardClick(product.id)}  // เมื่อคลิกที่การ์ดจะเรียก handleCardClick
                    >
                        <StyledCardMedia
                            sx={{ height: 300 }}
                            image={product.image}
                            title={product.artworkTitle}
                        />
                        <CardContent sx={{ padding: '10px' }}>
                            <Typography variant="h6" component="div">
                                {product.artworkTitle}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                {product.artistName}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4E31AA' }}>
                                {product.price}
                            </Typography>
                        </CardContent>
                        {/* <StyleCardActions>
                            <Button variant='contained' size="small" color="error">Buy</Button>
                            <Button variant='contained' size="small">Read More</Button>
                        </StyleCardActions> */}
                    </StyledCard>
                ))}

            </FeaturedProductsMain>

        </FeaturedProductsContainer>
    )
}

export default FeaturedProducts