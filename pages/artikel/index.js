// Components
import Master from "~/components/Master";
import PageHeader from "~/components/PageHeader";
import Breadcrumb from "~/components/Breadcrumb";
import ArticleListItem from "~/components/ArticleListItem";

// Constants
import { artikel } from "~/constants/breadcrumbs";

// Dependencies
import Link from "next/link";

function Index() {
	return (
		<Master>
			<PageHeader title="Artikel" />
			<Breadcrumb breadcrumb={artikel} />
			<div className="container" style={{ marginBottom: "200px" }}>
				<div className="row">
					<ArticleListItem />
					<ArticleListItem />
					<ArticleListItem />
					<ArticleListItem />
					<ArticleListItem />
					<ArticleListItem />
				</div>
			</div>
		</Master>
	);
}

export default Index;
