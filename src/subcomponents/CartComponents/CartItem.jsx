import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsX } from 'react-icons/bs'
import SmallBtn from './SmallBtn'
import { ProductItems } from '../../data'

const CartItem = ({product, products, setProducts}) => {
      const incrementQuantity = (product_id) => {
        const updatedProducts = products.map(product => {
            if (product.id === product_id) {
                return {...product, quantity: product.quantity + 1}
            }
            return product;
        });
        setProducts(updatedProducts)
      };

      const decrementQuantity = (product_id) => {
        const updatedProducts = products.map(product => {
            if (product.id === product_id && product.quantity > 1) {
                return {...product, quantity: product.quantity - 1};
            }
            return product;
        });
        setProducts(updatedProducts)
      }

        const removeProduct = ({ product_id }) => {
          const newProducts = products.filter(
            (product) => product.id !== product_id
          );
          setProducts(newProducts);
        };

  return (
    <React.Fragment>
      <div
        className="flex rounded-lg bg-sky-100 border p-2 w-full justify-between shadow-lg"
      >
        <Link className=" ">
          <img
            src={product.img}
            alt=""
            className="h-32 w-32 shadow-lg rounded-xl"
          />
        </Link>

        <div className="flex flex-col mx-3">
          <h2 className="text-md font-semibold">{product.name}</h2>
          <h3 className="text-md font-semibold">
            Size: <span className="">{product.size}</span>
          </h3>
          <h3 className="text-md font-semibold">
            Color: <span className="">{product.color}</span>
          </h3>

          <div className="flex flex-col mt-2">
            <span className="text-md font-semibold">In Stock</span>

            <div className="flex">
              <SmallBtn>
                <button
                  onClick={() => decrementQuantity(product.id)}
                  className="font-semibold text-lg"
                  >
                  -
                </button>
              </SmallBtn>
              <span className="p-1 h-5 w-5 flex items-center justify-center font-semibold">
                {product.quantity}
              </span>
              <SmallBtn>
                {" "}
                <button
                    onClick={() => incrementQuantity(product.id)}
                  className="font-semibold text-lg"
                >
                  +
                </button>
              </SmallBtn>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-end">
            <SmallBtn>
                <button
                onClick={() => removeProduct(product.id)}
                >

                <BsX />
                </button>
            </SmallBtn>
          </div>

          <div className="p-2">
            <h3 className="text-md font-semibold">Ksh {product.price}.00</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartItem
