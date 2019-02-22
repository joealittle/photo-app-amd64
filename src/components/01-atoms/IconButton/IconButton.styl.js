import styled, { css } from 'styled-components'

export const IconStyles = styled.button`
  appearance: none;
  background: white;
  border: 0;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  margin: 0 5px;
  padding: 15px 10px;
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: color .2s ease-out;

  &:hover:after,
  &:focus:after {
    transform: translateY(0);
  }

  &:after {
    background-color: black;
    display: block;
    content: '';
    height: 5px;
    transform: translateY(5px);
    transition: transform .2s ease-in;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  ${props =>
		props.selected &&
		css`
			&:after {
				transform: translateY(100%);
			}
		`}

  ${props =>
		props.spotify &&
		css`
			&:hover,
			&:focus {
				color: #1db954;

				&:after {
					background-color: #1db954;
				}
			}
		`}

  ${props =>
		props.iplayer &&
		css`
			&:hover,
			&:focus {
				color: #f54997;

				&:after {
					background-color: #f54997;
				}
			}
		`}
`
