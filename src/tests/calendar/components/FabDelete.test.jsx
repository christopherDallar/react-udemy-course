import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../calendar/components/FabDelete';
import { useCalendarStore } from '../../../hooks';

jest.mock('../../../hooks/useCalendarStore');

describe('Testing FabDelete', () => {
  test('should show render well', () => {
    const startDeletingEvent = jest.fn();
    useCalendarStore.mockReturnValue({
      startDeletingEvent,
    });
    render(<FabDelete />);

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    expect(btn.classList).toContain('btn');
    expect(btn.classList).toContain('btn-danger');
    expect(btn.classList).toContain('fab-danger');
    expect(startDeletingEvent).toHaveBeenCalled();
  });
});
