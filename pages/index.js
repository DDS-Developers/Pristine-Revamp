// Components
import Master from "~/components/Master";

// Dependencies
import { useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
	const router = useRouter();

	useEffect(() => {
		router.push("/daftar");
	}, []);

	return <div>Anda akan diarahkan ...</div>;
}

export default Index;
