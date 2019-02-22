import React from 'react'
import { IconStyles } from './IconButton.styl'
import { Icon } from '../Icon/Icon'

const IconButton = props => (
	<IconStyles
		spotify={props.spotify}
		iplayer={props.iplayer}
		selected={props.isLoggedIn}
		type="button"
		aria-label={props.ariaLabel}
	>
		<Icon>
			<use xlinkHref={`#${props.iconName}`} />
		</Icon>
	</IconStyles>
)

export default IconButton
