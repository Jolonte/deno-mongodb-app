**Documentação da API**

A documentação a seguir descreve os endpoints da sua API usando o estilo Swagger. Além disso, são fornecidos exemplos de como utilizar cada endpoint em JavaScript utilizando a Fetch API.

### Observações:
- Os exemplos de uso em JavaScript utilizam a Fetch API; adapte conforme necessário para o ambiente ou biblioteca que estiver utilizando.

### Recurso: Usuários

#### 1. Listar Todos os Usuários

**Endpoint:** `GET https://renovalaces.deno.dev/users`

**Descrição:** Retorna a lista de todos os usuários cadastrados.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/users')
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(error => console.error(error));
```

#### 2. Obter Usuário por ID

**Endpoint:** `GET https://renovalaces.deno.dev/users/:id`

**Descrição:** Retorna as informações de um usuário específico com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const userId = '5f5ebe5e7c9e3a2a74a60b27'; // Substitua pelo ID desejado

fetch(`https://renovalaces.deno.dev/users/${userId}`)
  .then(response => response.json())
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

#### 3. Deletar Usuário por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/users/:id`

**Descrição:** Deleta um usuário com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const userIdToDelete = '5f5ebe5e7c9e3a2a74a60b27'; // Substitua pelo ID desejado

fetch(`https://renovalaces.deno.dev/users/${userIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 4. Atualizar Usuário por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/users/:id`

**Descrição:** Atualiza as informações de um usuário com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const userIdToUpdate = '5f5ebe5e7c9e3a2a74a60b27'; // Substitua pelo ID desejado

const updatedUserData = {
  firstName: 'Novo',
  lastName: 'Nome',
  age: 25,
  // ... outras propriedades a serem atualizadas
};

fetch(`https://renovalaces.deno.dev/users/${userIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedUserData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Carrinho de Compras

#### 1. Adicionar ao Carrinho de Compras

**Endpoint:** `POST https://renovalaces.deno.dev/shoppingcart`

**Descrição:** Adiciona itens ao carrinho de compras de um usuário.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário.
- `items` (Array): Lista de objetos contendo `productId` (ID do produto) e `quantity` (quantidade a ser adicionada).

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const cartData = {
  userId: '5f5ebe5e7c9e3a2a74a60b27', // Substitua pelo ID do usuário
  items: [
    { productId: '5f5ebe5e7c9e3a2a74a60b28', quantity: 2 }, // Exemplo de item
    // Adicione mais itens conforme necessário
  ],
};

fetch('https://renovalaces.deno.dev/shoppingcart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cartData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todos os Carrinhos de Compras

**Endpoint:** `GET https://renovalaces.deno.dev/shoppingcart`

**Descrição:** Retorna a lista de todos os carrinhos de compras com detalhes de usuário e produtos.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/shoppingcart')
  .then(response => response.json())
  .then(shoppingCarts => console.log(shoppingCarts))
  .catch(error => console.error(error));
```

#### 3. Obter Carrinho de Compras por ID

**Endpoint:** `GET https://renovalaces.deno.dev/shoppingcart/:id`

**Descrição:** Retorna as informações detalhadas de um carrinho de compras com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const cartId = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID do carrinho

fetch(`https://renovalaces.deno.dev/shoppingcart/${cartId}`)
  .then(response => response.json())
  .then(shoppingCart => console.log(shoppingCart))
  .catch(error => console.error(error));
```

#### 4. Deletar Carrinho de Compras por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/shoppingcart/:id`

**Descrição:** Deleta um carrinho de compras com base no ID fornecido, retornando os itens ao estoque.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const cartIdToDelete = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID do carrinho

fetch(`https://renovalaces.deno.dev/shoppingcart/${cartIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Carrinho de Compras por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/shoppingcart/:id`

**Descrição:** Atualiza a quantidade de itens no carrinho de compras com base no ID fornecido.

**Parâmetros de Entrada:**
- `productId` (String): ID do produto a ser atualizado.
- `quantity` (Number): Nova quantidade desejada.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const cartIdToUpdate = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID do carrinho
const updateData = { productId: '5f5ebe5e7c9e3a2a74a60b28', quantity: 3 }; // Substitua pelos dados desejados

fetch(`https://renovalaces.deno.dev/shoppingcart/${cartIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Avaliações

#### 1. Adicionar Avaliação

**Endpoint:** `POST https://renovalaces.deno.dev/ratings`

**Descrição:** Adiciona uma avaliação para um produto feita por um usuário.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário que está fazendo a avaliação.
- `productId` (String): ID do produto sendo avaliado.
- `ratingNumber` (Number): Número da avaliação (1 a 5).
- `ratingComment` (Array): Array de comentários, cada um contendo `body` (String, até 128 caracteres) e `date` (Data, opcional).

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const ratingData = {
  userId: '5f5ebe5e7c9e3a2a74a60b27', // Substitua pelo ID do usuário
  productId: '5f5ebe5e7c9e3a2a74a60b28', // Substitua pelo ID do produto
  ratingNumber: 4,
  ratingComment: [
    { body: 'Ótimo produto!', date: '2023-01-10T12:00:00Z' }, // Exemplo de comentário
    // Adicione mais comentários conforme necessário
  ],
};

fetch('https://renovalaces.deno.dev/ratings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(ratingData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todas as Avaliações

**Endpoint:** `GET https://renovalaces.deno.dev/ratings`

**Descrição:** Retorna a lista de todas as avaliações com detalhes de usuário e produto.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/ratings')
  .then(response => response.json())
  .then(ratings => console.log(ratings))
  .catch(error => console.error(error));
```

#### 3. Obter Avaliação por ID

**Endpoint:** `GET https://renovalaces.deno.dev/ratings/:id`

**Descrição:** Retorna as informações detalhadas de uma avaliação com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const ratingId = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID da avaliação

fetch(`https://renovalaces.deno.dev/ratings/${ratingId}`)
  .then(response => response.json())
  .then(rating => console.log(rating))
  .catch(error => console.error(error));
```

#### 4. Deletar Avaliação por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/ratings/:id`

**Descrição:** Deleta uma avaliação com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const ratingIdToDelete = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID da avaliação

fetch(`https://renovalaces.deno.dev/ratings/${ratingIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Avaliação por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/ratings/:id`

**Descrição:** Atualiza uma avaliação com base no ID fornecido.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário que está fazendo a avaliação.
- `productId` (String): ID do produto sendo avaliado.
- `ratingNumber` (Number): Novo número da avaliação (1 a 5).
- `ratingComment` (Array): Novo array de comentários, cada um contendo `body` (String, até 128 caracteres) e `date` (Data, opcional).

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const ratingIdToUpdate = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID da avaliação
const updateData = {
  userId: '5f5ebe5e7c9e3a2a74a60b27', // Substitua pelo novo ID do usuário
  productId: '5f5ebe5e7c9e3a2a74a60b28', // Substitua pelo novo ID do produto
  ratingNumber: 5,
  ratingComment: [
    { body: 'Excelente!', date: '2023-01-15T14:30:00Z' }, // Novo comentário
    // Adicione mais comentários conforme necessário
  ],
};

fetch(`https://renovalaces.deno.dev/ratings/${ratingIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Produtos

#### 1. Criar Produto

**Endpoint:** `POST https://renovalaces.deno.dev/products`

**Descrição:** Cria um novo produto.

**Parâmetros de Entrada:**
- `productImages` (Array): Lista de URLs das imagens do produto.
- `productPrice` (Number): Preço do produto.
- `productCategory` (String): Categoria do produto.
- `productSize` (String): Tamanho do produto.
- `productStock` (Number): Estoque disponível do produto.
- `productModel` (String): Modelo do produto.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const productData = {
  productImages: ['url1', 'url2'], // Substitua pelos URLs reais das imagens
  productPrice: 50.00,
  productCategory: 'Eletrônicos', // Substitua pela categoria real
  productSize: 'M',
  productStock: 100,
  productModel: 'Modelo A',
};

fetch('https://renovalaces.deno.dev/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(productData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todos os Produtos

**Endpoint:** `GET https://renovalaces.deno.dev/products`

**Descrição:** Retorna a lista de todos os produtos.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/products')
  .then(response => response.json())
  .then(products => console.log(products))
  .catch(error => console.error(error));
```

#### 3. Obter Produto por ID

**Endpoint:** `GET https://renovalaces.deno.dev/products/:id`

**Descrição:** Retorna as informações detalhadas de um produto com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const productId = '5f5ebe5e7c9e3a2a74a60b28'; // Substitua pelo ID do produto

fetch(`https://renovalaces.deno.dev/products/${productId}`)
  .then(response => response.json())
  .then(product => console.log(product))
  .catch(error => console.error(error));
```

#### 4. Deletar Produto por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/products/:id`

**Descrição:** Deleta um produto com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const productIdToDelete = '5f5ebe5e7c9e3a2a74a60b28'; // Substitua pelo ID do produto

fetch(`https://renovalaces.deno.dev/products/${productIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Produto por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/products/:id`

**Descrição:** Atualiza as informações de um produto com base no ID fornecido.

**Parâmetros de Entrada:**
- `productImages` (Array): Lista atualizada de URLs das imagens do produto.
- `productPrice` (Number): Novo preço do produto.
- `productCategory` (String): Nova categoria do produto.
- `productSize` (String): Novo tamanho do produto.
- `productStock` (Number): Novo estoque disponível do produto.
- `productModel` (String): Novo modelo do produto.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const productIdToUpdate = '5f5ebe5e7c9e3a2a74a60b28'; // Substitua pelo ID do produto
const updateData = {
  productImages: ['newUrl1', 'newUrl2'], // Substitua pelos novos URLs reais das imagens
  productPrice: 60.00,
  productCategory: 'Moda', // Substitua pela nova categoria real
  productSize: 'L',
  productStock: 120,
  productModel: 'Modelo B',
};

fetch(`https://renovalaces.deno.dev/products/${productIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Status de Devolução

#### 1. Criar Status de Devolução

**Endpoint:** `POST https://renovalaces.deno.dev/devolutionstatus`

**Descrição:** Cria um novo status de devolução.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário associado à devolução.
- `productId` (String): ID do produto associado à devolução.
- `devolutionstatus` (String, opcional): Status da devolução (opcional, padrão: 'Requested').
- `devolutionReason` (String): Motivo da devolução.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const devolutionData = {
  userId: '5f5ebe5e7c9e3a2a74a60b29', // Substitua pelo ID do usuário
  productId: '5f5ebe5e7c9e3a2a74a60b28', // Substitua pelo ID do produto
  devolutionReason: 'Produto com defeito',
};

fetch('https://renovalaces.deno.dev/devolutionstatus', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(devolutionData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todos os Status de Devolução

**Endpoint:** `GET https://renovalaces.deno.dev/devolutionstatus`

**Descrição:** Retorna a lista de todos os status de devolução.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/devolutionstatus')
  .then(response => response.json())
  .then(devolutionstatusList => console.log(devolutionstatusList))
  .catch(error => console.error(error));
```

#### 3. Obter Status de Devolução por ID

**Endpoint:** `GET https://renovalaces.deno.dev/devolutionstatus/:id`

**Descrição:** Retorna as informações detalhadas de um status de devolução com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const devolutionstatusId = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de devolução

fetch(`https://renovalaces.deno.dev/devolutionstatus/${devolutionstatusId}`)
  .then(response => response.json())
  .then(devolutionstatus => console.log(devolutionstatus))
  .catch(error => console.error(error));
```

#### 4. Deletar Status de Devolução por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/devolutionstatus/:id`

**Descrição:** Deleta um status de devolução com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const devolutionstatusIdToDelete = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de devolução

fetch(`https://renovalaces.deno.dev/devolutionstatus/${devolutionstatusIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Status de Devolução por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/devolutionstatus/:id`

**Descrição:** Atualiza as informações de um status de devolução com base no ID fornecido.

**Parâmetros de Entrada:**
- `userId` (String): Novo ID do usuário associado à devolução.
- `productId` (String): Novo ID do produto associado à devolução.
- `devolutionstatus` (String): Novo status da devolução.
- `devolutionReason` (String): Novo motivo da devolução.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const devolutionstatusIdToUpdate = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de devolução
const updateData = {
  userId: 'newUserId', // Substitua pelo novo ID do usuário
  productId: 'newProductId', // Substitua pelo novo ID do produto
  devolutionstatus: 'Approved', // Substitua pelo novo status real da devolução
  devolutionReason: 'Produto errado',
};

fetch(`https://renovalaces.deno.dev/devolutionstatus/${devolutionstatusIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Status de Entrega

#### 1. Criar Status de Entrega

**Endpoint:** `POST https://renovalaces.deno.dev/deliverystatus`

**Descrição:** Cria um novo status de entrega.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário associado à entrega.
- `productId` (String): ID do produto associado à entrega.
- `deliveryStatus` (String, opcional): Status da entrega (opcional, padrão: 'Processing').
- `deliveryTrackingNumber` (Number, opcional): Número de rastreamento da entrega.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const deliveryStatusData = {
  userId: '5f5ebe5e7c9e3a2a74a60b29', // Substitua pelo ID do usuário
  productId: '5f5ebe5e7c9e3a2a74a60b28', // Substitua pelo ID do produto
  deliveryTrackingNumber: 123456, // Substitua pelo número real de rastreamento (opcional)
};

fetch('https://renovalaces.deno.dev/deliverystatus', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(deliveryStatusData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todos os Status de Entrega

**Endpoint:** `GET https://renovalaces.deno.dev/deliverystatus`

**Descrição:** Retorna a lista de todos os status de entrega.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/deliverystatus')
  .then(response => response.json())
  .then(deliveryStatusList => console.log(deliveryStatusList))
  .catch(error => console.error(error));
```

#### 3. Obter Status de Entrega por ID

**Endpoint:** `GET https://renovalaces.deno.dev/deliverystatus/:id`

**Descrição:** Retorna as informações detalhadas de um status de entrega com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const deliveryStatusId = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de entrega

fetch(`https://renovalaces.deno.dev/deliverystatus/${deliveryStatusId}`)
  .then(response => response.json())
  .then(deliveryStatus => console.log(deliveryStatus))
  .catch(error => console.error(error));
```

#### 4. Deletar Status de Entrega por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/deliverystatus/:id`

**Descrição:** Deleta um status de entrega com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const deliveryStatusIdToDelete = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de entrega

fetch(`https://renovalaces.deno.dev/deliverystatus/${deliveryStatusIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Status de Entrega por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/deliverystatus/:id`

**Descrição:** Atualiza as informações de um status de entrega com base no ID fornecido.

**Parâmetros de Entrada:**
- `userId` (String): Novo ID do usuário associado à entrega.
- `productId` (String): Novo ID do produto associado à entrega.
- `deliveryStatus` (String): Novo status da entrega.
- `deliveryTrackingNumber` (Number): Novo número de rastreamento da entrega.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const deliveryStatusIdToUpdate = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID do status de entrega
const updateData = {
  userId: 'newUserId', // Substitua pelo novo ID do usuário
  productId: 'newProductId', // Substitua pelo novo ID do produto
  deliveryStatus: 'Shipped', // Substitua pelo novo status real da entrega
  deliveryTrackingNumber: 654321, // Substitua pelo novo número real de rastreamento
};

fetch(`https://renovalaces.deno.dev/deliverystatus/${deliveryStatusIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Recurso: Preferências do Cliente

#### 1. Adicionar às Preferências do Cliente

**Endpoint:** `POST https://renovalaces.deno.dev/clientpreferences`

**Descrição:** Adiciona um novo conjunto de preferências para um cliente.

**Parâmetros de Entrada:**
- `userId` (String): ID do usuário associado às preferências.
- `clientPreferencesItems` (Array): Lista de itens de preferências do cliente.
  - `style` (String): Estilo da preferência.
  - `color` (String): Cor da preferência.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const clientPreferencesData = {
  userId: '5f5ebe5e7c9e3a2a74a60b29', // Substitua pelo ID do usuário
  clientPreferencesItems: [
    { style: 'Casual', color: 'Blue' },
    { style: 'Formal', color: 'Black' },
  ],
};

fetch('https://renovalaces.deno.dev/clientpreferences', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(clientPreferencesData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 2. Obter Todas as Preferências do Cliente

**Endpoint:** `GET https://renovalaces.deno.dev/clientpreferences`

**Descrição:** Retorna a lista de todas as preferências dos clientes.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
fetch('https://renovalaces.deno.dev/clientpreferences')
  .then(response => response.json())
  .then(clientPreferencesList => console.log(clientPreferencesList))
  .catch(error => console.error(error));
```

#### 3. Obter Preferências do Cliente por ID

**Endpoint:** `GET https://renovalaces.deno.dev/clientpreferences/:id`

**Descrição:** Retorna as informações detalhadas das preferências de um cliente com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const clientPreferencesId = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID das preferências do cliente

fetch(`https://renovalaces.deno.dev/clientpreferences/${clientPreferencesId}`)
  .then(response => response.json())
  .then(clientPreferences => console.log(clientPreferences))
  .catch(error => console.error(error));
```

#### 4. Deletar Preferências do Cliente por ID

**Endpoint:** `DELETE https://renovalaces.deno.dev/clientpreferences/:id`

**Descrição:** Deleta as preferências de um cliente com base no ID fornecido.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const clientPreferencesIdToDelete = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID das preferências do cliente

fetch(`https://renovalaces.deno.dev/clientpreferences/${clientPreferencesIdToDelete}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

#### 5. Atualizar Preferências do Cliente por ID

**Endpoint:** `PUT https://renovalaces.deno.dev/clientpreferences/:id`

**Descrição:** Atualiza as informações das preferências de um cliente com base no ID fornecido.

**Parâmetros de Entrada:**
- `userId` (String): Novo ID do usuário associado às preferências.
- `clientPreferencesItems` (Array): Nova lista de itens de preferências do cliente.
  - `style` (String): Novo estilo da preferência.
  - `color` (String): Nova cor da preferência.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const clientPreferencesIdToUpdate = '5f5ebe5e7c9e3a2a74a60b2a'; // Substitua pelo ID das preferências do cliente
const updateData = {
  userId: 'newUserId', // Substitua pelo novo ID do usuário
  clientPreferencesItems: [
    { style: 'NewStyle', color: 'Green' },
    { style: 'UpdatedStyle', color: 'Red' },
  ],
};

fetch(`https://renovalaces.deno.dev/clientpreferences/${clientPreferencesIdToUpdate}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Observações:
- Certifique-se de substituir os placeholders (`:id`, etc.) pelos valores reais ao fazer as chamadas à API.
- Os exemplos de uso em JavaScript utilizam a Fetch API, você pode adaptá-los conforme necessário para o ambiente ou biblioteca que estiver utilizando.
- Esta documentação é uma representação simplificada e pode ser expandida conforme necessário para incluir detalhes adicionais sobre os parâmetros, códigos de resposta, etc
  
### 1. Criar Usuário

**Endpoint:** `POST https://renovalaces.deno.dev/singup`

**Descrição:** Cria um novo usuário.

**Parâmetros de Entrada:**
- `firstName` (String): Nome do usuário.
- `lastName` (String): Sobrenome do usuário.
- `age` (Number): Idade do usuário.
- `sex` (String): Gênero do usuário.
- `email` (String): E-mail do usuário.
- `password` (String): Senha do usuário.
- `cpf` (String): CPF do usuário.
- `address` (String): Endereço do usuário.
- `cep` (String): CEP do usuário.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const userData = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  sex: 'Male',
  email: 'john.doe@example.com',
  password: 'password123',
  cpf: '123.456.789-00',
  address: '123 Main St',
  cep: '12345-678',
};

fetch('https://renovalaces.deno.dev/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### 2. Login do Usuário por E-mail e Senha

**Endpoint:** `POST https://renovalaces.deno.dev/login`

**Descrição:** Autentica um usuário com base no e-mail e senha fornecidos.

**Parâmetros de Entrada:**
- `email` (String): E-mail do usuário.
- `password` (String): Senha do usuário.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const loginData = {
  email: 'john.doe@example.com',
  password: 'password123',
};

fetch('https://renovalaces.deno.dev/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(loginData),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### 3. Logout do Usuário por ID

**Endpoint:** `POST https://renovalaces.deno.dev/logout`

**Descrição:** Desconecta um usuário com base no ID fornecido.

**Parâmetros de Entrada:**
- `id` (String): ID do usuário.

**Exemplo de Uso (JavaScript com Fetch API):**
```javascript
const userId = '5f5ebe5e7c9e3a2a74a60b29'; // Substitua pelo ID do usuário

fetch('https://renovalaces.deno.dev/logout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ id: userId }),
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));
```