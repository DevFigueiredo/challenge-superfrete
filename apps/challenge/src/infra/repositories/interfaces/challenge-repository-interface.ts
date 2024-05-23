export namespace IChallengeRepository {
  export type ISaveInput = Partial<{
    uid: string;
    name: string;
  }>;
  export type ISaveOutput = void;
  export type Repository = {
    save(data: ISaveInput): Promise<ISaveOutput>;
  };
}
