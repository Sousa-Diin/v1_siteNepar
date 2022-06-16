import React from "react"

import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Drawer as DrawerChakra,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export const Drawer = ({ body, footer, isOpen, onOpen, onClose, ref }) => {
  const btnRef = React.useRef()
  return (
    <>
      <IconButton
        ml='15px'
        aria-label='Search database'
        variant='ghost'
        size='md'
        icon={<HamburgerIcon h='25px' w='25px' />}
        onClick={onOpen}
        ref={btnRef}
      />
      <DrawerChakra
        finalFocusRef={ref}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor='#073154'>
          <DrawerCloseButton color='white' />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>{body}</DrawerBody>

          <DrawerFooter justifyContent='left'>{footer}</DrawerFooter>
        </DrawerContent>
      </DrawerChakra>
    </>
  )
}
