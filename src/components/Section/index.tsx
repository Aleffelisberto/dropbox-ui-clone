import { Container, HeaderWrapper, Header, DropboxLogo, Content } from './styles'

interface SectionProps {
  variant: 'blue' | 'beige' | 'white' | 'black'
  title: string
  description: string
}

export function Section({ variant, title, description }: SectionProps) {
  const buttonTextVariant = Math.round(Math.random())

  function handleToggleMenu() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <Container className={ variant }>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>
          <button onClick={ handleToggleMenu }>{ buttonTextVariant ? 'Acessar' : 'Interagir' }</button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </Content>
    </Container>
  )
}