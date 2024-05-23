export namespace IChallengeRepository {
  export type ISaveInput = Partial<{
    name: string;
  }>;
  export type ISaveOutput = {
    id: number;
  };
  export type Repository = {
    save(data: ISaveInput): Promise<ISaveOutput>;
  };
}
