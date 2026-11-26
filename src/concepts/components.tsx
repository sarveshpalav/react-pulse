import { Button, Container } from "react-bootstrap";

const componentPoints = [
	{
		title: "Function components (modern standard)",
		text: "Plain JavaScript functions that take props (read-only inputs passed from a parent component) and return JSX. Hooks such as useState and useEffect add state and side effects.",
	},
	{ title: "JSX Markup", text: "Looks like HTML inside JavaScript, letting you embed dynamic expressions in curly braces and render child components like custom tags (<ProductCard />)." },
	{ title: "One-way data flow", text: "Parent components pass data down to child components via props; child components notify parents using callback functions or state updates." },
  { title: "Re-rendering", text: "When a component's state or received props change, React re-runs the component function to calculate UI updates and sync the DOM." }
];

const exampleCode = `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}`;

interface ComponentsProps {
  onBack: () => void;
}

const Components = ({ onBack }: ComponentsProps) => {
	return (
		<main className="py-5">
			<Container>
				<Button variant="outline-secondary" className="mb-4" onClick={onBack}>
					← Back
				</Button>

				<div className="mb-4">
					<h1 className="fw-bold">Components</h1>
					<p className="text-secondary mb-0">
						React components are independent, reusable pieces of UI code that
						accept inputs, manage internal logic or state, and return markup
						(usually JSX) describing what should appear on screen. Instead of
						building a whole page as one giant block of HTML and scripts, you
						assemble an interface from smaller components like a Navbar, Hero, or
						Features card.
					</p>
				</div>

				<ul className="list-group list-group-flush mb-4">
					{componentPoints.map((point, index) => (
						<li key={index} className="list-group-item px-0">
							{point.title && <strong>{point.title}: </strong>}
							{point.text}
						</li>
					))}
				</ul>

				<div className="card bg-dark border-0 shadow-sm">
					<div className="card-header text-light fw-semibold">Example</div>
					<pre className="mb-0 p-3 text-light overflow-auto">
						<code>{exampleCode}</code>
					</pre>
				</div>
			</Container>
		</main>
	);
};

export default Components;