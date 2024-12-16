import { useFormStatus } from "react-dom";
import { IconButon } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
import { Spinner } from "../Spinner";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();
  <IconButon>{pending ? <Spinner /> : <ThumbsUp />}</IconButon>;
};
