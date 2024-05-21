import { z } from 'zod';

export const desafioUseCaseInputSchema = z.object({
  name: z.string(),
});
