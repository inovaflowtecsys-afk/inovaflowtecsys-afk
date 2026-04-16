# Checklist de Homologacao

## 1. Acesso e Autenticacao

- [ ] Login com conta ativa de administrador funciona
- [ ] Login com conta ativa de usuario funciona
- [ ] Login com senha invalida mostra erro apropriado
- [ ] Login com usuario inativo bloqueia acesso
- [ ] Mensagem para usuario inativo orienta procurar administrador

## 2. Cadastro de Profissional

- [ ] Formulario exibe aviso de cadastro exclusivo do administrador
- [ ] Campo de status permite selecionar Ativo e Inativo
- [ ] Novo profissional salvo com status definido
- [ ] Tabela de profissionais exibe coluna Status corretamente

## 3. Foto de Profissional em Base64

- [ ] Upload de imagem valida tipo de arquivo
- [ ] Upload bloqueia arquivo maior que 2MB
- [ ] Preview da foto aparece apos upload
- [ ] Remocao da foto funciona
- [ ] Foto aparece no avatar do profissional na lista

## 4. Persistencia e Dados

- [ ] Registros iniciais de administrador e usuario existem na base mock
- [ ] Status permanece correto apos recarregar a pagina
- [ ] Foto Base64 permanece apos recarregar a pagina

## 5. Visual e Consistencia

- [ ] Fontes antes verdes foram ajustadas para tons de cinza
- [ ] Botoes primarios estao em paleta bege padrao
- [ ] Layout permanece consistente em desktop
- [ ] Layout permanece consistente em mobile

## 6. Build e Qualidade

- [ ] npm run lint sem erros
- [ ] npm run build sem erros

## Contas demo para teste

- Administrador: admin@clinica.com
- Usuario: usuario@clinica.com
- Senha demo: 123456
