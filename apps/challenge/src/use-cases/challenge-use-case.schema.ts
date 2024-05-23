import { z } from 'zod';

export const challengeUseCaseInputSchema = z
  .object({
    name: z.string().min(1, 'Field name must contain at least 1 character.'),
  })
  .required({ name: true });
