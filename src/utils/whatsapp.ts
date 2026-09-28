import { siteConfig } from "@/config/site";
import { Product, CartItem, OrderRecord } from "@/types";

export function getCleanWhatsAppNumber(): string {
  return siteConfig.contact.whatsappNumber || "919845474725";
}

/**
 * Builds direct WhatsApp URL for a single product with selected variant options
 */
export function buildProductWhatsAppUrl({
  product,
  sizeName,
  materialName,
  colorName,
  quantity,
  unitPrice,
  pincode,
}: {
  product: Product;
  sizeName?: string;
  materialName?: string;
  colorName?: string;
  quantity: number;
  unitPrice: number;
  pincode?: string;
}): string {
  const phone = getCleanWhatsAppNumber();
  const totalPrice = unitPrice * quantity;

  let msg = `🌿 *Hello Little Plants! I want to order this plant:*\n\n`;
  msg += `🪴 *Item:* ${product.name}\n`;
  if (product.botanicalName) {
    msg += `📖 *Botanical Name:* _${product.botanicalName}_\n`;
  }
  if (sizeName) {
    msg += `📏 *Size:* ${sizeName}\n`;
  }
  if (materialName) {
    msg += `🏺 *Planter:* ${materialName}\n`;
  }
  if (colorName) {
    msg += `🎨 *Color:* ${colorName}\n`;
  }
  msg += `🔢 *Quantity:* ${quantity}\n`;
  msg += `💰 *Total Price:* ₹${totalPrice.toLocaleString("en-IN")}\n`;

  if (pincode && pincode.trim().length === 6) {
    msg += `📍 *Delivery PIN Code:* ${pincode.trim()}\n`;
  }

  msg += `\n🔗 *Website Link:* https://littleplants.in/products/${product.slug}\n\n`;
  msg += `Please confirm availability and share payment options (GPay / PhonePe / UPI). Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds WhatsApp URL for entire cart (multiple items)
 */
export function buildCartWhatsAppUrl({
  items,
  subtotal,
  shippingFee,
  total,
  giftMessage,
  pincode,
  customerName,
}: {
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  giftMessage?: string;
  pincode?: string;
  customerName?: string;
}): string {
  const phone = getCleanWhatsAppNumber();

  let msg = `🌿 *Hello Little Plants! I would like to place an order:*\n\n`;

  if (customerName && customerName.trim()) {
    msg += `👤 *Customer Name:* ${customerName.trim()}\n`;
  }

  msg += `🛒 *Order Items (${items.length}):*\n`;
  items.forEach((item, idx) => {
    msg += `\n${idx + 1}. *${item.product.name}*\n`;
    const details: string[] = [];
    if (item.selectedSize?.name) details.push(`Size: ${item.selectedSize.name}`);
    if (item.selectedPlanterMaterial?.name) details.push(`Planter: ${item.selectedPlanterMaterial.name}`);
    if (item.selectedPlanterColor?.name) details.push(`Color: ${item.selectedPlanterColor.name}`);
    if (details.length > 0) {
      msg += `   • ${details.join(" | ")}\n`;
    }
    msg += `   • Qty: ${item.quantity} × ₹${item.unitPrice.toLocaleString("en-IN")} = ₹${(item.unitPrice * item.quantity).toLocaleString("en-IN")}\n`;
  });

  msg += `\n----------------------------------\n`;
  msg += `📦 *Subtotal:* ₹${subtotal.toLocaleString("en-IN")}\n`;
  msg += `🚚 *Shipping:* ${shippingFee === 0 ? "FREE Eco-Transit" : `₹${shippingFee}`}\n`;
  msg += `💰 *Total Estimated Amount:* ₹${total.toLocaleString("en-IN")}\n`;
  msg += `----------------------------------\n`;

  if (pincode && pincode.trim().length === 6) {
    msg += `📍 *Delivery PIN:* ${pincode.trim()}\n`;
  }

  if (giftMessage && giftMessage.trim()) {
    msg += `💌 *Gift Note / Special Request:* "${giftMessage.trim()}"\n`;
  }

  msg += `\nPlease confirm plant availability and share payment instructions (GPay/UPI/Bank Transfer). Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds WhatsApp URL for completed checkout with full address
 */
export function buildCheckoutWhatsAppUrl(order: OrderRecord): string {
  const phone = getCleanWhatsAppNumber();

  let msg = `🌿 *New Order Placed - Little Plants*\n`;
  msg += `🔖 *Order Reference:* #${order.orderNumber}\n\n`;

  msg += `👤 *Customer & Delivery Details:*\n`;
  msg += `• Name: ${order.customer.fullName}\n`;
  msg += `• Phone: ${order.customer.phone}\n`;
  if (order.customer.email) {
    msg += `• Email: ${order.customer.email}\n`;
  }
  msg += `• Address: ${order.customer.addressLine1}`;
  if (order.customer.addressLine2) msg += `, ${order.customer.addressLine2}`;
  if (order.customer.landmark) msg += `, Near ${order.customer.landmark}`;
  msg += `, ${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}\n\n`;

  msg += `🛒 *Items Ordered (${order.items.length}):*\n`;
  order.items.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.product.name}* (Qty: ${item.quantity}) - ₹${(item.unitPrice * item.quantity).toLocaleString("en-IN")}\n`;
    const details: string[] = [];
    if (item.selectedSize?.name) details.push(item.selectedSize.name);
    if (item.selectedPlanterMaterial?.name) details.push(item.selectedPlanterMaterial.name);
    if (item.selectedPlanterColor?.name) details.push(item.selectedPlanterColor.name);
    if (details.length > 0) {
      msg += `   • ${details.join(" | ")}\n`;
    }
  });

  msg += `\n----------------------------------\n`;
  msg += `📦 *Subtotal:* ₹${order.subtotal.toLocaleString("en-IN")}\n`;
  if (order.couponDiscount && order.couponDiscount > 0) {
    msg += `🏷️ *Coupon (${order.couponCode || "Discount"}):* -₹${order.couponDiscount.toLocaleString("en-IN")}\n`;
  }
  msg += `🚚 *Shipping:* ${order.shippingFee === 0 ? "FREE" : `₹${order.shippingFee}`}\n`;
  msg += `💰 *Final Total:* ₹${order.total.toLocaleString("en-IN")}\n`;
  msg += `----------------------------------\n`;

  if (order.giftMessage && order.giftMessage.trim()) {
    msg += `💌 *Gift Note:* "${order.giftMessage.trim()}"\n`;
  }

  msg += `\nHi, I have submitted my order details above. Please confirm my order and share your UPI / GPay QR code for payment!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds WhatsApp URL for custom green corner bundle
 */
export function buildBundleWhatsAppUrl({
  plantName,
  planterName,
  careItems,
  total,
  originalTotal,
}: {
  plantName: string;
  planterName: string;
  careItems: string[];
  total: number;
  originalTotal: number;
}): string {
  const phone = getCleanWhatsAppNumber();

  let msg = `🌿 *Hello Little Plants! I designed a custom Green Corner on your website:*\n\n`;
  msg += `🪴 *Selected Plant:* ${plantName}\n`;
  msg += `🏺 *Selected Planter:* ${planterName}\n`;
  if (careItems.length > 0) {
    msg += `🧪 *Care Essentials:* ${careItems.join(", ")}\n`;
  }
  msg += `\n----------------------------------\n`;
  msg += `💰 *Special Bundle Price (15% Off):* ₹${total.toLocaleString("en-IN")} _(Orig. ₹${originalTotal.toLocaleString("en-IN")})_\n`;
  msg += `----------------------------------\n\n`;
  msg += `Please confirm availability and share payment details. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Builds general WhatsApp enquiry link
 */
export function buildGeneralWhatsAppUrl(message?: string): string {
  const phone = getCleanWhatsAppNumber();
  const defaultMsg =
    message ||
    "Hello Little Plants! I am browsing your online nursery and have a question regarding plant care and ordering.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
}
