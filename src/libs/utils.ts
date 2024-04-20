import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPercentage = (input: string): string => {
  const trimmedInput = input.trim();

  if (input === "" || trimmedInput === "") {
    return "";
  }
  // handle if input 00, it will invalid remove last character
  if (input.length > 2 && input[0] === "0") {
    return input.slice(0, -1);
  }

  // make sure the input only contains number
  const result = trimmedInput.replace(/\D/g, "");

  return result + "%";
};
