import React from 'react'; 
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


function CheckoutProgress({step1, step2, step3, step4}) {
    return (
        <Menu fluid widths={4}>
            {step1 ? (
                <Menu.Item
                as={NavLink}
                to="/login" 
                name="LOGIN"
                /> ) : (
                <Menu.Item
                    disabled
                    name="LOGIN"
                />
            )}

            {step2 ? (
                <Menu.Item
                as={NavLink}
                to="/shipping" 
                name="SHIPPING"
                /> ) : (
                <Menu.Item
                    disabled
                    name="SHIPPING"
                />
            )}

            {step3 ? (
                <Menu.Item
                as={NavLink}
                to="/payment" 
                name="PAYMENT"
                /> ) : (
                <Menu.Item
                    disabled
                    name="PAYMENT"
                />
            )}

            {step4 ? (
                <Menu.Item
                as={NavLink}
                to="/placeorder" 
                name="PLACE ORDER"
                /> ) : (
                <Menu.Item
                    disabled
                    name="PLACE ORDER "
                />
            )}


            
             
        
        </Menu>
    )
}

export default CheckoutProgress
