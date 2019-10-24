import React from 'react'
import ProductCard from './ProductCard'
import a1 from '../../assets/estampas/a1.jpg'

const Products = () => {

    return (
        <div style={{ display: 'flex', flexWrap:"wrap", justifyContent: "center" }}>
            <ProductCard title="Skyfall" price = "25" img1="https://i.imgur.com/kQ7w2VW.jpg" img2="https://i.imgur.com/0mkNo6n.png"></ProductCard>
            <ProductCard title="Blood Sugar" price = "25" img1="https://i.imgur.com/sYk03EM.jpg" img2="https://i.imgur.com/CjEw03g.png"></ProductCard>
            <ProductCard title="Cosmic Dancer" price = "25" img1="https://i.imgur.com/N7vi4gL.jpg" img2="https://i.imgur.com/JNAE3oG.png"></ProductCard>
            <ProductCard title="Sex Machine" price = "25" img1="https://i.imgur.com/TxvBxiA.jpg" img2="https://i.imgur.com/2T4dNNG.png"></ProductCard>
            <ProductCard title="Black Mamba" price = "25" img1="https://i.imgur.com/yZrR3Y0.jpg" img2="https://i.imgur.com/Y2oEVg4.png"></ProductCard>
            <ProductCard title="3rd Dimension" price = "25" img1="https://i.imgur.com/gQY7QiC.jpg" img2="https://i.imgur.com/zYOdn6Q.png"></ProductCard>
            <ProductCard title="High By the beach" price = "25" img1="https://i.imgur.com/1qQa5ZS.jpg" img2="https://i.imgur.com/GcghNKu.png"></ProductCard>
            <ProductCard title="Silver Surfer" price = "25" img1="https://i.imgur.com/zEmNLfY.jpg" img2="https://i.imgur.com/h6Yl5wL.png"></ProductCard>
            <ProductCard title="Enter Sandman" price = "25" img1="https://i.imgur.com/YQRukrN.jpg" img2="https://i.imgur.com/VWMzX6a.png"></ProductCard>
        </div>
    )
}

export default Products