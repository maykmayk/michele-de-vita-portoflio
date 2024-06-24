import React, { useEffect, useState } from "react";
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";
import ArchivioGrid from "../components/templates/ArchivioGrid";

const Archivio = () => {
	return (
		<div className="App flex flex-col gap-4">
            <Header />

            <ArchivioGrid />

            <Footer />
        </div>
	);
};

export default Archivio;
