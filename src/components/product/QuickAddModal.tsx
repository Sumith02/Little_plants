"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariantSize, ProductVariantMaterial, ProductVariantColor } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/config/site";
import { X, Check, ShoppingBag, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { buildProductWhatsAppUrl } from "@/utils/whatsapp";

interface QuickAddModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAddModal: React.FC<QuickAddModalProps> = ({ product, isOpen, onClose }) => {
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<ProductVariantSize | undefined>(
    product?.variants?.sizes?.[0]
  );
  const [selectedMaterial, setSelectedMaterial] = useState<ProductVariantMaterial | undefined>(
    product?.variants?.planterMaterials?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<ProductVariantColor | undefined>(
    product?.variants?.planterColors?.[0]
  );
  const [quantity, setQuantity] = useState(1);

  // Sync state if product changes
  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.variants?.sizes?.[0]);
      setSelectedMaterial(product.variants?.planterMaterials?.[0]);
      setSelectedColor(product.variants?.planterColors?.[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  // Compute live price
  let currentPrice = product.price;
  if (selectedSize) currentPrice += selectedSize.priceModifier;
  if (selectedMaterial) currentPrice += selectedMaterial.priceModifier;

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedMaterial, selectedColor, quantity);
    onClose();
  };

  const handleOrderWhatsApp = () => {
    const url = buildProductWhatsAppUrl({
      product,
      sizeName: selectedSize?.name,
      materialName: selectedMaterial?.name,
      colorName: selectedColor?.name,
      quantity,
      unitPrice: currentPrice,
    });
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-cream rounded-2xl max-w-lg w-full shadow-2xl border border-sand-dark overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-sand bg-cream-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-olive">
              Select Botanical Options
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-sand"
            aria-label="Close variant selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Top Product Summary */}
          <div className="flex gap-4 items-start">
            <div className="relative w-18 aspect-[10/11] rounded-xl overflow-hidden bg-sand shrink-0 border border-sand">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg font-bold text-olive line-clamp-1">
                {product.name}
              </h3>
              {product.botanicalName && (
                <p className="text-xs italic text-charcoal-muted">{product.botanicalName}</p>
              )}
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-base font-bold text-charcoal">
                  {formatPrice(currentPrice)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xs line-through text-charcoal-muted">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Size Selector */}
          {product.variants?.sizes && product.variants.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-olive block">
                Plant Size
              </label>
              <div className="grid grid-cols-1 gap-2">
                {product.variants.sizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedSize?.id === size.id
                        ? "border-terracotta bg-terracotta/5 shadow-2xs"
                        : "border-sand bg-cream-50 hover:border-sand-dark"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-charcoal">{size.name}</div>
                      <div className="text-[11px] text-charcoal-muted">{size.heightGuide}</div>
                    </div>
                    <div className="text-right">
                      {size.priceModifier > 0 && (
                        <span className="text-xs font-medium text-terracotta">
                          +{formatPrice(size.priceModifier)}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Planter Material Selector */}
          {product.variants?.planterMaterials && product.variants.planterMaterials.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-olive block">
                Planter Type & Material
              </label>
              <div className="grid grid-cols-1 gap-2">
                {product.variants.planterMaterials.map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setSelectedMaterial(mat)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedMaterial?.id === mat.id
                        ? "border-terracotta bg-terracotta/5"
                        : "border-sand bg-cream-50 hover:border-sand-dark"
                    }`}
                  >
                    <span className="text-xs font-medium text-charcoal">{mat.name}</span>
                    <span className="text-xs text-charcoal-muted">
                      {mat.priceModifier === 0 ? "Included" : `+${formatPrice(mat.priceModifier)}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Planter Color Selector */}
          {product.variants?.planterColors && product.variants.planterColors.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-olive">
                  Planter Color Shade
                </label>
                {selectedColor && (
                  <span className="text-xs text-charcoal-muted">{selectedColor.name}</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {product.variants.planterColors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color.name}`}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      selectedColor?.id === color.id
                        ? "ring-2 ring-terracotta ring-offset-2 scale-105"
                        : "border border-sand-dark hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor?.id === color.id && (
                      <Check
                        className={`w-4 h-4 ${
                          color.id === "col-sand" ? "text-charcoal" : "text-white"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-sand bg-cream-50 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={handleOrderWhatsApp}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Order on WhatsApp • {formatPrice(currentPrice * quantity)}</span>
          </button>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Basket</span>
            </button>

            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="px-3 py-2.5 rounded-xl border border-sand text-xs font-medium text-charcoal hover:bg-sand transition-colors flex items-center justify-center gap-1"
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
