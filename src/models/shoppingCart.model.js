import mongoose from 'mongoose';

const shoppingCartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  }],
  totalPrice: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

// Middleware para calcular e atualizar o totalPrice antes de salvar
shoppingCartSchema.pre('save', async function (next) {
  const itemPromises = this.items.map(async (item) => {
    const product = await mongoose.model('Product').findById(item.productId);
    return item.quantity * (product ? product.productPrice : 0);
  });

  const totalPrices = await Promise.all(itemPromises);
  this.totalPrice = totalPrices.reduce((total, price) => total + price, 0);

  next();
});

const ShoppingCartModel = mongoose.model('ShoppingCart', shoppingCartSchema);

export default ShoppingCartModel;
