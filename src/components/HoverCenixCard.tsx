import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../components/ui/hover-card.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.tsx";

export default function HoverCardCenix() {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<a
					href="https://cenixweb.com/"
					className="hover:text-primary flex gap-1 items-center transition border-b-2 hover:border-b-muted-foreground font-medium"
					target="_blank"
					rel="nofollow noreferrer"
				>
					@cenix
				</a>
			</HoverCardTrigger>
			<HoverCardContent className="w-full">
				<div className="flex gap-4">
					<Avatar>
						<AvatarImage src="https://cenixweb.com/favicon.ico" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="font-semibold">Fullstack Developer</h4>
						<small className="text-muted-foreground">Joined June 2023</small>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
