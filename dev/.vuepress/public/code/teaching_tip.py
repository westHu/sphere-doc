from flask import Flask, request, render_template_string
import paySphere

# Initialize Flask app
app = Flask(__name__)

# Set your Stripe secret key
stripe.api_key = 'your_stripe_secret_key'

@app.route('/')
def pay():
    # Display the payment form
    return render_template_string(payment_form)

@app.route('/charge', methods=['POST'])
def charge():
    # Get the submitted amount and email
    amount = int(request.form['amount'])
    email = request.form['email']

    # Create a Stripe customer
    customer = stripe.Customer.create(
        email=email,
        source=request.form['stripeToken']
    )

    # Create a charge
    charge = stripe.Charge.create(
        customer=customer.id,
        amount=amount,
        currency='usd',
        description='Flask Charge'
    )

    return f'<h1>Successfully charged {amount} cents.</h1>'

if __name__ == '__main__':
    app.run(debug=True)