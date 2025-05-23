# ASCII-To-C-Format

Uma ferramenta simples para converter arte ASCII em strings formatadas para uso em código C.

## Demonstração

Você pode experimentar a ferramenta online aqui: [ascii-to-c-format.vercel.app](https://ascii-to-c-format.vercel.app)

## Como usar

1. Acesse o site acima.
2. Cole ou digite sua arte ASCII no campo fornecido.
3. A ferramenta gerará automaticamente o código C correspondente, com cada linha da arte representada como uma string.
4. Copie o código gerado e insira-o em seu projeto C conforme necessário.

## Exemplo

Entrada:

```
  /\_/\  
 ( o.o ) 
  > ^ <  
```

Saída:

```c
const char* ascii_art[] = {
    "  /\\_/\\  ",
    " ( o.o ) ",
    "  > ^ <  ",
    NULL
};
```

## Tecnologias utilizadas

- HTML, CSS e JavaScript para a interface do usuário.
- Tailwind CSS para estilização.
- Hospedado no Vercel.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
