import { firestore } from 'firebase-admin';
import { setIncrementalId } from './set-incremental-id';
import * as databaseModule from './database'; // Importa o módulo de banco de dados para facilitar a substituição do objeto database

jest.mock('./database', () => ({
  database: {
    collection: jest.fn(),
  },
}));

function returnMockCollection(snapshot) {
  return jest.fn().mockReturnValue({
    orderBy: jest.fn().mockReturnValue({
      limit: jest.fn().mockReturnValue({
        get: jest.fn().mockResolvedValue(snapshot),
      }),
    }),
  });
}
describe('setIncrementalId', () => {
  const mockDocumentReference = {
    update: jest.fn(),
  };

  const mockDocumentSnapshot = {
    ref: mockDocumentReference,
  } as unknown as firestore.DocumentSnapshot;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set incremental ID correctly', async () => {
    const mockQuerySnapshot: any = {
      empty: false,
      docs: [
        {
          data: () => ({
            incremental_id: 10, // Simula o último ID registrado
          }),
        },
      ],
    };

    const mockCollection = returnMockCollection(mockQuerySnapshot);
    jest
      .spyOn(databaseModule.database, 'collection')
      .mockImplementation(mockCollection);

    await setIncrementalId(mockDocumentSnapshot, 'challenge');

    expect(databaseModule.database.collection).toHaveBeenCalledWith(
      'challenge',
    );

    expect(mockDocumentReference.update).toHaveBeenCalledWith({
      incremental_id: 11, // O último ID registrado foi 10, então o novo ID deverá ser 11
    });
  });

  it('should handle empty query snapshot correctly', async () => {
    const mockEmptyQuerySnapshot: any = {
      empty: true,
    };

    const mockCollection = returnMockCollection(mockEmptyQuerySnapshot);

    jest
      .spyOn(databaseModule.database, 'collection')
      .mockImplementation(mockCollection);

    await setIncrementalId(mockDocumentSnapshot, 'challenge');

    expect(databaseModule.database.collection).toHaveBeenCalledWith(
      'challenge',
    );

    expect(mockDocumentReference.update).toHaveBeenCalledTimes(1);
    expect(mockDocumentReference.update).toHaveBeenCalledWith({
      incremental_id: 1,
    });
  });

  it('should handle errors correctly', async () => {
    const mockError = new Error('Firestore error');
    const mockCollection = returnMockCollection(mockError);

    jest
      .spyOn(databaseModule.database, 'collection')
      .mockImplementation(mockCollection);
    try {
      await setIncrementalId(mockDocumentSnapshot, 'challenge');
    } catch (error) {}

    expect(databaseModule.database.collection).toHaveBeenCalledWith(
      'challenge',
    );
  });
});
