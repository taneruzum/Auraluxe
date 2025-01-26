import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { FaShoppingCart } from 'react-icons/fa';
import { useBasket, useTotalPrice } from "@/lib/features/basket/hooks";
import { handleDecreaseQuantity, handleIncreaseQuantity } from "@/lib/features/basket/actions";

export default function BasketButton() {

    const [opened, { open, close }] = useDisclosure(false);
    const basket = useBasket();
    const totalPrice = useTotalPrice();

    return (
        <>
            <Drawer opened={opened} onClose={close}>
                <section className="basket mt-8">
                    <h2 className="text-center text-2xl font-bold">Your Basket</h2>
                    {basket.items.length > 0 ?
                        <div className="basket-items">
                            {basket.items.map(item => (
                                <div key={item._id} className="basket-item flex items-center justify-between p-4 border-b">
                                    <img src={item.image} alt={item.name} className="basket-item-image w-16 h-16 object-cover" />
                                    <h3 className="basket-item-name">{item.name}</h3>
                                    <div className="basket-item-quantity flex items-center">
                                        <button onClick={() => handleDecreaseQuantity(item._id)} className="decrease-quantity-button px-2 py-1">-</button>
                                        <span className="quantity mx-2">{item.quantity}</span>
                                        <button onClick={() => handleIncreaseQuantity(item._id)} className="increase-quantity-button px-2 py-1">+</button>
                                    </div>
                                    <p className="basket-item-price">{item.price} TL</p>
                                </div>
                            ))}
                            <div className="total-price mt-4">
                                <h2 className="text-center text-2xl font-bold">Toplam Fiyat: {totalPrice} TL</h2>
                            </div>
                        </div> : <p className="text-center mt-4">Sepetinizde ürün bulunmamaktadır.</p>}

                </section>
            </Drawer>

            <Button variant="default" onClick={open}
                className='!px-4 !py-2 !border-none hover:!bg-black/5'
            >
                <FaShoppingCart className="size-4" />
            </Button>
        </>
    )
}
