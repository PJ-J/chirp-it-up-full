import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	// const [greeting, setGreeting] = useState<string>('');
	const [chirps, setChirps] = useState<any>([]);

	// useEffect(() => {
	// 	fetch('/api/chirps')
	// 		.then(res => res.json())
	// 		.then(allChirps => setChirps(allChirps))
	// }, []);

	useEffect(() => {
	async function getChirps() {
		try {
			const res = await fetch('/api/chirps');
			const chirpData = await res.json();
			setChirps(chirpData);
		} catch (error) {
			console.log(error);
		}
	} getChirps();
}, []);


	return (
		<main className='container'>
			<section className='row justify-content-center mt-5'>
				{chirps.map(chirp => (
					<div className='col-md-6' key={chirp.id}>
						<div className='card shadow my-2'>
							<div className='card-body'>
								<h4 className='card-title'>{chirp.userid}</h4>

								<p className="card-text">{chirp.content}</p>
								{/* <Link to={`/chirps/:id`} className='btn btn-primary'>More details</Link> */}
							</div>
						</div>
					</div>
				))}
			</section>
		</main>

	)
}




// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

interface AppProps { }

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
