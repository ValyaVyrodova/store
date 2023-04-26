import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev-ajr6yugysyg3sng4.us.auth0.com
// 0JIAUWuOU9scOqbVcS3uwcAG0SrYEXx6
root.render(
    <Auth0Provider
        domain='dev-ajr6yugysyg3sng4.us.auth0.com'
        clientId='0JIAUWuOU9scOqbVcS3uwcAG0SrYEXx6'
        redirectUri={window.location.origin}
        cacheLocation='localstorage'>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);


