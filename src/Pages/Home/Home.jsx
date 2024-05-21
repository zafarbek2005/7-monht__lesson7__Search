import React from 'react';
import Product from '../../Components/Product/Product';
import { useGetProductsQuery } from '../../Components/context/Product/Product';

const Home = () => {
    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <>  
      
                <Product  products={data} />
        
        </>
    );
};

export default Home;
