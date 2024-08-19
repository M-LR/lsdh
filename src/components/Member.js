import React, { forwardRef } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// eslint-disable-next-line react/display-name
const Member = forwardRef(({ name, presentation, status, css }, ref) => {
  return (
    <Card
      className="flex-1 py-4 m-2 dark:bg-zinc-950 shadow-md dark:shadow-violet-600"
      style={css} // Application des styles passés via la prop css
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{name}</h4>
        <p className="text-tiny uppercase font-bold mt-1">{status}</p>
        <small className="text-default-500 mt-2">{presentation}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`./images/${name}.svg`}
          width={270}
        />
      </CardBody>
    </Card>
  );
});

export default Member;
