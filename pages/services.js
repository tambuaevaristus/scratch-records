import Head from "next/head";
import React from "react";
import Services from "../components/Services";
import SubBanner from "../components/SubBanner";

function services() {
  return (
    <>
      <Head>
        <title>Scratch Record | Services</title>
        <meta name="keywords" content="scratch records" />
      </Head>
      <div>
        <SubBanner page="Services" />
        <Services />
      </div>
    </>
  );
}

export default services;
