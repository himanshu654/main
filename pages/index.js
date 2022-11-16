import { baseUrl } from "../url/baseUrl";

import Layout from "../components/Layout";

export default function Home({ data }) {
  console.log(data.data.attributes.help.image.data.attributes.url);
  return (
    <>
      <section className="bg-orange-600 h-screen text-white pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5  items-center px-20 gap-10">
            <div className="col-span-2">
              <img
                src={`${baseUrl}${data?.data?.attributes?.headerImage?.data?.attributes?.url}`}
                className=""
                alt=""
              />
            </div>

            <div className="col-span-3">
              <h1 className="font-bold text-5xl leading-snug tracking-wide">
                {data.data.attributes.headerDescription}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 h-screen text-white pt-20 flex justify-center items-center">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-7xl font-bold text-center leading-snug tracking-wide">
            {data.data.attributes.paragraph}
          </h1>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto">
          <div className="h-screen grid grid-cols-2 items-center ">
            <div className="text-end">
              <h1 className="text-5xl font-bold text-orange-600 leading-snug w-11/12 tracking-wider">
                {data.data.attributes.help.heading}
              </h1>
              <h1 className="text-sm leading-loose py-5 text-gray-600 font-semibold w-11/12 tracking-widest">
                {data.data.attributes.help.paragraph}
              </h1>
            </div>

            <video
              className="rounded-[100px]"
              src={`${baseUrl}${data.data.attributes.help.image.data.attributes.url}`}
              type="video/mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto h-screen flex justify-center items-center text-end gap-x-12">
          {data.data.attributes.offer.map((data) => {
            return (
              <div>
                <p className="font-bold pb-5">{data.heading}</p>
                <h1 className="text-6xl pb-5 tracking-wider text-red-500 font-bold leading-snug">
                  {data.description}
                </h1>
                <h2 className="tracking-widest leading-loose font-bold text-gray-600">
                  {data.paragraph}
                </h2>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className={
          bg-[url(`${baseUrl}${data.data.attributes.culture.image.data.attributes.url}`)]
        }
      >
        <div className="max-w-7xl mx-auto">
          <div className="h-screen flex flex-col justify-center items-center text-center">
            <p className="font-bold">{data.data.attributes.culture.heading}</p>
            <p className="text-6xl py-5">
              {data.data.attributes.culture.description}
            </p>
            <p className="font-bold text-lg leading-loose w-2/3 tracking-normal pt-5">
              {data.data.attributes.culture.paragraph}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/api/homepage?populate=deep");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
