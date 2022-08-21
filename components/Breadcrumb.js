// Dependencies
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import classNames from "classnames";

function BreadcrumbComponent({ breadcrumb }) {
	const router = useRouter();

	const handleBreadcrumbClick = (url) => {
		router.push(url);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg">
					<Breadcrumb className="breadcrumb">
						{breadcrumb.map((row, i) => (
							<Breadcrumb.Item
								href={row.url}
								active={row.current}
								className={classNames({
									"color-pristine-green": !row.current,
									"fw-bold": !row.current,
									"color-dark-grey": row.current,
								})}
								onClick={() => handleBreadcrumbClick(row.url)}
								key={i}
							>
								{row.label}
							</Breadcrumb.Item>
						))}
					</Breadcrumb>
				</div>
			</div>
		</div>
	);
}

export default BreadcrumbComponent;
