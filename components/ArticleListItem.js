// Dependencies
import Link from "next/link";

function ArticleListItem() {
	return (
		<div className="col-lg-4 mb-5">
			<div className="rounded-20 p-4 shadow d-grid gap-3">
				<img
					src="/assets/images/article-placeholder.png"
					alt="Article Placeholder"
					className="img-fluid rounded"
				/>
				<div className="d-grid gap-1">
					<div
						className="font-size-24 color-dark-grey"
						style={{ lineHeight: "30px" }}
					>
						Ayo ikuti #LebihBaikdenganPristine Reels Challenge
						bersama Pristine8.6+
					</div>
					<div className="font-size-14 color-dark-grey">
						30-03-2022
					</div>
				</div>
				<Link href="#">
					<a className="font-size-16 color-pristine-green">
						Baca Artikel
					</a>
				</Link>
			</div>
		</div>
	);
}

export default ArticleListItem;
