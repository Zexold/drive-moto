import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
} from "@material-tailwind/react";
import { UseMainContext } from "../../context/useMainContext";
import { Icons } from "../../assets/icons";

export function LikeModal({ open, handleModal }) {
  const { likeItems } = useContext(UseMainContext)
  const { addToCart, removeFromCart } = useContext(UseMainContext)
  return (
    <>

      <Dialog open={open} handler={handleModal}>
        <DialogHeader>Like Box</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4 h-[400px] overflow-y-auto">
            {
              likeItems.map(el => (
                <div className="flex items-start gap-4 relative">
                  <div className="w-[102px] h-[90px]">
                    <img className="w-full h-full object-contain" src={el.image} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-normal text-dark-300">Дверной Замок Golden Soft для офиса</p>

                      <div className="flex gap-1 items-center">
                        <Rating value={4}/>
                        <p className="text-sm font-normal">(12) отзывов</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <p className="text-sm font-normal text-dark-300">9 000₽</p>
                      <p className="text-sm font-normal text-dark-100 line-through">12000₽</p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-2 flex gap-1">
                    <button ><Icons.plusIcon /></button>
                    <a href="#!" className="text-base font-bold text-primary">Добавить</a>
                  </div>
                </div>
              ))
            }
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleModal}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}