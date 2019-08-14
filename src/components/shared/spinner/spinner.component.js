import React from 'react'
import 'components/shared/spinner/spinner.styles.scss'

const Spinner = () => (
	<div className='center'>
		<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
)

export default Spinner