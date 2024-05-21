import { z } from 'zod';

export const challengeUseCaseInputSchema = z.object({
  name: z.string(),
});
