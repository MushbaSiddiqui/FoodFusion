import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ThankYouPage = ({ clearCart }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract the data from location.state
    const { deliveryTime, orderDetails, totalAmount } = location.state || {};

    const handleConfirmOrder = () => {
        Swal.fire({
            title: 'Order Confirmed!',
            html: `
                <div class="text-left">
                    <p class="mb-2">Delivery Time: ${deliveryTime} minutes</p>
                    <p class="mb-2">Delivery Address: ${orderDetails?.address}</p>
                    <p class="mb-2">Contact: ${orderDetails?.phone}</p>
                    <p class="mb-2">Total Amount: Rs ${totalAmount?.toFixed(2)}</p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Back to Home',
            confirmButtonColor: '#3B82F6',
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart(); // Clear the cart
                navigate('/');
            }
        });
    };

    if (!orderDetails) {
        // Redirect to the home page if accessed without the required state
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Order not found!
                    </h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mt-[5rem] bg-gradient-to-r from-blue-50 to-blue-100 py-12">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Order Summary
                </h1>

                {/* Personal Details */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
                    <div className="space-y-2">
                        <p><span className="font-medium">Name:</span> {orderDetails?.fullName}</p>
                        <p><span className="font-medium">Phone:</span> {orderDetails?.phone}</p>
                        <p><span className="font-medium">Address:</span> {orderDetails?.address}</p>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                    <div className="space-y-3">
                        {orderDetails?.items?.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <span>{item.name} x {item.quantity}</span>
                                <span className="font-medium">{item.price}</span>
                            </div>
                        ))}
                        <div className="border-t pt-3 mt-3">
                            <div className="flex justify-between font-bold">
                                <span>Total Amount</span>
                                <span>Rs {totalAmount?.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Time */}
                <div className="mb-8 p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-lg">
                        Estimated Delivery Time: 
                        <span className="font-bold text-blue-600 ml-2">
                            {deliveryTime} minutes
                        </span>
                    </p>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleConfirmOrder}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
