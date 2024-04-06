import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LinkIcon } from "@heroicons/react/24/solid";
import { Club } from "../types/Club";

export default function ClubList({clubs}: {clubs: Club[]}) {
  const rows: any = [];
  clubs.forEach(elem => {
    let links = [];
    if(elem.website) {
      links.push(<li key={'website'}><a href={elem.website}><LinkIcon className="h-6 w-6 text-blue-500 inline-block mr-2 mb-1" />{elem.website}</a></li>)
    }
    if(elem.email) {
      links.push(<li key={'email'}><a href={`mailto:${elem.email}`}><EnvelopeIcon className="h-6 w-6 text-blue-500 inline-block mr-2 mb-1" />{elem.email}</a></li>)
    }
    if(elem.instagram) {
      links.push(<li key={'instagram'}><a href={`https://instagram.com/${elem.instagram}`}><AtSymbolIcon className="h-6 w-6 text-blue-500 inline-block mr-2 mb-1" />{elem.instagram}</a></li>)
    }
    rows.push(
      <div className=" rounded-md overflow-hidden shadow-md hover:shadow-lg mb-5" key={elem.name}>
        <div className="p-4">
            <div className="flex justify-between">
                <h2 className="text-lg font-medium mb-2">{elem.name}</h2>
                <span className="text-gray-500 text-xs">{elem.state}</span>
            </div>

            <p className="text-gray-600 text-sm mb-4">{elem.city}</p>
            <ul>
              {links}
            </ul>
        </div>
      </div>
    )
  });

  return(
    <div>{rows}</div>
  );
}