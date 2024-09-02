import { IoSettings } from "react-icons/io5"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export type AppBarProps = unknown
export const AppBar = (p: AppBarProps) => {
	return (
		<div className="flex justify-between items-center sticky top-0 bg-white pt-2 pb-2 pl-6 pr-16 border-b border-coolGray">
			{/* title */}
			<div className="flex items-center">
				<Avatar>
					<AvatarImage src="public/function.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="font-semibold font-mono">Your JavaScript Function Maker</p>
			</div>

			{/* toolbar */}
			<Button size={'icon'} variant={'outline'}>
				<IoSettings />
			</Button>
		</div>
	)
}
