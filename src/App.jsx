import Button from "./components/atom/Button";
import Navbar from "./components/atom/Navbar";
import Card from "./components/atom/Card";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 grid place-content-center h-[380px] lg:h-[560px] overflow-hidden">
        <div className="container px-14 mx-auto text-center my-16 lg:max-w-full">
          <h1 className="text-[22px] sm:text-4xl lg:text-7xl font-bold bg-gradient bg-clip-text text-transparent">
            Tempat Terbaik Untuk Kamu Mengembangkan Karir
          </h1>
          <div className="flex items-center justify-center mt-14">
            <input
              type="text"
              className="px-4 py-4 rounded-full w-[200px] lg:w-[600px] focus:outline-none"
              placeholder="Cari lowongan"
            />
            <Button className="bg-blue-600 ml-4 rounded-full py-4 hover:bg-blue-500">
              Cari
            </Button>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="mb-24">
            <p className="text-[28px] md:text-3xl text-slate-900 font-bold text-center mx-auto max-w-md">
              Pekerjaan Ini Mungkin Cocok dengan Keahlian Anda
            </p>
            <span className="border-gradient"></span>
          </div>
          <div className="px-0 md:flex md:flex-wrap md:justify-center items-center mx-auto gap-4">
            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />
            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />
            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />
            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />

            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />

            <Card
              title="Emina Korean Make Up"
              job_qualification="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            reiciendis."
              salary_min="4.000.000"
              salary_max="8.000.000"
              company_city="Jakarta Selatan"
            />
          </div>
          <p className="text-center mx-auto cursor-pointer">
            <span className="text-sm text-blue-600">
              Tampilkan lebih banyak &gt;&gt;&gt;
            </span>
          </p>
        </div>
      </section>

      <section className="py-16 min-h-screen bg-slate-50">
        <div className="container">
          <div className="w-full">
            <p className="text-[28px] md:text-3xl text-slate-900 font-bold text-center mx-auto max-w-md">
              Pelatihan Gratis yang Bisa Kamu Ikuti
            </p>
            <span className="border-gradient"></span>
          </div>
          <div className="grid md:grid-cold-2 lg:grid-cols-2 mt-14 gap-4">
            <div className="bg-white aspect-ratio rounded-lg overflow-hidden flex cursor-pointer hover:shadow-lg">
              <div className="w-1/2 rounded">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/400x300"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-4">
                <p className="font-bold text-slate-900">
                  Belajar Microsfot Excell
                </p>
                <p className="text-sm">Risfan Yani</p>
                <div className="mt-4">
                  <p className="text-md font-bold text-blue-600">Deskripsi</p>
                  <p className="text-sm text-gray-400 truncate">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, minima. Dignissimos, iste. Praesentium et rem eaque
                    eos minima aperiam voluptatibus, officia a excepturi, ab
                    consequuntur doloribus! Quidem sit, mollitia dicta ullam
                    assumenda, et illo incidunt quas voluptatem, quisquam
                    accusamus labore?
                  </p>
                </div>
                <p className="text-yellow-200 rounded-lg mt-4">
                  <span className="px-4 py-2 bg-slate-900 text-xs rounded-lg">
                    Detail Kelas
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white aspect-ratio rounded-lg overflow-hidden flex cursor-pointer hover:shadow-lg">
              <div className="w-1/2 rounded">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/400x300"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-4">
                <p className="font-bold text-slate-900">
                  Belajar Microsfot Excell
                </p>
                <p className="text-sm">Risfan Yani</p>
                <div className="mt-4">
                  <p className="text-md font-bold text-blue-600">Deskripsi</p>
                  <p className="text-sm text-gray-400 truncate ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, minima. Dignissimos, iste. Praesentium et rem eaque
                    eos minima aperiam voluptatibus, officia a excepturi, ab
                    consequuntur doloribus! Quidem sit, mollitia dicta ullam
                    assumenda, et illo incidunt quas voluptatem, quisquam
                    accusamus labore?
                  </p>
                </div>
                <p className="text-yellow-200 rounded-lg mt-4">
                  <span className="px-4 py-2 bg-slate-900 text-xs rounded-lg">
                    Detail Kelas
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white aspect-ratio rounded-lg overflow-hidden flex cursor-pointer hover:shadow-lg">
              <div className="w-1/2 rounded">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/400x300"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-4">
                <p className="font-bold text-slate-900">
                  Belajar Microsfot Excell
                </p>
                <p className="text-sm">Risfan Yani</p>
                <div className="mt-4">
                  <p className="text-md font-bold text-blue-600">Deskripsi</p>
                  <p className="text-sm text-gray-400 truncate ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, minima. Dignissimos, iste. Praesentium et rem eaque
                    eos minima aperiam voluptatibus, officia a excepturi, ab
                    consequuntur doloribus! Quidem sit, mollitia dicta ullam
                    assumenda, et illo incidunt quas voluptatem, quisquam
                    accusamus labore?
                  </p>
                </div>
                <p className="text-yellow-200 rounded-lg mt-4">
                  <span className="px-4 py-2 bg-slate-900 text-xs rounded-lg">
                    Detail Kelas
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white aspect-ratio rounded-lg overflow-hidden flex cursor-pointer hover:shadow-lg">
              <div className="w-1/2 rounded">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/400x300"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-4">
                <p className="font-bold text-slate-900">
                  Belajar Microsfot Excell
                </p>
                <p className="text-sm">Risfan Yani</p>
                <div className="mt-4">
                  <p className="text-md font-bold text-blue-600">Deskripsi</p>
                  <p className="text-sm text-gray-400 truncate ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, minima. Dignissimos, iste. Praesentium et rem eaque
                    eos minima aperiam voluptatibus, officia a excepturi, ab
                    consequuntur doloribus! Quidem sit, mollitia dicta ullam
                    assumenda, et illo incidunt quas voluptatem, quisquam
                    accusamus labore?
                  </p>
                </div>
                <p className="text-yellow-200 rounded-lg mt-4">
                  <span className="px-4 py-2 bg-slate-900 text-xs rounded-lg">
                    08 November 2022
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white aspect-ratio rounded-lg overflow-hidden flex cursor-pointer hover:shadow-lg">
              <div className="w-1/2 rounded">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/400x300"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-4">
                <p className="font-bold text-slate-900">
                  Belajar Microsfot Excell
                </p>
                <p className="text-sm">Risfan Yani</p>
                <div className="mt-4">
                  <p className="text-md font-bold text-blue-600">Deskripsi</p>
                  <p className="text-sm text-gray-400 truncate ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, minima. Dignissimos, iste. Praesentium et rem eaque
                    eos minima aperiam voluptatibus, officia a excepturi, ab
                    consequuntur doloribus! Quidem sit, mollitia dicta ullam
                    assumenda, et illo incidunt quas voluptatem, quisquam
                    accusamus labore?
                  </p>
                </div>
                <p className="text-yellow-200 rounded-lg mt-4">
                  <span className="px-4 py-2 bg-slate-900 text-xs rounded-lg">
                    Detail Kelas
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container flex flex-col items-center gap-y-4">
          <div className="w-20 rounded-full overflow-hidden">
            <img
              className="w-full"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFxqRwHVPj5cQ/profile-displayphoto-shrink_200_200/0/1657104553614?e=1673481600&v=beta&t=v6qGZvNUWoqGoPyXMwoRfQLA10bQZJpQ-l_O3DAzZyw"
              alt=""
            />
          </div>
          <p className="text-2xl font-bold bg-gradient bg-clip-text text-transparent">
            Risfan Yani.
          </p>
          <p className="text-white text-center">
            &copy; copyright Risfan Yani 2022 with{" "}
            <a href="https://sanbercode.com">
              <span className="text-blue-400">Sanbercode</span>
            </a>
          </p>
          <p className="text-center text-sm text-violet-400 max-w-lg">
            Terimasih saya ucapkan kepada{" "}
            <span className="text-blue-400">Sanbercode</span>, atas ilmu yang
            sudah diberikan, semoga mulai dari bootcamp ini, saya lebih giat
            lagi belajar untuk menjadi seorang{" "}
            <span className="text-blue-400">Front End Developer</span>
          </p>
        </div>
      </section>
    </>
  );
}
