import InputFormField from "../components/InputFormField";
import Button from "../components/Button";
function CheckoutPage() {
    return (
        <div className="checkout-page container">
            <h1>Checkout</h1>
            <div className="checkout-form">
                <InputFormField label="Full Name" placeholder="Enter your full name" />
                <InputFormField label="Email Address" type="email" placeholder="Enter your email" />
                <InputFormField label="Shipping Address" placeholder="Enter your shipping address" />
                <InputFormField label="Payment Method" placeholder="Enter your payment method" />
                <Button className="checkout-btn">Place Order</Button>
            </div>
        </div>
    );
}

export default CheckoutPage;