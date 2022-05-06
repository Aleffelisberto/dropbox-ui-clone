import { Container, Navigation, DropboxLogo, Form } from "./styles"
import { GrClose } from 'react-icons/gr'

export function MenuForm() {
  function handleToggleMenu() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button
          className="action--close"
          onClick={ handleToggleMenu }
        >
          <GrClose></GrClose>
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>

        <span className="terms">
          Esta página está sujeita a Política de privacidade e aos Termos de service.
        </span>
      </Form>
    </Container>
  )
}