import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { FaShoppingCart } from 'react-icons/fa';
import { useBasket } from "@/lib/features/basket/hooks";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useSnackbar } from 'notistack';
import { useAccount } from '@/lib/features/user/hooks';
import { formatPrice, getImageFromBase64 } from '@/utils';
import { useEffect, useState } from 'react';
import { handleZeroQuantityBackend, handleIncreaseQuantityBackend } from '@/api/forCart';
export default function BasketButton() {

    const userSession = useAccount();
    const [opened, { open, close }] = useDisclosure(false);
    const basket = useBasket();
    const [totalPrice, setTotalPrice] = useState(basket.totalPrice);
    const { enqueueSnackbar } = useSnackbar();
    const [basketItems, setBasketItems] = useState(basket.items);

    useEffect(() => {
        setBasketItems(basket.items);
    }, [basket.items]);

    useEffect(() => {
        const newTotalPrice = basketItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [basketItems]);

    const completePurchase = () => {
        if (userSession.authControl) {
            enqueueSnackbar("Purchase completed!", {
                variant: "success",
            });
        } else {
            enqueueSnackbar("Please login to complete the purchase.", {
                variant: "warning",
            });
        }
    };

    const handleIncreaseQuantity = async (productId) => {
        await handleIncreaseQuantityBackend(productId);
        setBasketItems(prevItems => prevItems.map(item =>
            item.productId._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = async (productId) => {
        await handleZeroQuantityBackend(productId);
        setBasketItems(prevItems => prevItems.map(item =>
            item.productId._id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    };

    return (
        <>
            <Drawer opened={opened} onClose={close}>
                <section className="basket mt-8">
                    <h2 className="text-center text-2xl font-bold tracking-wide">YOUR BASKET</h2>
                    {basketItems.length > 0 ?
                        <div className="w-full flex flex-col gap-4">
                            {basketItems.map(item => (
                                <div key={item.productId._id} className="basket-item flex items-center justify-between gap-2 px-4 pb-4 border-b border-black/40 ">
                                    <img src={getImageFromBase64(item.productId.image)} alt={item.productId.name} className="basket-item-image flex-shrink-0 w-16 h-16 object-cover" />
                                    <h3 className="text-wrap max-w-24 text-xs">{item.productId.name}</h3>
                                    <div className="basket-item-quantity flex items-center">
                                        <button onClick={() => handleDecreaseQuantity(item.productId._id)} className="flex items-center justify-center  border border-gray-300 rounded-xl hover:bg-black/5">
                                            <IoRemoveOutline />
                                        </button>
                                        <span className="font-semibold mx-2">{item.quantity}</span>
                                        <button onClick={() => handleIncreaseQuantity(item.productId._id)} className="flex items-center justify-center  border border-gray-300 rounded-xl hover:bg-black/5">
                                            <IoAddOutline />
                                        </button>
                                    </div>
                                    <p className="">{formatPrice(item.productId.price)} TL</p>
                                </div>
                            ))}
                            <div className="total-price mt-4">
                                <h2 className="text-center text-2xl font-light">Toplam Fiyat: {formatPrice(totalPrice)} TL</h2>
                            </div>
                            <button
                                onClick={completePurchase}
                                className='w-full py-2 rounded-md bg-green-300 transition-colors hover:bg-green-500 text-white/80 hover:text-generalWhite font-semibold'>
                                Complete Purchase
                            </button>
                        </div> : <p className="flex flex-col gap-1 text-lg text-center mt-4">Your basket is empty.
                            <a href="/shopping" className='text-base underline'>Check out our products</a>
                        </p>}

                </section>
            </Drawer>

            <Button variant="default" onClick={open}
                className='!px-4 !py-2 !border-none hover:!bg-black/5'
            >
                <span className="relative flex items-center justify-center">
                    <FaShoppingCart className="size-5" />
                </span>
                {basket.items.length > 0 && (
                    <span className="z-40 absolute top-1 right-2 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                )}
            </Button>
        </>
    )
}
