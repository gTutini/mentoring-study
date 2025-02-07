# Componente `<Button>` - Requisitos

## **Requisitos Funcionais**

### 1. Tipos de Botão

- **Descrição**: Suporta três variações de estilo.
- **Valores**: `primary`, `secondary`, `outline`.
- **Exemplo**:
  ```jsx
  <Button variant="primary">Salvar</Button>
  ```

### 2. Tamanhos

- **Descrição**: Oferece três tamanhos pré-definidos.
- **Valores**: `small`, `medium`, `large`.
- **Padrão**: `medium`.

### 3. Estado Desabilitado

- **Propriedade**: `disabled`.
- **Comportamento**:
  - Desativa interações (onClick não é acionado).
  - Aplica estilização visual (ex: opacity: 0.6).

### 4. Ícone Opcional

- **Propriedade**: `icon`.
- **Posicionamento**: À esquerda do texto.
- **Exemplo**:
  ```jsx
  <Button icon={<DownloadIcon />}>Baixar</Button>
  ```

### 5. Estado de Carregamento

- **Propriedade**: `loading`.
- **Comportamento**:
  - Exibe um spinner animado.
  - Desabilita o botão automaticamente.

### 6. Eventos

- **onClick**: Acionado ao clicar no botão.
- **Eventos de Teclado**: Suporta Enter e Space para interação.

### 7. Acessibilidade

- **Atributos ARIA**:
  - `aria-label`: Define um rótulo se o texto não estiver presente.
  - `aria-disabled`: Indica estado desabilitado.
- **Foco**: Navegável via Tab.

## **Requisitos Não Funcionais**

1. **Performance**
   - **Otimização**: Evitar re-renders com React.memo.
2. **Compatibilidade**
   - **React**: Versão 18+.
   - **TypeScript**: Suporte opcional.
3. **Estilização**
   - **Método**: CSS Modules ou Styled Components.
   - **Variáveis**: Cores e tamanhos definidos via tema.
4. **Documentação**
   - **Props**: Documentadas via TypeScript/PropTypes.
   - **Exemplos**: Incluídos no README.md.
5. **Testes**
   - **Cobertura**:
     - Renderização de variações (variant, size).
     - Comportamento de onClick.
     - Estados disabled e loading.

## **Especificações Técnicas**

### Props (TypeScript)

```ts
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}
```

### Exemplo Completo

```jsx
<Button
  variant="primary"
  size="large"
  icon={<CheckIcon />}
  onClick={() => console.log("Confirmado!")}
  ariaLabel="Confirmar operação"
  loading={false}
>
  Confirmar
</Button>
```

## **Critérios de Aceitação**

- ✅ Funciona em Chrome, Firefox e Safari.
- ✅ Passa em testes de acessibilidade (ex: Axe).
- ✅ 100% cobertura de testes unitários.
