// Components
import Master from "~/components/Master";
import PageHeader from "~/components/PageHeader";
import Breadcrumb from "~/components/Breadcrumb";

// Constants
import { hubungiKami } from "~/constants/breadcrumbs";
import { useForm } from "react-hook-form";

function Index() {
	const { handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Master>
			<PageHeader title="Hubungi Kami" />
			<Breadcrumb breadcrumb={hubungiKami} />
			<div className="container" style={{ marginBottom: "110px" }}>
				<div className="row justify-content-center">
					<div className="col-lg-6 p-5 rounded-20 shadow d-grid gap-4">
						<div className="font-size-26 color-pristine-green fw-bold text-center">
							Hubungi Kami
						</div>
						<div className="font-size-16 color-dark-grey text-center">
							Punya pertanyaan seputar produk Pristine8.6+? Kamu
							juga dapat menghubungi kami dengan mengisi form di
							bawah ini.
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="d-grid gap-4"
						>
							<div className="d-grid gap-2">
								<div className="font-size-13 fw-bold color-dark-grey">
									Kategori Pertanyaan
								</div>
								<select className="form-select rounded-20">
									<option>Produk</option>
									<option>Layanan</option>
								</select>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 fw-bold color-dark-grey">
									Pertanyaan
								</div>
								<textarea
									className="form-control rounded-20"
									rows="5"
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 fw-bold color-dark-grey">
									Nama Lengkap
								</div>
								<input
									type="text"
									className="form-control rounded-20"
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 fw-bold color-dark-grey">
									Email
								</div>
								<input
									type="email"
									className="form-control rounded-20"
								/>
							</div>
							<div className="d-grid gap-2">
								<div className="font-size-13 fw-bold color-dark-grey">
									No. Handphone
								</div>
								<input
									type="text"
									className="form-control rounded-20"
								/>
							</div>
							<button
								type="submit"
								className="rounded-20 bg-pristine-green p-2 text-center color-white border-pristine-green"
							>
								Kirim Pesan
							</button>
						</form>
					</div>
				</div>
			</div>
		</Master>
	);
}

export default Index;
