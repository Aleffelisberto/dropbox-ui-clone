import { FaDropbox } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  width: 100%;

  min-height: 61px;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quartenary);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    border: none;
    background: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    > h1 {
      display: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }

  > .subtitle {
    font: 12px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;

    margin-top: 18px;
  }

  > button {
    margin-top: 18px;

    padding: 13px 18px;
    font-size: 16px;
    background-color: var(--color-blue);
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
      font-size: 12px;
      opacity: 0.75;
      margin-top: 7px;
    }
`