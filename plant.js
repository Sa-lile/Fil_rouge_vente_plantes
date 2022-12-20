function Banner() {
	const title = 'La maison jungle';
	return <h1>{title}</h1>;
}

function Cart() {
	const MonseraPrice = 8;
	const LierrePrice = 10;
	const FlowerPrice = 15;
	return (
		<div>
			<h2>Panier</h2>
			<ul>
				<li>Monsera : {MonseraPrice} €</li>
				<li>Lierre : {LierrePrice} €</li>
				<li>FlowerPrice : {FlowerPrice} €</li>
			</ul>
			Total : {MonseraPrice} + {LierrePrice} + {FlowerPrice} €
		</div>
	);
}

ReactDOM.render(
	<React.Fragment>
		<Banner />
		<Cart />
	</React.Fragment>,
	document.getElementById('root')
);
