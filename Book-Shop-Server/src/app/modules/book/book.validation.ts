import { z } from 'zod';

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    author: z.string({ required_error: 'Author is required' }),
    price: z.number({ required_error: 'Price is required' }),
    image: z.string({ required_error: 'Image is required' }),
    description: z.string({ required_error: 'Description is required' }),
    quantity: z.number({ required_error: 'Quantity is required' }),
  }),
});

const updateBookValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    quantity: z.string().optional(),
  }),
});

export const bookValidation = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
