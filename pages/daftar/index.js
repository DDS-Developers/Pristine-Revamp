// Components
import Master from "~/components/Master";

// Dependencies
import Link from "next/link";
import { useForm } from "react-hook-form";

function Index() {
	const { handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Master>
			<div
				className="container"
				style={{ marginTop: "135px", marginBottom: "210px" }}
			>
				<div className="row">
					<div className="col-lg align-self-center">
						<img
							src="/assets/images/register.png"
							alt="Register"
							className="img-fluid mb-5"
						/>
						<div className="row">
							<div className="col-lg-8">
								<div className="font-size-24 color-pristine-green-dark fw-bold mb-2">
									Benefit 1 Lorem Ipsum Dolor sit
								</div>
								<div className="font-size-18 color-grey fw-semi-bold">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Aliquam semper neque, urna
									eu natoque volutpat ipsum dapibus sit. Massa
									consectetur vitae velit vel tincidunt.
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5 shadow rounded-20 p-5 d-grid gap-4">
						<div className="font-size-26 color-pristine-green fw-bold text-center">
							Daftar
						</div>
						<div className="font-size-16 fw-bold color-dark-grey text-center">
							Masuk untuk menikmati keuntungan Pristine8.6
						</div>
						<div className="font-size-16 text-center color-dark-grey">
							Sudah punya akun?{" "}
							<span>
								<Link href="/login">
									<a className="color-pristine-green fw-semi-bold">
										Login di Sini
									</a>
								</Link>
							</span>
						</div>
						<button className="border-facebook-blue p-2 d-flex align-items-center justify-content-center rounded-20 bg-white">
							<img
								src="/assets/images/facebook-blue.png"
								alt="Facebook Blue"
								className="icons"
							/>
							<span className="color-facebook-blue ms-2">
								Daftar menggunakan akun Facebook
							</span>
						</button>
						<button className="border-google-orange p-2 d-flex align-items-center justify-content-center rounded-20 bg-white">
							<img
								src="/assets/images/google.png"
								alt="Google"
								className="icons"
							/>
							<span className="color-google-orange ms-2">
								Daftar menggunakan akun Google
							</span>
						</button>
						<div className="d-flex align-items-center">
							<div className="flex-fill border-light-grey" />
							<div className="font-size-12 color-light-grey mx-3">
								ATAU
							</div>
							<div className="flex-fill border-light-grey" />
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="d-grid gap-4"
						>
							<div className="d-grid gap-2">
								<div className="font-size-13 color-dark-grey">
									Nama Lengkap
								</div>
								<input
									type="text"
									className="form-control rounded-20"
									defaultValue=""
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 color-dark-grey">
									Email
								</div>
								<input
									type="email"
									className="form-control rounded-20"
									defaultValue=""
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 color-dark-grey">
									No. Handphone
								</div>
								<input
									type="text"
									className="form-control rounded-20"
									defaultValue=""
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 color-dark-grey">
									Kata Sandi
								</div>
								<input
									type="password"
									className="form-control rounded-20"
									defaultValue=""
								/>
							</div>
							<button
								type="submit"
								className="rounded-20 p-2 text-center bg-pristine-green font-16 fw-bold color-white border-pristine-green"
							>
								Daftar
							</button>
						</form>
					</div>
				</div>
			</div>
		</Master>
	);
}

export default Index;
