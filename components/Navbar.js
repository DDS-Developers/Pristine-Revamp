import Link from "next/link";

function Navbar() {
	return (
		<div className="py-3 shadow-sm">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-1">
						<Link href="/">
							<a>
								<img
									src="/assets/images/pristine-8-6-logo.png"
									alt="Pristine 8.6+ Logo"
									style={{
										maxWidth: "auto",
										maxHeight: "50px",
									}}
								/>
							</a>
						</Link>
					</div>
					<div className="col-lg-8 d-flex justify-content-end">
						<div className="me-4 d-flex align-items-center">
							<Link href="#">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									TENTANG PH8.6+
								</a>
							</Link>
						</div>
						<div className="me-4 d-flex align-items-center">
							<Link href="#">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									ENSKILOPH
								</a>
							</Link>
						</div>
						<div className="me-4 d-flex align-items-center">
							<Link href="/artikel">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									ARTIKEL
								</a>
							</Link>
						</div>
						<div className="me-4 d-flex align-items-center">
							<Link href="#">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									FAQ
								</a>
							</Link>
						</div>
						<div className="me-4 d-flex align-items-center">
							<Link href="/hubungi-kami">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									HUBUNGI KAMI
								</a>
							</Link>
						</div>
						<div className="me-4 d-flex align-items-center">
							<Link href="#">
								<a className="font-size-12 bg-pristine-green rounded-pill fw-bold px-3 py-2 h-40px d-flex align-items-center justify-content-center">
									BELI PRISTINE 8.6+
								</a>
							</Link>
						</div>
						<div className="d-flex align-items-center">
							<Link href="/daftar">
								<a className="color-pristine-green font-size-12 fw-bold text-center">
									MASUK / DAFTAR
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
