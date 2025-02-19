import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';


describe("Button", () => {
  it('deve renderizar o texto no Button', () => {
    render(<Button>Click Here</Button>);

    const button = screen.getByRole('button', { name: /click here/i });
    expect(button).toBeInTheDocument();
  });

  it('deve executar o onClick quando clickado', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Here</Button>);

    fireEvent.click(screen.getByRole('button', { name: /click here/i }));
    expect(handleClick).toHaveBeenCalled();
  });

  it('desabilita o botão quando disable for true', () => {
    render(<Button disabled>Click here</Button>);
    expect(screen.getByRole('button', { name: /click here/i })).toBeDisabled();
  });

  it('verifica o estado de loading', () => {
    render(<Button loading>Click here</Button>);
    
    const button = screen.getByRole('button', { name: /click here/i });
    expect(button).toBeDisabled();
    expect(screen.getByLabelText(/carregando/i)).toBeInTheDocument();
  });

  it('deve renderizar o button com o tamanho indicado na prop size', () => {
    render(<Button size='small'>Click Here</Button>);

    const button = screen.getByRole('button', { name: /click here/i });
    expect(button).toHaveClass('small');
  })

  describe("Variantes", () => {
    it('deve poder renderizar uma variante vazado', () => {
      render(<Button variant='outline'>Click Here</Button>);

      const button = screen.getByRole('button', { name: /click here/i });
      expect(button).toHaveClass('outline');
    });
    it('deve poder renderizar uma variante primária', () => {
      render(<Button variant='primary'>Click Here</Button>);

      const button = screen.getByRole('button', { name: /click here/i });
      expect(button).toHaveClass('primary');
    });
    it('deve poder renderizar uma variante secundária', () => {
      render(<Button variant='secondary'>Click Here</Button>);

      const button = screen.getByRole('button', { name: /click here/i });
      expect(button).toHaveClass('secondary');
    });
  });
});
