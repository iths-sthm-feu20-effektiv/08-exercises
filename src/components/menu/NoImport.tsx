const code = "import { useState } from 'react'"

const NoImport = () => (
	<div>
		<p> TypeScript error: Cannot find name 'useState' </p>

		<p> Remember to import useState! </p>

		<p> <code> import {"{ useState }"} from 'react' </code> </p>
		<p> <code> {code} </code> </p>
	</div>
)

export default NoImport
