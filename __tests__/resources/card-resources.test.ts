import { boardCards } from '@Resources/card-resources';

import { mockBoardCards } from '@Mocks/boardCardsMock';

describe('boardCards()', () => {
  it('should throw an error with empty array', () => {
    const result = boardCards(mockBoardCards, 'ToDo');
    expect(result).toHaveLength(1);
  });
});
