import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

export default function RepoCard() {
	return (
		<Card>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
			</CardHeader>
			<CardFooter className="items-start flex-col">
				<small>example.com</small>
				<CardDescription>Card Description</CardDescription>
			</CardFooter>
		</Card>
	);
}
