import React from 'react'
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const Pover = () => {
  return (
    <Popover placement="right">
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            <span>This is a very beautiful popover, show some love.</span>
          </PopoverContent>
    </Popover>
  )
}

export default Pover