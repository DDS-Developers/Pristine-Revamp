function PageHeader({ title }) {
	return (
		<div className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-lg">
						<h1 className="font-size-48 fw-bold mb-0">{title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PageHeader;
