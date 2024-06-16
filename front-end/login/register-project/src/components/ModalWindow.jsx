import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ModalWindow({
  widthModal,
  textModal,
  titleModal,
  textButtonModal,
  classModal,
  clickedButton,
}) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <Link to={"/profile"}>
        <Button
          onClick={() => {
            handleOpen(widthModal);
          }}
          size="sm"
          variant={clickedButton === 4 ? "gradient" : "text"}
          className={
            clickedButton === 4
              ? "text-white bg-[#232323] lg:inline-block group"
              : "lg:inline-block"
          }
        >
          {textButtonModal}
        </Button>
      </Link>
      <Dialog
        className={classModal}
        open={size === "xs"}
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>{titleModal}</DialogHeader>
        <DialogBody>{textModal}</DialogBody>
        <DialogFooter>
          <Link to={"/login"}>
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Go to LogIn page</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
}
