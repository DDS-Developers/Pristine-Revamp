import Link from "next/link";

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-lg">
						<div className="font-size-14 fw-bold">
							Copyright &copy; Pristine8.6+ 2022. All Rights
							Reserved.
						</div>
						<div className="font-size-14 fw-bold">
							PT. Super Wahana Tehno
						</div>
					</div>
					<div className="col-lg d-flex align-items-center justify-content-center">
						<a href="#" target="_blank">
							<img
								src="/assets/images/instagram.png"
								alt="Instagram"
							/>
						</a>
						<a href="#" target="_blank" className="mx-4">
							<img
								src="/assets/images/facebook.png"
								alt="Facebook"
							/>
						</a>
						<a href="#" target="_blank">
							<img
								src="/assets/images/whatsapp.png"
								alt="Whatsapp"
							/>
						</a>
					</div>
					<div className="col-lg d-flex justify-content-end align-items-center">
						<Link href="#">
							<a className="me-4 font-size-14 fw-bold">
								Hubungi Kami
							</a>
						</Link>
						<Link href="/syarat-dan-ketentuan">
							<a className="font-size-14 fw-bold">
								Syarat &amp; Ketentuan
							</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
