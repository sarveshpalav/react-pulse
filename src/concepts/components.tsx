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

const functionComponentExample = `import { useState } from "react";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Count: {count}
    </button>
  );
}`;

const classComponentExample = `import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount ?? 0 };
  }

  render() {
    return (
      <button onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>
        Count: {this.state.count}
      </button>
    );
  }
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
				<div className="mb-4 mt-4">
					<h2 className="fw-bold mb-3">Function vs. Class Components</h2>
					<div className="table-responsive">
						<table className="table table-bordered align-middle mb-0">
							<thead className="table-dark">
								<tr>
									<th scope="col">Feature</th>
									<th scope="col">Function Components</th>
									<th scope="col">Class Components</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Syntax</td>
									<td>Plain JavaScript function returning JSX</td>
									<td>ES6 classes that extend <code>React.Component</code>with a <code>render()</code> method</td>
								</tr>
								<tr>
									<td>State</td>
									<td>Managed with Hooks such as <code>useState</code> and <code>useReducer</code></td>
									<td>Managed with <code>this.state</code> and <code>this.setState</code></td>
								</tr>
								<tr>
									<td>Side Effects and Lifecycle</td>
									<td>Handled with Hooks such as <code>useEffect</code> and <code>useLayoutEffect</code></td>
									<td>Uses lifecycle methods such as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code></td>
								</tr>
								<tr>
									<td>Error Boundaries</td>
									<td>Not supported; use class components for error boundaries</td>
									<td>Supported; implement <code>componentDidCatch</code> and <code>getDerivedStateFromError</code></td>
								</tr>
								<tr>
									<td>Performance</td>
									<td>Generally better performance with memoization and hooks</td>
									<td>Can be less performant without proper optimization</td>
								</tr>
								<tr>
									<td>Current Standard</td>
									<td>Recommended default for new components</td>
									<td>Mostly legacy; still used for error boundaries</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="card bg-dark border-0 shadow-sm">
					<div className="card-header text-light fw-semibold">Function Component Example</div>
					<pre className="mb-0 p-3 text-light overflow-auto">
						<code>{functionComponentExample}</code>
					</pre>
				</div>
			
				<div className="card bg-dark border-0 shadow-sm mt-3">
					<div className="card-header text-light fw-semibold">Class Component Example</div>
					<pre className="mb-0 p-3 text-light overflow-auto">
						<code>{classComponentExample}</code>
					</pre>
				</div>
			</Container>
		</main>
	);
};

export default Components;