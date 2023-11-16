# Banco de Dados - Web App de Venda de Perucas

>**PK:** Primary Key e/ou chave primária<br>
>**FK:** Foreign key Key e/ou chave estrangeira

### Clientes:
  
- id_cliente (PK)
- nome
- idade
- sexo
- email
- endereco
- cpf
- cep

### Produtos (Lace):

- id_produto (PK)
- imagem
- tamanho
- quantidade
- modelo

### Pagamentos:

- id_pagamento (PK)
- cartao_credito_debito
- boleto
- pix
- data_compra

### Histórico de Compras:

- id_compra (PK)
- id_cliente (FK referenciando a tabela Clientes)
- id_produto (FK referenciando a tabela Produtos)
- id_pagamento (FK referenciando a tabela Pagamentos)
- data_compra
- preco_total

### Carrinho de Compras Atual:

- id_cliente (FK referenciando a tabela Clientes)
- id_produto (FK referenciando a tabela Produtos)
- quantidade

### Avaliações e Comentários:

- id_avaliacao (PK)
- id_cliente (FK referenciando a tabela Clientes)
- id_produto (FK referenciando a tabela Produtos)
- comentario
- nota

### Preferências do Cliente:

- id_preferencia (PK)
- id_cliente (FK referenciando a tabela Clientes)
- estilo_preferido
- cor_preferida

### Histórico de Pagamentos:

- id_historico_pagamento (PK)
- id_cliente (FK referenciando a tabela Clientes)
- id_pagamento (FK referenciando a tabela Pagamentos)
- status
- valor
- data_pagamento

### Notificações e Comunicações:

- id_notificacao (PK)
- id_cliente (FK referenciando a tabela Clientes)
- tipo_notificacao
- data_envio

### Informações de Entrega:

- id_entrega (PK)
- id_compra (FK referenciando a tabela Histórico de Compras)
- status_entrega
- numero_rastreamento

### Categorias de Produtos:
 
- id_categoria (PK)
- id_produto (FK referenciando a tabela Produtos)
- nome_categoria

### Promoções e Descontos:
  
- id_promocao (PK)
- id_cliente (FK referenciando a tabela Clientes)
- codigo_promocional
- desconto

### Sistema de Devoluções/Trocas:

- id_devolucao (PK)
- id_cliente (FK referenciando a tabela Clientes)
- id_compra (FK referenciando a tabela Histórico de Compras)
- motivo
- status_devolucao

### Programa de Fidelidade:

- id_fidelidade (PK)
- id_cliente (FK referenciando a tabela Clientes)
- pontos
- beneficios