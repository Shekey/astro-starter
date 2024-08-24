import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function conditionalClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
