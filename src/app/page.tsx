import Image from "next/image";
import apps_data from "../../data/apps-data";
import cn from "../../lib/cn";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <div className="text-center mx-auto mt-7">
        <h1 className="font-fredoka font-bold text-3xl">Thinkiverse</h1>
        <p className="font-semibold text-black/60">A playground of quirky thoughts & experiments!</p>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {apps_data.map((app_data) => (
          <Link href={app_data.route} key={app_data.id} className="flex justify-center">
            <Image
              width={300}
              src={app_data.image}
              alt={`${app_data.title} Poster Link`}
              className={cn(app_data.styles)}
            />
          </Link>
        ))}

        <div className="border-2 border-black rounded-md w-[300px] h-[115px] flex items-center justify-center mx-auto">
          <p className="text-black font-quicksand font-bold text-lg">More Coming Soon!</p>
        </div>
      </main>
    </>
  );
}