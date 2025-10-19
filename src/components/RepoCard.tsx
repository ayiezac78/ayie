import type { LucideProps } from "lucide-react";
import { Github } from "lucide-react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

export default function RepoCard({
	icon: Icon,
	title,
	domain,
	repo,
	description,
	languages,
}: {
	icon: React.FC<LucideProps>;
	domain: string | undefined;
	title: string;
	repo: string | undefined;
	description: string;
	languages: string[];
}) {
	return (
		<Card className="h-full">
			<CardContent className="flex justify-between">
				<Icon size={32} />
				<CardAction>
					{repo && (
						<a rel="noopener noreferrer" href={repo}>
							<Github size={18} />
						</a>
					)}
					{/* <a rel="noopener noreferrer" href={repo}>
						<Github size={18} />
					</a> */}
				</CardAction>
			</CardContent>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardFooter className="items-start flex-col border-t space-y-1.5">
				{domain && (
					<small className="text-muted-foreground flex-1 min-w-fit">
						<a
							rel="noopener noreferrer"
							className="hover:underline"
							href={domain}
						>
							{domain}
						</a>
					</small>
				)}
				<CardDescription className="text-primary-emphasis text-sm">
					{description}
				</CardDescription>
				<CardDescription className="text-primary-emphasis text-xs text-muted-foreground">
					{languages.join(", ")}
				</CardDescription>
			</CardFooter>
		</Card>
	);
}
