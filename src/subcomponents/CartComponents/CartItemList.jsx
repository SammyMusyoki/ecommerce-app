import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import CartItem from './CartItem'
import BigButton from '../../components/BigButton'
import { ProductItems } from '../../data'

const CartItemList = ({isOpen, ItemVariants}) => {
  const [subtotal, setSubTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(250);
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState(ProductItems)

  useEffect( () => {
    calculateSubTotal()
  }, [products]);
  
  useEffect( () => {
    calculateTotalPrice()
  }, [subtotal, shippingFee]);

  const calculateSubTotal = () => {
    let subtotal = 0;
    for (const product of products) {
      subtotal += product.price * product.quantity;
    }
    setSubTotal(subtotal)
  }

  const calculateTotalPrice = () => {
    const totalPrice = subtotal + shippingFee;
    setTotalPrice(totalPrice)
  }

  return (
    <React.Fragment> 
        <motion.div
          className={`${
            isOpen ? "" : "hidden"
          } absolute right-5 top-24 max-w-md p-4 flex flex-col 
          transition-transform  ease-in-out duration-1000
          space-y-4 rounded-xl`}
        >
          <div>
            <motion.ul
              varients={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
              className="space-y-2 h-96 overflow-y-scroll scrollbar-hide"
            >
              <AnimatePresence>
                {products.map((product) => {
                  return (
                    <motion.li 
                    variants={ItemVariants}
                    key={product.id}>
                      <CartItem
                        product={product}
                        products={products}
                        setProducts={setProducts}
                      />
                    </motion.li>
                  );})}
              </AnimatePresence>
            </motion.ul>
          </div>

          <div className="p-4 bg-sky-50 rounded-lg w-full font-bold">
            <div className="flex justify-between text-gray-500">
              <h1>Subtotal</h1>
              <span>Ksh {subtotal}.00</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <h1>Shipping</h1>
              <span>Ksh {shippingFee}.00</span>
            </div>

            <hr className="h-0.5 my-4 bg-sky-300" />
            <div className="flex justify-between">
              <h1>Total</h1>
              <div>
                <span>Ksh {totalPrice}.00</span>
                <h2 className="font-semibold text-gray-500">Including VAT</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <BigButton>
              <span className="text-lg font-semibold">Check out</span>
            </BigButton>
          </div>
        </motion.div>
    </React.Fragment>
  );
}

export default CartItemList
